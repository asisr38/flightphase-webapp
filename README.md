# FlightPhase - Elite Athletic Training

A modern, responsive website for FlightPhase, offering elite speed and strength coaching services. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with glassmorphism and gradient effects
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 for optimal performance
- 🔒 TypeScript for type safety
- 🎯 Tailwind CSS for styling
- 🌓 Dark mode optimized
- 📧 Program-specific email notifications with customized templates

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
- [Nodemailer](https://nodemailer.com/) for email functionality

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/nischalstha/flightphase.git
```

2. Install dependencies:

```bash
cd flightphase
npm install
```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add the following variables:
   ```
   # SMTP Configuration for contact form
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   
   # Email recipients
   RECIPIENT_EMAIL=admin@yourdomain.com
   # Optional: Add CC and BCC recipients
   BCC_EMAIL=optional-bcc@yourdomain.com
   ```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── api/              # API routes
│   └── email-templates/  # Email template files
├── components/           # React components
├── public/               # Static assets
├── styles/               # Global styles
└── lib/                  # Utility functions
```

## Email Functionality

The website includes a contact form with program-specific email templates:

- **API Endpoint**: `/api/inquiries` handles form submissions
- **Email Templates**: Customized based on the selected program
- **Notifications**: Admin receives detailed inquiry information
- **Confirmation**: Users receive a confirmation email with program details

For more details, see the [Email Documentation](docs/EMAIL.md).

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Deployment

This project is optimized for deployment on Vercel. Simply push to your GitHub repository and connect it to Vercel for automatic deployments.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Nischal Shrestha - [@nischalstha](https://github.com/nischalstha)

Project Link: [https://github.com/nischalstha/flightphase](https://github.com/nischalstha/flightphase)
