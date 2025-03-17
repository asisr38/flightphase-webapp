import nodemailer from 'nodemailer';
import { emailConfig } from './emailConfig';
import logger from './logger';

interface EmailOptions {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
  cc?: string | string[];
  bcc?: string | string[];
}

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.secure,
      auth: {
        user: emailConfig.auth.user,
        pass: emailConfig.auth.pass,
      },
    });

    // Verify connection configuration
    this.transporter.verify()
      .then(() => {
        logger.info('SMTP server connection established');
      })
      .catch((error) => {
        logger.error('SMTP server connection failed', error);
      });
  }

  /**
   * Send an email
   * @param options Email options
   * @returns Promise that resolves with the email info
   */
  async sendEmail(options: EmailOptions): Promise<any> {
    try {
      const { to, subject, text, html, replyTo, cc, bcc } = options;

      const mailOptions = {
        from: emailConfig.from,
        to,
        subject,
        text,
        html,
        replyTo,
        cc,
        bcc,
      };

      const info = await this.transporter.sendMail(mailOptions);
      logger.info('Email sent successfully', { messageId: info.messageId, to });
      return info;
    } catch (error) {
      logger.error('Email sending failed', error);
      throw error;
    }
  }

  /**
   * Send an inquiry notification email
   * @param inquiry The inquiry data
   * @returns Promise that resolves with the email info
   */
  async sendInquiryNotification(inquiry: any): Promise<any> {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@flightphase.com';
    
    // Email to admin
    const adminEmailOptions: EmailOptions = {
      to: adminEmail,
      subject: `New FlightPhase Inquiry: ${inquiry.programType}`,
      html: `
        <h2>New Inquiry from ${inquiry.name}</h2>
        <p><strong>Program:</strong> ${inquiry.programType}</p>
        <p><strong>Contact Information:</strong></p>
        <ul>
          <li><strong>Email:</strong> ${inquiry.email}</li>
          <li><strong>Phone:</strong> ${inquiry.phone || 'Not provided'}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p>${inquiry.message || 'No message provided'}</p>
        <p><strong>Date:</strong> ${new Date(inquiry.createdAt).toLocaleString()}</p>
      `,
      replyTo: inquiry.email,
    };

    // Confirmation email to user
    const userEmailOptions: EmailOptions = {
      to: inquiry.email,
      subject: `Thank you for your inquiry - FlightPhase`,
      html: `
        <h2>Thank you for contacting FlightPhase!</h2>
        <p>We have received your inquiry about the ${inquiry.programType} program.</p>
        <p>A member of our team will be in touch with you shortly. If you have any additional questions in the meantime, please don't hesitate to reach out.</p>
        <p>Best regards,<br>The FlightPhase Team</p>
      `,
    };

    try {
      // Send both emails
      const adminEmailInfo = await this.sendEmail(adminEmailOptions);
      const userEmailInfo = await this.sendEmail(userEmailOptions);
      
      return { adminEmailInfo, userEmailInfo };
    } catch (error) {
      logger.error('Sending inquiry notification emails failed', error);
      throw error;
    }
  }
}

// Export a singleton instance
export const emailService = new EmailService();
export default emailService; 