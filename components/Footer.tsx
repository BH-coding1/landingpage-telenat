import Link from "next/link";
import { cn } from "@/lib/utils";
import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  const footerLinks = [
    { text: "About", href: "#about" },
    { text: "Services", href: "#services" },
    { text: "Contact", href: "#contact" },
    { text: "Privacy", href: "#privacy" },
    { text: "Terms", href: "#terms" },
  ];

  return (
    <footer className={cn("bg-[#1a5d3a] text-white", className)}>
      <div className="max-w-7xl mx-auto px-6 pb-12 pt-8">
        <div className="flex md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2.5"></div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Telenat. All rights reserved.
          </p>
          <div className="hidden md:flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              );
            })}
          </div>

          <div className="flex md:hidden items-center gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/60 hover:text-white transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
