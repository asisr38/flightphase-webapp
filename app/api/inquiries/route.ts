import { NextRequest, NextResponse } from "next/server"
import fs from 'fs';
import path from 'path';
import logger from '@/lib/logger';
import nodemailer from 'nodemailer';
import { generateNotificationEmail, generateNotificationEmailText } from "@/app/email-templates/notification-template"
import { generateConfirmationEmail, generateConfirmationEmailText } from "@/app/email-templates/confirmation-template"

// Data directory for storing inquiries
const DATA_DIR = path.join(process.cwd(), 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating data directory:', error);
    logger.error('Error creating data directory', error);
  }
}

// Initialize inquiries file if it doesn't exist
if (!fs.existsSync(INQUIRIES_FILE)) {
  try {
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([], null, 2));
  } catch (error) {
    console.error('Error initializing inquiries file:', error);
    logger.error('Error initializing inquiries file', error);
  }
}

// Load inquiries from file
function loadInquiries(): any[] {
  try {
    const data = fs.readFileSync(INQUIRIES_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    logger.error('Error loading inquiries from file', error);
    return [];
  }
}

// Save inquiries to file
function saveInquiries(inquiries: any[]): void {
  try {
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2));
  } catch (error) {
    logger.error('Error saving inquiries to file', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    logger.info('Received inquiry submission', { programType: data.programType });
    
    // Basic validation
    if (!data.name || !data.email) {
      logger.warn('Validation failed for inquiry submission', { 
        missingFields: [
          !data.name ? 'name' : null, 
          !data.email ? 'email' : null
        ].filter(Boolean) 
      });
      
      return NextResponse.json(
        { error: "Name and email are required" }, 
        { status: 400 }
      );
    }
    
    // Create inquiry record
    const newInquiry = {
      id: Math.random().toString(36).substring(2, 15),
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      message: data.message || null,
      programType: data.programType || "General",
      createdAt: new Date().toISOString(),
      ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    };
    
    // Save to file
    const inquiries = loadInquiries();
    inquiries.push(newInquiry);
    saveInquiries(inquiries);
    
    logger.info('Inquiry saved successfully', { inquiryId: newInquiry.id });
    
    // Log email setup information
    logger.info("Inquiry from:", { 
      email: data.email, 
      program: data.programType,
      recipient: process.env.RECIPIENT_EMAIL
    });
    
    if (process.env.BCC_EMAIL) 
      logger.info("BCC to:", { email: process.env.BCC_EMAIL });
    
    // Verify environment variables are correctly loaded
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      logger.error("SMTP credentials are missing in environment variables");
      return NextResponse.json(
        { error: "Email configuration error" }, 
        { status: 500 }
      );
    }
    
    // Create email transporter
    logger.info("Setting up Gmail transporter with user:", process.env.SMTP_USER);
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      debug: process.env.NODE_ENV !== 'production',
    });
    
    // Verify SMTP connection
    try {
      logger.info("Verifying Gmail connection...");
      await transporter.verify();
      logger.info("Gmail connection verified successfully");
    } catch (verifyError) {
      logger.error("Gmail connection verification failed", verifyError);
      return NextResponse.json(
        { error: "Failed to connect to email server" }, 
        { status: 500 }
      );
    }
    
    // Send notification email to recipient
    const notificationMailOptions = {
      from: `"FlightPhase Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      bcc: process.env.BCC_EMAIL || undefined,
      subject: `New FlightPhase Inquiry: ${newInquiry.programType}`,
      html: generateNotificationEmail(newInquiry),
      text: generateNotificationEmailText(newInquiry),
      replyTo: newInquiry.email,
    };
    
    let notificationSent = false;
    try {
      logger.info("Sending notification email to recipient...");
      const notificationInfo = await transporter.sendMail(notificationMailOptions);
      logger.info("Notification email sent successfully", { 
        messageId: notificationInfo.messageId,
        to: process.env.RECIPIENT_EMAIL
      });
      notificationSent = true;
    } catch (notificationError) {
      logger.error("Failed to send notification email to recipient", notificationError);
      // Continue to try sending confirmation email even if notification fails
    }
    
    // Send confirmation email to user
    const confirmationMailOptions = {
      from: `"FlightPhase" <${process.env.SMTP_USER}>`,
      to: newInquiry.email,
      subject: `Thank you for contacting FlightPhase`,
      html: generateConfirmationEmail(newInquiry),
      text: generateConfirmationEmailText(newInquiry),
    };
    
    let confirmationSent = false;
    try {
      logger.info("Sending confirmation email to user...");
      const confirmationInfo = await transporter.sendMail(confirmationMailOptions);
      logger.info("Confirmation email sent successfully", { 
        messageId: confirmationInfo.messageId,
        to: newInquiry.email
      });
      confirmationSent = true;
    } catch (confirmationError) {
      logger.error("Failed to send confirmation email to user", confirmationError);
    }
    
    // Return response based on email status
    if (notificationSent && confirmationSent) {
      return NextResponse.json({ 
        success: true, 
        message: "Both emails sent successfully.",
        inquiry: newInquiry 
      }, { status: 201 });
    } else if (notificationSent) {
      return NextResponse.json({ 
        success: true,
        message: "Notification sent but confirmation failed.", 
        partial: true,
        inquiry: newInquiry 
      }, { status: 201 });
    } else if (confirmationSent) {
      return NextResponse.json({ 
        success: true,
        message: "Confirmation sent but notification failed.", 
        partial: true,
        inquiry: newInquiry 
      }, { status: 201 });
    } else {
      return NextResponse.json({ 
        success: false,
        error: "Failed to send any emails but inquiry was saved.",
        inquiry: newInquiry 
      }, { status: 500 });
    }
  } catch (error) {
    logger.error('Error processing inquiry submission', error);
    return NextResponse.json(
      { error: "Internal server error" }, 
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Load inquiries from file
    const inquiries = loadInquiries();
    logger.info('Inquiries retrieved successfully', { count: inquiries.length });
    
    return NextResponse.json({ 
      inquiries 
    }, { status: 200 });
  } catch (error) {
    logger.error('Error fetching inquiries', error);
    return NextResponse.json(
      { error: "Internal server error" }, 
      { status: 500 }
    );
  }
} 