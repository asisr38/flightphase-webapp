# Email Functionality in FlightPhase

This document provides an overview of the email functionality implemented in the FlightPhase website.

## Overview

The FlightPhase website has an inquiry form system that allows potential clients to request information about different training programs. When a user submits an inquiry:

1. The user receives a program-specific confirmation email
2. The admin receives a detailed notification email with the inquiry information
3. All emails are customized based on the selected program type

## API Endpoint

The form submissions are handled by the `/api/inquiries` API route, which:

- Validates the form data
- Processes the submission
- Sends email notifications
- Returns a success/error response

## Environment Variables

The following environment variables need to be configured in your `.env.local` file:

```
# SMTP Configuration for contact form
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email recipients
RECIPIENT_EMAIL=admin@yourdomain.com
# Optional: Add CC and BCC recipients (can be comma-separated list of emails)
BCC_EMAIL=optional-bcc@yourdomain.com
```

For detailed setup instructions for Gmail SMTP, see [SMTP_SETUP.md](SMTP_SETUP.md).

## Email Templates

### User Confirmation Email

The confirmation email sent to users is customized based on the program type they selected:

| Program Type | Customized Message |
|-------------|-------------------|
| First Class 1:1 Coaching | Our personalized 1:1 coaching program will help you achieve your specific athletic goals. |
| Elite Group Training | Our Elite Group Training program will push you to new heights in a competitive team environment. |
| Two-a-Day Intensives | The Two-a-Day Intensives program is designed to maximize your progress through focused, high-intensity sessions. |
| Online Program | Our online program provides you with the tools and techniques to transform your athletic performance remotely. |
| Other/General | We offer various programs tailored to meet your specific athletic goals. |

### Admin Notification Email

The admin notification also includes program-specific information:

| Program Type | Admin Note |
|-------------|-----------|
| First Class 1:1 Coaching | Personal coaching inquiry - High priority |
| Elite Group Training | Group training inquiry |
| Two-a-Day Intensives | Intensive training inquiry - High priority |
| Online Program | Online program inquiry |
| Other/General | General inquiry |

## Template Files

The email templates are stored in the following files:

- `app/email-templates/confirmation-template.ts` - User confirmation email
- `app/email-templates/notification-template.ts` - Admin notification email

Each file exports two functions:
- `generateXXXEmail()` - Generates HTML email content
- `generateXXXEmailText()` - Generates plain text email content (for email clients that don't support HTML)

## Customizing Templates

To modify the email templates:

1. Edit the appropriate template files
2. Update the program-specific messages in the switch statements
3. Modify the HTML/CSS styling as needed

### Example: Adding a New Program Type

To add support for a new program type:

```typescript
switch(inquiry.programType) {
  // Existing cases...
  
  case 'New Program Name':
    programSpecificMessage = 'Custom message for the new program.';
    break;
    
  default:
    // Default message
}
```

## Testing

You can test the email functionality by:

1. Running the development server: `npm run dev`
2. Submitting an inquiry through the website contact forms
3. Checking the recipient email inbox for the confirmation
4. Checking the admin email for the notification

## Troubleshooting

Common issues:

- **Emails not sending**: Check your SMTP credentials and server logs
- **Missing custom content**: Verify the program type names match exactly between the form and templates
- **Styling issues**: Some email clients strip CSS; use inline styles for best compatibility 