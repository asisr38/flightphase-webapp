import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { generateConfirmationEmail, generateConfirmationEmailText } from '@/app/email-templates/confirmation-template';
import { generateNotificationEmail, generateNotificationEmailText } from '@/app/email-templates/notification-template';
import logger from '@/lib/logger';

// --- Input validation schema ---
const InquirySchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().max(30).optional().default(''),
  message: z.string().max(2000).optional().default(''),
  programType: z.string().min(1).max(100).default('General'),
});

// --- Simple in-memory rate limiter ---
// Allows up to MAX_REQUESTS per IP within WINDOW_MS milliseconds
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  return false;
}

export async function POST(request: Request) {
  // --- Rate limiting ---
  const headers = request.headers;
  const ip =
    headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    headers.get('x-real-ip') ||
    'unknown';

  if (isRateLimited(ip)) {
    logger.warn('Rate limit exceeded', { ip });
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();

    // --- Validate & parse input ---
    const parseResult = InquirySchema.safeParse(body);
    if (!parseResult.success) {
      const errors = parseResult.error.flatten().fieldErrors;
      logger.warn('Validation failed', errors);
      return NextResponse.json(
        { error: 'Invalid input', details: errors },
        { status: 400 }
      );
    }

    const inquiry = {
      ...parseResult.data,
      createdAt: new Date().toISOString(),
      userAgent: headers.get('user-agent') || undefined,
      ipAddress: ip,
    };

    // --- Check required email config ---
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.RECIPIENT_EMAIL;
    const bccEmail = process.env.BCC_EMAIL;

    if (!smtpUser || !smtpPass || !recipientEmail) {
      logger.error('Missing email configuration', {
        smtpUserExists: !!smtpUser,
        smtpPassExists: !!smtpPass,
        recipientEmailExists: !!recipientEmail,
      });
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // --- Create transporter ---
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user: smtpUser, pass: smtpPass },
    });

    // --- Send admin notification ---
    await transporter.sendMail({
      from: smtpUser,
      to: recipientEmail,
      bcc: bccEmail || undefined,
      subject: `New FlightPhase Inquiry: ${inquiry.programType}`,
      html: generateNotificationEmail(inquiry),
      text: generateNotificationEmailText(inquiry),
      replyTo: inquiry.email,
    });

    // --- Send user confirmation ---
    await transporter.sendMail({
      from: smtpUser,
      to: inquiry.email,
      subject: 'Thank you for your inquiry - FlightPhase',
      html: generateConfirmationEmail(inquiry),
      text: generateConfirmationEmailText(inquiry),
    });

    logger.info('Inquiry submitted successfully', {
      name: inquiry.name,
      email: inquiry.email,
      program: inquiry.programType,
    });

    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully',
    });
  } catch (error) {
    logger.error('Error processing inquiry', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}
