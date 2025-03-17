# Setting Up Gmail SMTP for FlightPhase Inquiry Forms

This guide explains how to configure Gmail SMTP for sending emails from the FlightPhase inquiry forms.

## Prerequisites

1. A Gmail account (either a personal Gmail or Google Workspace account)
2. Two-Factor Authentication enabled on your Google account

## Step 1: Enable Two-Factor Authentication

If you haven't already enabled Two-Factor Authentication (2FA) on your Google account:

1. Go to your [Google Account](https://myaccount.google.com/)
2. Select "Security" from the left menu
3. Under "Signing in to Google," select "2-Step Verification"
4. Follow the steps to enable 2FA

## Step 2: Generate an App Password

Once 2FA is enabled, you can create an App Password specifically for the FlightPhase application:

1. Go to your [Google Account](https://myaccount.google.com/)
2. Select "Security" from the left menu
3. Under "Signing in to Google," select "App passwords" (you may need to enter your password again)
4. At the bottom, select "Select app" and choose "Other (Custom name)"
5. Enter "FlightPhase Website" or a similar name you'll recognize
6. Click "Generate"
7. Google will display a 16-character password. **Copy this password** - it will only be shown once!

## Step 3: Update Environment Variables

Update the `.env.local` file in your FlightPhase project with your Gmail credentials:

```
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-gmail-address@gmail.com
SMTP_PASSWORD=your-16-character-app-password

# Email Settings
EMAIL_FROM="FlightPhase <your-gmail-address@gmail.com>"
ADMIN_EMAIL=admin@flightphase.com
CC_EMAIL=optional-cc@example.com
BCC_EMAIL=optional-bcc@example.com
```

Replace the following values:
- `SMTP_USER`: Your Gmail address
- `SMTP_PASSWORD`: The 16-character App Password generated in Step 2
- `EMAIL_FROM`: Your Gmail address with an optional display name
- `ADMIN_EMAIL`: The email address that will receive inquiry notifications
- `CC_EMAIL` and `BCC_EMAIL`: Optional additional recipients

## Step 4: Test Your Configuration

1. Start your development server (`npm run dev`)
2. Navigate to `/api/inquiries/status` to verify your SMTP configuration
3. Submit a test inquiry through one of the "Inquire Now" buttons on the site

## Troubleshooting

If you encounter issues:

### SMTP Connection Errors

- Verify that your App Password is correct
- Make sure you've entered your Gmail address correctly
- Check that your Gmail account doesn't have any security restrictions

### Email Not Sending

- Check the logs in the `logs/` directory
- Verify that all environment variables are correctly set
- Ensure your Gmail account hasn't hit sending limits

### Gmail Sending Limits

Note that Gmail has sending limits:
- Personal Gmail accounts: 500 emails per day
- Google Workspace accounts: Varies by plan (typically 2,000+ per day)

## Production Considerations

For production environments, consider:

1. Using a dedicated email sending service like SendGrid, Mailgun, or Amazon SES
2. Setting up SPF, DKIM, and DMARC records for better deliverability
3. Implementing email queue systems for handling high volumes of emails

## Security Notes

- Never commit your `.env.local` file to version control
- Rotate your App Password periodically
- Consider using environment variable management services in production 