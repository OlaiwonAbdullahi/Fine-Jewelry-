"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useUIStore } from "@/store";
import { cn } from "@/lib/utils";

const navigationLinks = [
  { label: "Collections", href: "/collections" },
  { label: "Rings", href: "/rings" },
  { label: "Necklaces", href: "/necklaces" },
  { label: "Earrings", href: "/earrings" },
  { label: "Bracelets", href: "/bracelets" },
  { label: "Our Story", href: "/our-story" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function MobileNav() {
  const { isMobileMenuOpen, closeMobileMenu } = useUIStore();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-emerald-dark/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={closeMobileMenu}
      />

      <div
        className={cn(
          "fixed top-0 left-0 h-full w-[280px] bg-cream-white z-50 transition-transform duration-300 ease-in-out lg:hidden shadow-2xl",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-beige-warm">
          <span className="brillant text-xl text-emerald-primary">Menu</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="p-4">
          <ul className="space-y-1">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between px-4 py-3 rounded-lg text-charcoal-dark hover:bg-gold-champagne hover:text-gold-primary transition-colors group"
                >
                  <span className="font-medium">{link.label}</span>
                  <ChevronRight className="h-4 w-4 text-gray-soft group-hover:text-gold-primary transition-colors" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-beige-warm bg-cream-primary">
          <Button variant="default" className="w-full bg-gold-primary" asChild>
            <Link href="/collections">Shop Now</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
