"use client";

import Link from "next/link";
import { Home, Search, Heart, ShoppingBag, User } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  useCartStore,
  selectCartCount,
  useWishlistStore,
  selectWishlistCount,
  useUIStore,
} from "@/store";
import { cn } from "@/lib/utils";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const cartCount = useCartStore(selectCartCount);
  const wishlistCount = useWishlistStore(selectWishlistCount);
  const { openModal } = useUIStore();

  const navItems = [
    { icon: Home, label: "Home", href: "/", action: null },
    {
      icon: Search,
      label: "Search",
      href: null,
      action: () => openModal("search"),
    },
    {
      icon: Heart,
      label: "Wishlist",
      href: "/wishlist",
      action: null,
      badge: wishlistCount,
    },
    {
      icon: ShoppingBag,
      label: "Cart",
      href: null,
      action: () => openModal("miniCart"),
      badge: cartCount,
    },
    // { icon: User, label: "Account", href: "/account", action: null },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream-white border-t border-beige-warm shadow-lg">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          const content = (
            <>
              <div className="relative">
                <Icon
                  className={cn(
                    "h-6 w-6 transition-colors",
                    isActive ? "text-gold-primary" : "text-charcoal-dark",
                  )}
                />
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-gold-primary text-emerald-dark text-[10px] font-bold flex items-center justify-center">
                    {item.badge > 9 ? "9+" : item.badge}
                  </span>
                )}
              </div>
              <span
                className={cn(
                  "text-xs mt-1 transition-colors",
                  isActive
                    ? "text-gold-primary font-medium"
                    : "text-charcoal-dark",
                )}
              >
                {item.label}
              </span>
            </>
          );

          if (item.href) {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col items-center justify-center min-w-[60px] py-1"
              >
                {content}
              </Link>
            );
          }

          return (
            <button
              key={item.label}
              onClick={item.action || undefined}
              className="flex flex-col items-center justify-center min-w-[60px] py-1"
            >
              {content}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
