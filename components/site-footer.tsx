import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="absolute inset-0 glass-effect -z-10"></div>

      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Logo and Social Links */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image
                src="/logo/Asset 8@3x-8.png"
                alt="FlightPhase"
                width={160}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm text-white/60 max-w-xs">
              Transform your athletic performance with elite speed & strength
              coaching.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" }
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200 hover:border-blue-500/50"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 gradient-text">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Transformation Program", href: "#online-program" },
                { label: "About", href: "#about" },
                { label: "Training Programs", href: "#training" },
                { label: "Assessment", href: "#assessment" }
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-gradient-to-r from-[#1E0B4C] via-[#4B9EFF] to-[#0B4FFF] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 gradient-text">
              Programs
            </h3>
            <ul className="space-y-4">
              {[
                { label: "1:1 Coaching", href: "#" },
                { label: "Group Training", href: "#" },
                { label: "Two-a-Day Intensives", href: "#" },
                { label: "Online Training", href: "#" }
              ].map((program, i) => (
                <li key={i}>
                  <Link
                    href={program.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-gradient-to-r from-[#1E0B4C] via-[#4B9EFF] to-[#0B4FFF] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 gradient-text">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@flightphase.com"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  contact@flightphase.com
                </a>
              </li>
              <li className="text-sm text-white/60">
                Available for U.S. and International clients
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center text-sm text-white/40">
            <p>
              &copy; {new Date().getFullYear()} FlightPhase. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
