"use client";

import { useState, useMemo } from "react";
import { Filter } from "./_components/filter";
import { ALL_PRODUCTS } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/uis/productCard";

const Page = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Newest");

  const filteredProducts = useMemo(() => {
    const result = ALL_PRODUCTS.filter((product) => {
      // Category filter
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(product.category)
      ) {
        // Handle "Rings" vs "Engagement Rings"
        const isRing =
          selectedCategories.includes("Rings") &&
          product.category.toLowerCase().includes("ring");
        if (!isRing) return false;
      }

      // Material filter
      if (selectedMaterials.length > 0) {
        const hasMaterial =
          product.details?.some((detail) =>
            selectedMaterials.some((mat) =>
              detail.toLowerCase().includes(mat.toLowerCase()),
            ),
          ) ?? false;

        if (!hasMaterial) return false;
      }

      // Price filter
      if (priceRange.length > 0) {
        const priceNum = parseInt(product.price.replace(/[$,]/g, ""));
        const matchesPrice = priceRange.some((range) => {
          if (range === "< $1,000") return priceNum < 1000;
          if (range === "$1,000 - $5,000")
            return priceNum >= 1000 && priceNum <= 5000;
          if (range === "$5,000 - $10,000")
            return priceNum >= 5000 && priceNum <= 10000;
          if (range === "$10,000+") return priceNum > 10000;
          return false;
        });
        if (!matchesPrice) return false;
      }

      return true;
    });

    // Sorting
    if (sortBy === "Price: Low to High") {
      result.sort(
        (a, b) =>
          parseInt(a.price.replace(/[$,]/g, "")) -
          parseInt(b.price.replace(/[$,]/g, "")),
      );
    } else if (sortBy === "Price: High to Low") {
      result.sort(
        (a, b) =>
          parseInt(b.price.replace(/[$,]/g, "")) -
          parseInt(a.price.replace(/[$,]/g, "")),
      );
    } else {
      // Default: Newest (highest ID first)
      result.sort((a, b) => Number(b.id) - Number(a.id));
    }

    return result;
  }, [selectedCategories, selectedMaterials, priceRange, sortBy]);

  return (
    <div className="min-h-screen pt-40 pb-20 px-6 max-w-[1400px] mx-auto">
      <div className="flex flex-row gap-12">
        {/* Sidebar */}
        <div className="w-64 shrink-0">
          <div className="sticky top-40">
            <h2 className="text-[14px] tracking-[0.4em] font-bold uppercase mb-8">
              Explore Collections
            </h2>
            <Filter
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedMaterials={selectedMaterials}
              setSelectedMaterials={setSelectedMaterials}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-end mb-8 border-b border-border/10 pb-4">
            <p className="text-[10px] tracking-widest text-foreground/40 uppercase">
              Showing {filteredProducts.length} Results
            </p>
            <div className="flex gap-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-[10px] tracking-widest uppercase outline-none cursor-pointer"
              >
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="h-[40vh] flex flex-col items-center justify-center text-center">
              <p className="text-[12px] tracking-[0.2em] text-foreground/40 uppercase mb-4">
                No products found matching your criteria
              </p>
              <button
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedMaterials([]);
                  setPriceRange([]);
                }}
                className="text-[10px] tracking-widest uppercase border-b border-foreground pb-1"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
