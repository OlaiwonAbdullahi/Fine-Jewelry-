"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
import Image from "next/image";

const NAV_LINKS = [
  { name: "HIGH JEWELRY", href: "/high-jewelry" },
  { name: "COLLECTIONS", href: "/collections" },
  { name: "WATCHES", href: "/watches" },
  { name: "ENGAGEMENT", href: "/engagement" },
  { name: "ART OF LIVING", href: "/art-of-living" },
  { name: "GIFTS", href: "/gifts" },
  { name: "SERVICES", href: "/services" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
              onClick={() => setIsSearchOpen(true)}
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
              <Link
                href="/account"
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
              </Link>
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
              <Link
                href="/cart"
                className="flex flex-col items-center group p-1"
              >
                <div className="relative">
                  <IconShoppingBag
                    size={19}
                    strokeWidth={1}
                    className="text-foreground/70 group-hover:text-foreground transition-all duration-300"
                  />
                  <span className="absolute -top-1 -right-1 bg-[#1a3d32] text-white text-[7px] w-3.5 h-3.5 flex items-center justify-center rounded-full">
                    0
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-all duration-300 uppercase mt-1">
                  Bag
                </span>
              </Link>
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
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-[10px] tracking-[0.25em] font-light text-foreground/70 hover:text-foreground transition-all duration-500 py-1 inline-flex items-center gap-1 uppercase"
                >
                  {link.name}
                </Link>
                <motion.div
                  initial={false}
                  className="absolute -bottom-px left-0 right-0 h-px bg-foreground/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 bg-white border-b border-border/20 z-60 overflow-hidden shadow-2xl"
          >
            <div className="max-w-4xl mx-auto px-6 py-12">
              <div className="flex items-center gap-6 border-b border-foreground/10 pb-4">
                <IconSearch
                  size={28}
                  strokeWidth={1}
                  className="text-foreground/40"
                />
                <input
                  autoFocus
                  type="text"
                  placeholder="WHAT ARE YOU LOOKING FOR?"
                  className="bg-transparent border-none outline-none text-xl sm:text-2xl tracking-widest w-full placeholder:text-foreground/20 font-light"
                  onKeyDown={(e) =>
                    e.key === "Escape" && setIsSearchOpen(false)
                  }
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:rotate-90 transition-transform duration-300"
                >
                  <IconX
                    size={28}
                    strokeWidth={1}
                    className="text-foreground/60"
                  />
                </button>
              </div>
              <div className="mt-10">
                <h3 className="text-[10px] tracking-[0.3em] text-foreground/40 font-bold mb-6 uppercase">
                  Suggestion Collections
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    "Love Collections",
                    "Trinity Bands",
                    "Panthère de Cartier",
                    "Santos de Cartier",
                  ].map((item) => (
                    <div key={item} className="group cursor-pointer">
                      <div className="aspect-4/3 bg-neutral-100 mb-3 overflow-hidden">
                        <div className="w-full h-full group-hover:scale-105 transition-transform duration-700 bg-neutral-200" />
                      </div>
                      <span className="text-[10px] tracking-widest text-foreground/70 group-hover:text-foreground uppercase">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                  {NAV_LINKS.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between group"
                      >
                        <span className="text-sm tracking-[0.3em] font-light text-foreground/90 group-hover:pl-2 transition-all duration-300 uppercase">
                          {link.name}
                        </span>
                        <IconChevronDown
                          size={14}
                          strokeWidth={1}
                          className="-rotate-90 text-foreground/30 group-hover:text-foreground transition-colors"
                        />
                      </Link>
                    </li>
                  ))}
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
                <div className="flex gap-4 items-center">
                  <IconSearch
                    size={18}
                    strokeWidth={1}
                    className="text-foreground/30"
                  />
                  <input
                    type="text"
                    placeholder="SEARCH"
                    className="bg-transparent border-none outline-none text-[11px] tracking-[0.3em] w-full placeholder:text-foreground/20 font-medium"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
