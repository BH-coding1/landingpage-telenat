"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const navLinks = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Services", href: "#services" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 h-14 bg-white/95 backdrop-blur-sm border-b border-primary/10",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#1a5d3a] rounded" />
            <span className="text-xl font-semibold text-[#1a5d3a] tracking-tight">
              Telenat
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#1a5d3a] transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </div>

          <Button className="bg-[#1a5d3a] text-white hover:bg-[#14452d] px-5 py-2 text-sm font-medium rounded-md transition-colors">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}
