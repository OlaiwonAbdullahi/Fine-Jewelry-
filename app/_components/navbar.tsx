"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconSearch,
  IconUser,
  IconHeart,
  IconShoppingBag,
  IconMenu2,
  IconX,
  IconChevronDown,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useUIStore, useCartStore, selectCartCount } from "@/store";
import SearchOverlay from "@/components/modals/SearchOverlay";
import MiniCartSlideIn from "@/components/modals/MiniCartSlideIn";
import LoginRegisterModal from "@/components/modals/LoginRegisterModal";
import Image from "next/image";

const NAV_LINKS = [
  { name: "HIGH JEWELRY", href: "/high-jewelry" },
  { name: "COLLECTIONS", href: "/collections" },
  { name: "WATCHES", href: "/watches" },
  { name: "SHOP", href: "/shop" },
  { name: "OUR TEAM", href: "/our-team" },
  { name: "OUR STORY", href: "/our-story" },
  { name: "CONTACT US", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { openModal } = useUIStore();
  const cartCount = useCartStore(selectCartCount);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle blur effect when navigation hits the top (scrolled past ~130px)
      setIsScrolled(window.scrollY > 130);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative z-50 bg-white">
        {/* Top Announcement Bar */}
        <div className="bg-[#1a1a1a] py-2 px-4 text-center">
          <p className="text-[9px] sm:text-[10px] tracking-[0.3em] font-medium text-white/90 uppercase">
            Complimentary delivery and returns on all orders
          </p>
        </div>

        {/* Logo & Icons Row */}
        <div className="max-w-[1800px] mx-auto border-b border-border/50">
          <div className="flex items-center justify-between px-6 lg:px-12 py-3 lg:py-5">
            <div
              className="flex-1 hidden lg:flex items-center gap-3 group cursor-pointer"
              onClick={() => openModal("search")}
            >
              <IconSearch
                size={19}
                strokeWidth={1}
                className="text-foreground/70 group-hover:text-foreground transition-all duration-300 group-hover:scale-110"
              />
              <span className="text-[10px] tracking-[0.2em] font-light text-foreground/60 group-hover:text-foreground transition-colors uppercase">
                Search
              </span>
            </div>

            <button
              className="lg:hidden p-2 -ml-2 text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <IconMenu2 size={24} strokeWidth={1.2} />
            </button>

            <Link href="/" className="flex flex-col items-center group">
              <Image src={"/logo.png"} alt="logo" width={200} height={200} />
            </Link>

            <div className="flex-1 flex items-center justify-end">
              <button
                onClick={() => openModal("login")}
                className="hidden sm:flex flex-col items-center group p-1"
              >
                <IconUser
                  size={19}
                  strokeWidth={1}
                  className="text-foreground/70 group-hover:text-foreground transition-all duration-300"
                />
                <span className="text-[10px] tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-all duration-300 uppercase mt-1">
                  Account
                </span>
              </button>
              <Link
                href="/wishlist"
                className="flex flex-col items-center group p-1"
              >
                <IconHeart
                  size={19}
                  strokeWidth={1}
                  className="text-foreground/70 group-hover:text-foreground transition-all duration-300"
                />
                <span className="text-[10px] tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-all duration-300 uppercase mt-1">
                  Wishlist
                </span>
              </Link>
              <button
                onClick={() => openModal("miniCart")}
                className="flex flex-col items-center group p-1"
              >
                <div className="relative">
                  <IconShoppingBag
                    size={19}
                    strokeWidth={1}
                    className="text-foreground/70 group-hover:text-foreground transition-all duration-300"
                  />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#1a3d32] text-white text-[7px] w-3.5 h-3.5 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="text-[10px] tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-all duration-300 uppercase mt-1">
                  Bag
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Fixed/Sticky segment moved out of the header wrapper */}
      <nav
        className={cn(
          "hidden lg:block sticky top-0 z-50 transition-all duration-500 border-b border-border/10 w-full",
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white",
        )}
      >
        <div className="max-w-[1800px] mx-auto">
          <ul className="flex items-center justify-center gap-10 xl:gap-14 py-5 font-normal">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-[10px] tracking-[0.25em] font-light transition-all duration-500 py-1 inline-flex items-center gap-1 uppercase",
                      isActive
                        ? "text-foreground font-medium"
                        : "text-foreground/70 hover:text-foreground",
                    )}
                  >
                    {link.name}
                  </Link>
                  <motion.div
                    initial={false}
                    className={cn(
                      "absolute -bottom-px left-0 right-0 h-px bg-foreground/80 transition-transform duration-700 ease-in-out origin-left",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Modals */}
      <SearchOverlay />
      <MiniCartSlideIn />
      <LoginRegisterModal />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-110 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[90%] max-w-[400px] bg-white z-120 lg:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-border/10">
                <span className="fancy text-xl tracking-[0.2em]">MENU</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-foreground/60 hover:text-foreground hover:rotate-90 transition-all duration-300"
                >
                  <IconX size={24} strokeWidth={1} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8">
                <ul className="space-y-7">
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center justify-between group"
                        >
                          <span
                            className={cn(
                              "text-sm tracking-[0.3em] font-light group-hover:pl-2 transition-all duration-300 uppercase",
                              isActive
                                ? "text-foreground font-medium pl-2"
                                : "text-foreground/90",
                            )}
                          >
                            {link.name}
                          </span>
                          <IconChevronDown
                            size={14}
                            strokeWidth={1}
                            className={cn(
                              "-rotate-90 transition-colors",
                              isActive
                                ? "text-foreground"
                                : "text-foreground/30 group-hover:text-foreground",
                            )}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-16 pt-12 border-t border-border/10 space-y-6">
                  <Link
                    href="/find-boutique"
                    className="flex items-center gap-4 group"
                  >
                    <span className="text-[10px] tracking-[0.2em] font-medium text-foreground/50 group-hover:text-foreground transition-colors uppercase">
                      Find a Boutique
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center gap-4 group"
                  >
                    <span className="text-[10px] tracking-[0.2em] font-medium text-foreground/50 group-hover:text-foreground transition-colors uppercase">
                      Contact Us
                    </span>
                  </Link>
                  <Link
                    href="/services"
                    className="flex items-center gap-4 group"
                  >
                    <span className="text-[10px] tracking-[0.2em] font-medium text-foreground/50 group-hover:text-foreground transition-colors uppercase">
                      Our Services
                    </span>
                  </Link>
                </div>
              </div>

              <div className="p-8 bg-neutral-50 mt-auto">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openModal("search");
                  }}
                  className="flex gap-4 items-center w-full group"
                >
                  <IconSearch
                    size={18}
                    strokeWidth={1}
                    className="text-foreground/30 group-hover:text-foreground transition-colors"
                  />
                  <span className="text-[11px] tracking-[0.3em] text-foreground/40 group-hover:text-foreground font-medium transition-colors uppercase">
                    Search
                  </span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
