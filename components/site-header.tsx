"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, Instagram, Youtube } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Custom TikTok icon component
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleLinkClick = () => {
    setSheetOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}`}>
      <div className={`absolute inset-0 glass-effect transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/logo/Asset 6@3x-8.png"
              alt="FlightPhase"
              width={160}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {[
              { href: "#online-program", label: "Transformation Program" },
              { href: "#about", label: "About" },
              { href: "#training", label: "Training" },
              { href: "#assessment", label: "Assessment" }
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-all duration-300 hover:scale-110 relative group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E0B4C] via-[#4B9EFF] to-[#0B4FFF] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="#online-program">
              <Button className="gradient-button text-white rounded-full px-8 h-11 transition-all duration-300 hover:scale-105 gradient-glow">
                Get The Course
              </Button>
            </Link>
            <Link
              href="https://www.instagram.com/flightphas.e?utm_source=qr"
              className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200 hover:border-blue-500/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.tiktok.com/@flight.phase?_t=ZT-8unDzwgFMoI&_r=1"
              className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200 hover:border-blue-500/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTokIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.youtube.com/@flightphas.e"
              className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200 hover:border-blue-500/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="h-5 w-5" />
            </Link>
          </div>

          <div className="flex items-center">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="gradient-primary border-l border-white/10"
                title="Main Navigation"
                description="Site navigation menu with links to main sections"
              >
                <nav className="flex flex-col gap-6 mt-10 relative z-10">
                  {[
                    { href: "#online-program", label: "Transformation Program" },
                    { href: "#about", label: "About" },
                    { href: "#training", label: "Training" },
                    { href: "#assessment", label: "Assessment" }
                  ].map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2 relative group"
                      onClick={handleLinkClick}
                    >
                      {item.label}
                      <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E0B4C] via-[#4B9EFF] to-[#0B4FFF] group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  ))}
                </nav>

                <div className="mt-8">
                  <Link href="#online-program" onClick={handleLinkClick}>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-base font-medium w-full">
                      Get The Course
                    </button>
                  </Link>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 flex justify-center">
                  <div className="flex space-x-4">
                    {[
                      { icon: Instagram, href: "https://www.instagram.com/flightphas.e?utm_source=qr" },
                      { icon: TikTokIcon, href: "https://www.tiktok.com/@flight.phase?_t=ZT-8unDzwgFMoI&_r=1" },
                      { icon: Youtube, href: "https://www.youtube.com/@flightphas.e" }
                    ].map((social, i) => (
                      <Link
                        key={i}
                        href={social.href}
                        className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200 hover:border-blue-500/50"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                      >
                        <social.icon className="h-5 w-5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
