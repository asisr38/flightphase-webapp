"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
