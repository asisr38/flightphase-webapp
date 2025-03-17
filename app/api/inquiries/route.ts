import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateConfirmationEmail, generateConfirmationEmailText } from '@/app/email-templates/confirmation-template';
import { generateNotificationEmail, generateNotificationEmailText } from '@/app/email-templates/notification-template';
import logger from '@/lib/logger';

export async function POST(request: Request) {
  try {
    const inquiry = await request.json();
    
    // Add timestamp
    inquiry.createdAt = new Date().toISOString();
    
    // Validate required fields
    if (!inquiry.name || !inquiry.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get email configuration from environment variables
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.RECIPIENT_EMAIL;
    const bccEmail = process.env.BCC_EMAIL;

    if (!smtpUser || !smtpPass || !recipientEmail) {
      logger.error('Missing email configuration', {
        smtpUserExists: !!smtpUser,
        smtpPassExists: !!smtpPass,
        recipientEmailExists: !!recipientEmail
      });
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    // Try to get user agent and IP info if available
    try {
      const headers = request.headers;
      inquiry.userAgent = headers.get('user-agent') || undefined;
      inquiry.ipAddress = headers.get('x-forwarded-for') || 
                         headers.get('x-real-ip') || 
                         'Unknown';
    } catch (error) {
      // Ignore errors in getting user agent/IP
      logger.warn('Could not capture user agent or IP', error);
    }

    // Generate notification email for admin using the styled template
    const adminEmailHtml = generateNotificationEmail(inquiry);
    const adminEmailText = generateNotificationEmailText(inquiry);

    // Send notification to admin
    await transporter.sendMail({
      from: smtpUser,
      to: recipientEmail,
      bcc: bccEmail || undefined,
      subject: `New FlightPhase Inquiry: ${inquiry.programType}`,
      html: adminEmailHtml,
      text: adminEmailText,
      replyTo: inquiry.email
    });

    // Prepare confirmation email to user
    const userHtml = generateConfirmationEmail(inquiry);
    const userText = generateConfirmationEmailText(inquiry);

    // Send confirmation to user
    await transporter.sendMail({
      from: smtpUser,
      to: inquiry.email,
      subject: 'Thank you for your inquiry - FlightPhase',
      html: userHtml,
      text: userText
    });

    logger.info('Inquiry submitted successfully', {
      name: inquiry.name,
      email: inquiry.email,
      program: inquiry.programType
    });

    return NextResponse.json({ 
      success: true,
      message: 'Inquiry submitted successfully' 
    });

  } catch (error) {
    logger.error('Error processing inquiry', error);
    
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
} 