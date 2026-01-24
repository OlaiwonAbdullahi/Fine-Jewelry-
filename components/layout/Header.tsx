"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  useCartStore,
  selectCartCount,
  useWishlistStore,
  selectWishlistCount,
  useUIStore,
  useAuthStore,
} from "@/store";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const cartCount = useCartStore(selectCartCount);
  const wishlistCount = useWishlistStore(selectWishlistCount);
  const { openModal, toggleMobileMenu } = useUIStore();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-cream-primary/95 backdrop-blur-md shadow-md border-b border-beige-warm"
          : "bg-cream-primary border-b border-beige-warm/50",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>

          <Link
            href="/"
            className="brillant text-xl md:text-2xl lg:text-3xl text-emerald-primary hover:text-emerald-secondary transition-colors"
          >
            A3 JEWELRY
          </Link>

          <div className="flex items-center gap-1 md:gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => openModal("search")}
              aria-label="Search"
              className="hidden sm:flex"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" asChild className="relative">
              <Link
                href="/wishlist"
                aria-label={`Wishlist (${wishlistCount} items)`}
              >
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold-primary text-emerald-dark text-[10px] font-bold flex items-center justify-center">
                    {wishlistCount > 9 ? "9+" : wishlistCount}
                  </span>
                )}
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => openModal("miniCart")}
              className="relative"
              aria-label={`Cart (${cartCount} items)`}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold-primary text-emerald-dark text-[10px] font-bold flex items-center justify-center">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </Button>

            {isAuthenticated ? (
              <Button variant="ghost" size="icon" asChild>
                <Link href="/account" aria-label="My account">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => openModal("login")}
                aria-label="Login"
              >
                <User className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>

        <div className="hidden lg:block border-t border-beige-warm/50">
          <nav className="flex items-center justify-center gap-8 py-4">
            <Link
              href="/collections"
              className="text-sm font-medium text-charcoal-dark hover:text-gold-primary transition-colors"
            >
              Collections
            </Link>
            <Link
              href="/rings"
              className="text-sm font-medium text-charcoal-dark hover:text-gold-primary transition-colors"
            >
              Rings
            </Link>
            <Link
              href="/necklaces"
              className="text-sm font-medium text-charcoal-dark hover:text-gold-primary transition-colors"
            >
              Necklaces
            </Link>
            <Link
              href="/earrings"
              className="text-sm font-medium text-charcoal-dark hover:text-gold-primary transition-colors"
            >
              Earrings
            </Link>
            <Link
              href="/bracelets"
              className="text-sm font-medium text-charcoal-dark hover:text-gold-primary transition-colors"
            >
              Bracelets
            </Link>
            <Link
              href="/our-story"
              className="text-sm font-medium text-charcoal-dark hover:text-gold-primary transition-colors"
            >
              Our Story
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
