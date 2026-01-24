"use client";

import { useState, useEffect } from "react";
import { IconSearch, IconX, IconArrowRight } from "@tabler/icons-react";
import { useUIStore } from "@/store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SUGGESTED_COLLECTIONS = [
  { name: "Love Collection", href: "/collections/love" },
  { name: "Trinity Series", href: "/collections/trinity" },
  { name: "Panthère de Cartier", href: "/collections/panthere" },
  { name: "High Jewelry Art", href: "/collections/high-jewelry" },
];

const QUICK_LINKS = [
  "Diamond Rings",
  "Engagement Bands",
  "Luxury Watches",
  "Pearl Necklaces",
  "Gift Guide",
];

export default function SearchOverlay() {
  const { activeModal, closeModal } = useUIStore();
  const [searchQuery, setSearchQuery] = useState("");
  const isOpen = activeModal === "search";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex flex-col"
      >
        {/* Close Button */}
        <div className="absolute top-10 right-10">
          <button
            onClick={closeModal}
            className="p-4 hover:rotate-90 transition-transform duration-500 text-foreground/40 hover:text-foreground"
          >
            <IconX size={32} strokeWidth={1} />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto w-full px-8">
          <div className="w-full space-y-24">
            {/* Search Input Section */}
            <div className="w-full">
              <form onSubmit={handleSearch} className="relative group">
                <div className="flex items-center gap-8 border-b border-black/10 pb-6 transition-all duration-500 group-focus-within:border-black">
                  <IconSearch
                    size={32}
                    strokeWidth={1}
                    className="text-foreground/30 group-focus-within:text-foreground transition-colors"
                  />
                  <input
                    autoFocus
                    type="text"
                    placeholder="WHAT ARE YOU LOOKING FOR?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-2xl md:text-4xl tracking-[0.1em] w-full placeholder:text-foreground/10 font-light uppercase"
                  />
                  {searchQuery && (
                    <button
                      type="submit"
                      className="text-[10px] tracking-[0.4em] font-bold uppercase hover:translate-x-2 transition-transform duration-500"
                    >
                      Search
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Suggestions & Quick Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Featured Collections */}
              <div className="space-y-10">
                <h3 className="text-[10px] tracking-[0.4em] font-bold text-foreground/30 uppercase">
                  Suggested Collections
                </h3>
                <div className="grid gap-6">
                  {SUGGESTED_COLLECTIONS.map((collection) => (
                    <button
                      key={collection.name}
                      onClick={() => {
                        window.location.href = collection.href;
                        closeModal();
                      }}
                      className="group flex items-center justify-between py-2 border-b border-black/5 hover:border-black/20 transition-all text-left"
                    >
                      <span className="text-[14px] tracking-[0.2em] font-light text-foreground/60 group-hover:text-foreground group-hover:pl-2 transition-all duration-500 uppercase">
                        {collection.name}
                      </span>
                      <IconArrowRight
                        size={16}
                        strokeWidth={1}
                        className="text-foreground/20 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Links / Trending */}
              <div className="space-y-10">
                <h3 className="text-[10px] tracking-[0.4em] font-bold text-foreground/30 uppercase">
                  Quick Links
                </h3>
                <div className="flex flex-wrap gap-x-12 gap-y-6">
                  {QUICK_LINKS.map((link) => (
                    <button
                      key={link}
                      onClick={() => {
                        setSearchQuery(link);
                        window.location.href = `/search?q=${encodeURIComponent(link)}`;
                        closeModal();
                      }}
                      className="text-[11px] tracking-[0.3em] font-light text-foreground/50 hover:text-foreground transition-all uppercase"
                    >
                      {link}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Branding */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <Image src="/logo.png" alt="Logo" width={200} height={200} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
