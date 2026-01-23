import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedMaterials: string[];
  setSelectedMaterials: (materials: string[]) => void;
  priceRange: string[];
  setPriceRange: (range: string[]) => void;
}

const FilterSection = ({
  title,
  items,
  current,
  setter,
  toggleFilter,
}: {
  title: string;
  items: string[];
  current: string[];
  setter: (val: string[]) => void;
  toggleFilter: (
    item: string,
    current: string[],
    setter: (val: string[]) => void,
  ) => void;
}) => (
  <div className="border-b border-border/10 pb-8 mb-8">
    <h3 className="text-[11px] tracking-[0.3em] font-bold uppercase mb-6 flex justify-between items-center group cursor-pointer">
      {title}
      <span className="text-[9px] text-foreground/30 font-normal">
        {current.length > 0 ? `(${current.length})` : ""}
      </span>
    </h3>
    <div className="space-y-4">
      {items.map((item) => (
        <label
          key={item}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              checked={current.includes(item)}
              onChange={() => toggleFilter(item, current, setter)}
              className="peer appearance-none w-[14px] h-[14px] border border-border/30 rounded-none checked:bg-black checked:border-black transition-all duration-300"
            />
            <Check className="absolute w-2 h-2 text-white scale-0 peer-checked:scale-100 transition-transform duration-300 pointer-events-none" />
          </div>
          <span
            className={cn(
              "text-[10px] tracking-widest transition-all duration-300",
              current.includes(item)
                ? "text-foreground font-medium"
                : "text-foreground/50 group-hover:text-foreground",
            )}
          >
            {item}
          </span>
        </label>
      ))}
    </div>
  </div>
);

export const Filter = ({
  selectedCategories,
  setSelectedCategories,
  selectedMaterials,
  setSelectedMaterials,
  priceRange,
  setPriceRange,
}: FilterProps) => {
  const toggleFilter = (
    item: string,
    current: string[],
    setter: (val: string[]) => void,
  ) => {
    if (current.includes(item)) {
      setter(current.filter((i) => i !== item));
    } else {
      setter([...current, item]);
    }
  };

  const categories = ["Rings", "Earrings", "Necklaces", "Bracelets", "Watches"];
  const materials = ["Gold", "Platinum", "Diamond", "Silver"];
  const prices = [
    "< $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
  ];

  return (
    <div className="animate-in fade-in slide-in-from-left-4 duration-700">
      <FilterSection
        title="Category"
        items={categories}
        current={selectedCategories}
        setter={setSelectedCategories}
        toggleFilter={toggleFilter}
      />

      <FilterSection
        title="Price"
        items={prices}
        current={priceRange}
        setter={setPriceRange}
        toggleFilter={toggleFilter}
      />

      <FilterSection
        title="Material"
        items={materials}
        current={selectedMaterials}
        setter={setSelectedMaterials}
        toggleFilter={toggleFilter}
      />

      {(selectedCategories.length > 0 ||
        selectedMaterials.length > 0 ||
        priceRange.length > 0) && (
        <button
          onClick={() => {
            setSelectedCategories([]);
            setSelectedMaterials([]);
            setPriceRange([]);
          }}
          className="w-full py-4 text-[10px] tracking-[0.3em] font-bold uppercase border border-black/10 hover:bg-black hover:text-white transition-all duration-500"
        >
          Reset Filters
        </button>
      )}
    </div>
  );
};
