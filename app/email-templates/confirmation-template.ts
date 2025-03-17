/**
 * Generate HTML email template for confirmation emails to users
 */
export function generateConfirmationEmail(inquiry: any): string {
  // Customize message based on program type
  let programSpecificMessage = '';
  
  switch(inquiry.programType) {
    case 'First Class 1:1 Coaching':
      programSpecificMessage = 'Our personalized 1:1 coaching program will help you achieve your specific athletic goals.';
      break;
    case 'Elite Group Training':
      programSpecificMessage = 'Our Elite Group Training program will push you to new heights in a competitive team environment.';
      break;
    case 'Two-a-Day Intensives':
      programSpecificMessage = 'The Two-a-Day Intensives program is designed to maximize your progress through focused, high-intensity sessions.';
      break;
    case 'Online Program':
      programSpecificMessage = 'Our online program provides you with the tools and techniques to transform your athletic performance remotely.';
      break;
    default:
      programSpecificMessage = 'We offer various programs tailored to meet your specific athletic goals.';
  }

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
      line-height: 1.5;
      color: #333333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
    }
    .header {
      background-color: #1E0B4C;
      color: white;
      padding: 20px;
      text-align: center;
    }
    .content {
      padding: 20px 0;
    }
    .highlight {
      background-color: #f2f7ff;
      padding: 15px;
      border-left: 4px solid #4B9EFF;
      margin-bottom: 20px;
    }
    .footer {
      margin-top: 20px;
      text-align: center;
      color: #666;
      font-size: 12px;
      border-top: 1px solid #eee;
      padding-top: 15px;
    }
    h1 {
      font-size: 22px;
      font-weight: 700;
      margin: 0;
    }
    h2 {
      font-size: 18px;
      font-weight: 600;
      margin: 0 0 20px 0;
      color: #1E0B4C;
    }
    p {
      margin: 0 0 15px;
    }
    .button {
      background-color: #4B9EFF;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 4px;
      display: inline-block;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Your Interest in FlightPhase</h1>
    </div>
    <div class="content">
      <h2>Hello ${inquiry.name},</h2>
      
      <div class="highlight">
        <p>We have received your inquiry about the <strong>${inquiry.programType}</strong> program.</p>
        <p>${programSpecificMessage}</p>
      </div>
      
      <p>Our team will review your inquiry and get back to you within 24-48 hours.</p>
      
      <p>
        Best regards,<br>
        The FlightPhase Team
      </p>
      
      <a href="https://flightphase.vercel.app/" class="button">Visit Our Website</a>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} FlightPhase. All rights reserved.</p>
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
  // Customize message based on program type
  let programSpecificMessage = '';
  
  switch(inquiry.programType) {
    case 'First Class 1:1 Coaching':
      programSpecificMessage = 'Our personalized 1:1 coaching program will help you achieve your specific athletic goals.';
      break;
    case 'Elite Group Training':
      programSpecificMessage = 'Our Elite Group Training program will push you to new heights in a competitive team environment.';
      break;
    case 'Two-a-Day Intensives':
      programSpecificMessage = 'The Two-a-Day Intensives program is designed to maximize your progress through focused, high-intensity sessions.';
      break;
    case 'Online Program':
      programSpecificMessage = 'Our online program provides you with the tools and techniques to transform your athletic performance remotely.';
      break;
    default:
      programSpecificMessage = 'We offer various programs tailored to meet your specific athletic goals.';
  }

  return `
THANK YOU FOR CONTACTING FLIGHTPHASE

Hello ${inquiry.name},

We have received your inquiry about the ${inquiry.programType} program.
${programSpecificMessage}

Our team will review your inquiry and get back to you within 24-48 hours.

Best regards,
The FlightPhase Team

Visit our website: https://flightphase.vercel.app/

© ${new Date().getFullYear()} FlightPhase. All rights reserved.
  `.trim();
} 