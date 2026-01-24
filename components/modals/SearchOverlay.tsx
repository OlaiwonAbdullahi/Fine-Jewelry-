"use client";

import { useState } from "react";
import { Search, X, TrendingUp } from "lucide-react";
import { useUIStore } from "@/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const trendingSearches = [
  "Diamond Rings",
  "Gold Necklaces",
  "Wedding Bands",
  "Pearl Earrings",
  "Tennis Bracelets",
];

export default function SearchOverlay() {
  const { activeModal, closeModal } = useUIStore();
  const [searchQuery, setSearchQuery] = useState("");
  const isOpen = activeModal === "search";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-emerald-dark/90 backdrop-blur-md",
        "animate-in fade-in duration-200",
      )}
    >
      <div className="container mx-auto px-4 py-8 h-full flex flex-col">
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={closeModal}
            className="text-cream-primary hover:text-gold-primary"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full">
          <form onSubmit={handleSearch} className="w-full">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gold-primary" />
              <Input
                type="text"
                placeholder="Search for jewelry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-16 pl-14 pr-4 text-lg bg-cream-white border-2 border-gold-primary focus-visible:ring-gold-primary/50"
                autoFocus
              />
            </div>
          </form>

          <div className="mt-12 w-full">
            <div className="flex items-center gap-2 mb-4 text-cream-primary/80">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">Trending Searches</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => {
                    setSearchQuery(search);
                    window.location.href = `/search?q=${encodeURIComponent(search)}`;
                    closeModal();
                  }}
                  className="px-4 py-2 bg-cream-white/10 hover:bg-gold-primary/20 text-cream-primary rounded-full text-sm transition-colors border border-cream-white/20"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
