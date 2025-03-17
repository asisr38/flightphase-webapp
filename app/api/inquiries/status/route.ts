import { NextResponse } from "next/server"
import logger from '@/lib/logger';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Data directory for inquiries
const DATA_DIR = path.join(process.cwd(), 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

// Log directory
const LOG_DIR = path.join(process.cwd(), 'logs');
const INQUIRY_LOG_FILE = path.join(LOG_DIR, 'inquiries.log');
const ERROR_LOG_FILE = path.join(LOG_DIR, 'errors.log');

export async function GET() {
  try {
    // Load environment variables for status
    const emailConfig = {
      service: "gmail",
      user: process.env.SMTP_USER ? '****' + process.env.SMTP_USER.substring(4) : 'Missing',
      recipient: process.env.RECIPIENT_EMAIL || 'Missing',
      bcc: process.env.BCC_EMAIL || 'None',
    };

    logger.info('Email service status check initiated');
    
    // Check if the credentials are defined
    const credentialsDefined = 
      !!process.env.SMTP_USER && 
      !!process.env.SMTP_PASS;

    // Check Gmail connection
    let smtpStatus = 'unknown';
    let error = null;

    if (credentialsDefined) {
      try {
        logger.info('Testing Gmail connection...');
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
          debug: true,
        });

        const isConnected = await transporter.verify();
        smtpStatus = isConnected ? 'connected' : 'disconnected';
        logger.info('Gmail connection test result', { status: smtpStatus });
      } catch (err) {
        smtpStatus = 'error';
        error = err instanceof Error ? err.message : String(err);
        logger.error('Gmail connection test failed', error);
      }
    } else {
      smtpStatus = 'not_configured';
      logger.warn('Gmail credentials not fully configured');
    }

    // Check data directory and inquiries file
    const dataDirectoryExists = fs.existsSync(DATA_DIR);
    const inquiriesFileExists = fs.existsSync(INQUIRIES_FILE);
    
    // If inquiries file exists, get count
    let inquiryCount = 0;
    if (inquiriesFileExists) {
      try {
        const data = fs.readFileSync(INQUIRIES_FILE, 'utf8');
        const inquiries = JSON.parse(data);
        inquiryCount = inquiries.length;
      } catch (err) {
        logger.error('Error reading inquiries file', err);
      }
    }

    // Check log files
    const logDirectoryExists = fs.existsSync(LOG_DIR);
    const inquiryLogExists = fs.existsSync(INQUIRY_LOG_FILE);
    const errorLogExists = fs.existsSync(ERROR_LOG_FILE);

    // Get status information
    const status = {
      service: 'FlightPhase Inquiry System',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      emailService: {
        config: emailConfig,
        smtp: {
          status: smtpStatus,
          error: error
        }
      },
      storage: {
        inquiryCount
      }
    };

    logger.info('Email service status check completed', { smtpStatus });
    
    return NextResponse.json(status, { status: 200 });
  } catch (error) {
    logger.error('Error in status check', error);
    return NextResponse.json(
      { error: "Internal server error during status check" }, 
      { status: 500 }
    );
  }
} 