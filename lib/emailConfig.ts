interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  from: string;
}

// Email configuration for SMTP server
export const emailConfig: EmailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'your-username',
    pass: process.env.SMTP_PASS || process.env.SMTP_PASSWORD || 'your-password'
  },
  from: process.env.EMAIL_FROM || process.env.SMTP_USER || 'noreply@flightphase.com'
};

export default emailConfig; 