import type React from "react";
import "@/app/globals.css";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/scroll-progress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"]
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata = {
  title: "FlightPhase | Elite Athletic Training",
  description: "Transform your athletic performance with elite speed and strength coaching from FlightPhase. Specialized programs for athletes of all levels.",
  keywords: ["athletic training", "speed training", "strength coaching", "sports performance", "elite coaching", "FlightPhase"],
  authors: [{ name: "Aron Long", url: "https://flightphase.com" }],
  creator: "FlightPhase",
  publisher: "FlightPhase",
  metadataBase: new URL("https://flightphase.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flightphase.com",
    title: "FlightPhase | Elite Athletic Training",
    description: "Transform your athletic performance with elite speed and strength coaching from FlightPhase. Specialized programs for athletes of all levels.",
    siteName: "FlightPhase",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FlightPhase Elite Athletic Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlightPhase | Elite Athletic Training",
    description: "Transform your athletic performance with elite speed and strength coaching from FlightPhase. Specialized programs for athletes of all levels.",
    images: ["/images/twitter-image.jpg"],
    creator: "@flightphase",
  },
  icons: {
    icon: [
      {
        url: "/favicon/1-01.png",
        href: "/favicon/1-01.png"
      }
    ]
  },
  generator: "v0.dev",
  category: "Sports & Fitness",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased bg-black`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <ScrollProgress />
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
