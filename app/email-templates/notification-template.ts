/**
 * Generate HTML email template for inquiry notifications to admin
 */
export function generateNotificationEmail(inquiry: any): string {
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
    .detail {
      margin-bottom: 10px;
      padding: 10px;
      background-color: white;
      border-radius: 5px;
      border-left: 4px solid #00BFFF;
    }
    .detail strong {
      display: inline-block;
      min-width: 120px;
      color: #444;
    }
    .message-box {
      margin-top: 20px;
      background-color: white;
      padding: 15px;
      border-radius: 5px;
      border: 1px solid #ddd;
    }
    .footer {
      margin-top: 20px;
      text-align: center;
      color: #777;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New FlightPhase Inquiry</h1>
    </div>
    <div class="content">
      <h2>You've received a new inquiry from ${inquiry.name}</h2>
      
      <div class="detail">
        <strong>Program:</strong> ${inquiry.programType}
      </div>
      
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
      
      <div class="detail">
        <strong>IP Address:</strong> ${inquiry.ipAddress}
      </div>
      
      <div class="detail">
        <strong>Browser:</strong> ${inquiry.userAgent?.split('/')?.[0] || inquiry.userAgent || 'Unknown'}
      </div>
    </div>
    <div class="footer">
      <p>This is an automated message from the FlightPhase inquiry system.</p>
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
  return `
NEW FLIGHTPHASE INQUIRY

You've received a new inquiry from ${inquiry.name}

DETAILS:
Program: ${inquiry.programType}
Name: ${inquiry.name}
Email: ${inquiry.email}
Phone: ${inquiry.phone || 'Not provided'}

MESSAGE:
${inquiry.message || 'No message provided'}

Date: ${new Date(inquiry.createdAt).toLocaleString()}
IP Address: ${inquiry.ipAddress}
Browser: ${inquiry.userAgent?.split('/')?.[0] || inquiry.userAgent || 'Unknown'}

This is an automated message from the FlightPhase inquiry system.
  `.trim();
} 