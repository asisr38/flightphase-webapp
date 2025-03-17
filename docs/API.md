# FlightPhase API Documentation

This document provides information on the available API endpoints in the FlightPhase application.

## Inquiries API

### POST /api/inquiries

Handles form submissions from the contact/inquiry forms on the website.

#### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-123-4567",         // Optional
  "message": "I'm interested in...", // Optional
  "programType": "First Class 1:1 Coaching"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | The name of the person making the inquiry |
| email | string | Yes | Email address for contact |
| phone | string | No | Phone number (optional) |
| message | string | No | Additional message or notes |
| programType | string | Yes | The program of interest (e.g., "First Class 1:1 Coaching", "Elite Group Training", "Two-a-Day Intensives", "Online Program") |

#### Responses

##### Success Response

Status: `200 OK`

```json
{
  "success": true,
  "message": "Inquiry submitted successfully"
}
```

##### Error Responses

**Missing Required Fields**  
Status: `400 Bad Request`

```json
{
  "error": "Missing required fields"
}
```

**Server Configuration Error**  
Status: `500 Internal Server Error`

```json
{
  "error": "Server configuration error"
}
```

**Processing Error**  
Status: `500 Internal Server Error`

```json
{
  "error": "Failed to process inquiry"
}
```

#### Notes

- This endpoint sends two emails:
  1. A confirmation email to the user with program-specific content
  2. A notification email to the admin with the inquiry details
- The API requires proper SMTP configuration through environment variables
- For detailed information about the email templates, see [EMAIL.md](EMAIL.md)

## Additional Resources

- [SMTP Setup Guide](SMTP_SETUP.md) - How to configure email settings
- [Email Templates Documentation](EMAIL.md) - Information about the email templates 