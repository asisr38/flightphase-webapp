/**
 * Generate HTML email template for confirmation emails to users
 */
export function generateConfirmationEmail(inquiry: any): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting FlightPhase</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background-color: #00BFFF;
      color: white;
      padding: 20px;
      text-align: center;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    .content {
      background-color: #f9f9f9;
      padding: 20px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    .highlight {
      background-color: white;
      padding: 15px;
      border-radius: 5px;
      border-left: 4px solid #00BFFF;
      margin-bottom: 20px;
    }
    .cta {
      background-color: #00BFFF;
      color: white;
      padding: 12px 20px;
      text-decoration: none;
      border-radius: 4px;
      display: inline-block;
      margin-top: 10px;
      font-weight: bold;
    }
    .footer {
      margin-top: 20px;
      text-align: center;
      color: #777;
      font-size: 12px;
    }
    .social {
      margin-top: 15px;
    }
    .social a {
      margin: 0 10px;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Contacting FlightPhase</h1>
    </div>
    <div class="content">
      <h2>Hello ${inquiry.name},</h2>
      
      <div class="highlight">
        <p>We have received your inquiry about the <strong>${inquiry.programType}</strong> program.</p>
      </div>
      
      <p>Thank you for your interest in FlightPhase. Our team will review your inquiry and get back to you as soon as possible, usually within 24-48 hours.</p>
      
      <p>If you have any additional questions or need immediate assistance, feel free to reach out to us directly.</p>
      
      <p>
        Best regards,<br>
        The FlightPhase Team
      </p>
      
      <div class="social">
        <p>Follow us on social media for updates and training tips:</p>
        <a href="https://twitter.com/flightphase" style="color: #00BFFF;">Twitter</a>
        <a href="https://instagram.com/flightphase" style="color: #00BFFF;">Instagram</a>
        <a href="https://facebook.com/flightphase" style="color: #00BFFF;">Facebook</a>
      </div>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} FlightPhase. All rights reserved.</p>
      <p>This is an automated message, please do not reply directly to this email.</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Generate plain text email template for confirmation emails to users
 */
export function generateConfirmationEmailText(inquiry: any): string {
  return `
THANK YOU FOR CONTACTING FLIGHTPHASE

Hello ${inquiry.name},

We have received your inquiry about the ${inquiry.programType} program.

Thank you for your interest in FlightPhase. Our team will review your inquiry and get back to you as soon as possible, usually within 24-48 hours.

If you have any additional questions or need immediate assistance, feel free to reach out to us directly.

Best regards,
The FlightPhase Team

Follow us on social media for updates and training tips:
Twitter: https://twitter.com/flightphase
Instagram: https://instagram.com/flightphase
Facebook: https://facebook.com/flightphase

© ${new Date().getFullYear()} FlightPhase. All rights reserved.
This is an automated message, please do not reply directly to this email.
  `.trim();
} 