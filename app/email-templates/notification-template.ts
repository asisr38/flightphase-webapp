/**
 * Generate HTML email template for inquiry notifications to admin
 */
export function generateNotificationEmail(inquiry: any): string {
  // Customize program-specific info
  let programInfo = '';
  
  switch(inquiry.programType) {
    case 'First Class 1:1 Coaching':
      programInfo = 'Personal coaching inquiry - High priority';
      break;
    case 'Elite Group Training':
      programInfo = 'Group training inquiry';
      break;
    case 'Two-a-Day Intensives':
      programInfo = 'Intensive training inquiry - High priority';
      break;
    case 'Online Program':
      programInfo = 'Online program inquiry';
      break;
    default:
      programInfo = 'General inquiry';
  }

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New FlightPhase Inquiry</title>
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
    .detail {
      margin-bottom: 10px;
      padding: 10px;
      background-color: #f2f7ff;
      border-left: 3px solid #4B9EFF;
    }
    .detail strong {
      display: inline-block;
      min-width: 80px;
      color: #333333;
      font-weight: bold;
    }
    .message-box {
      margin: 15px 0;
      background-color: #f2f7ff;
      padding: 15px;
      border-left: 3px solid #4B9EFF;
    }
    .message-box h3 {
      margin-top: 0;
      margin-bottom: 10px;
      color: #1E0B4C;
      font-size: 16px;
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
      font-size: 20px;
      font-weight: 700;
      margin: 0;
    }
    h2 {
      font-size: 18px;
      margin: 0 0 15px 0;
      color: #1E0B4C;
    }
    p {
      margin: 0 0 10px;
    }
    .program-type {
      font-weight: bold;
      color: #1E0B4C;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Inquiry: ${inquiry.programType}</h1>
    </div>
    
    <h2>${programInfo}</h2>
    
    <div class="detail">
      <strong>Name:</strong> ${inquiry.name}
    </div>
    
    <div class="detail">
      <strong>Email:</strong> ${inquiry.email}
    </div>
    
    <div class="detail">
      <strong>Phone:</strong> ${inquiry.phone || 'Not provided'}
    </div>
    
    <div class="message-box">
      <h3>Message:</h3>
      <p>${inquiry.message || 'No message provided'}</p>
    </div>
    
    <div class="detail">
      <strong>Date:</strong> ${new Date(inquiry.createdAt).toLocaleString()}
    </div>
    
    <div class="footer">
      <p>Contact form submission from FlightPhase website</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Generate plain text email template for inquiry notifications to admin
 */
export function generateNotificationEmailText(inquiry: any): string {
  // Customize program-specific info
  let programInfo = '';
  
  switch(inquiry.programType) {
    case 'First Class 1:1 Coaching':
      programInfo = 'Personal coaching inquiry - High priority';
      break;
    case 'Elite Group Training':
      programInfo = 'Group training inquiry';
      break;
    case 'Two-a-Day Intensives':
      programInfo = 'Intensive training inquiry - High priority';
      break;
    case 'Online Program':
      programInfo = 'Online program inquiry';
      break;
    default:
      programInfo = 'General inquiry';
  }

  return `
NEW FLIGHTPHASE INQUIRY: ${inquiry.programType}

${programInfo}

CONTACT DETAILS:
Name: ${inquiry.name}
Email: ${inquiry.email}
Phone: ${inquiry.phone || 'Not provided'}
Date: ${new Date(inquiry.createdAt).toLocaleString()}

MESSAGE:
${inquiry.message || 'No message provided'}

Contact form submission from FlightPhase website
  `.trim();
} 