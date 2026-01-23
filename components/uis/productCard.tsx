"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconHeart } from "@tabler/icons-react";
import { toast } from "sonner";

export interface Product {
  id: number | string;
  name: string;
  price: string;
  image: string;
  images?: string[];
  category: string;
  description?: string;
  story?: string;
  details?: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleAddToBag = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${product.name} added to bag`, {
      description: "You can view your shopping bag to checkout.",
      action: {
        label: "View Bag",
        onClick: () => console.log("View bag clicked"),
      },
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast("Added to Wishlist", {
      description: `${product.name} has been added to your favorites.`,
    });
  };

  return (
    <div className="group flex flex-col items-center text-center">
      <div className="relative aspect-4/5 w-full bg-[#f6f6f6] mb-8 overflow-hidden cursor-pointer">
        <Link href={`/products/${product.id}`} className="block w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </Link>
        <button
          onClick={handleToggleWishlist}
          className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white text-foreground/70 hover:text-red-500 z-10"
        >
          <IconHeart size={18} strokeWidth={1.5} />
        </button>
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
          <button
            onClick={handleAddToBag}
            className="block w-full py-3 bg-black text-white text-[10px] tracking-[0.2em] font-bold uppercase transition-colors hover:bg-neutral-800"
          >
            Add to Bag
          </button>
        </div>
      </div>

      <Link
        href={`/products/${product.id}`}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.3em] font-medium text-foreground/40 uppercase">
          {product.category}
        </span>
        <h3 className="text-xs tracking-widest font-medium text-foreground uppercase group-hover:text-foreground/70 transition-colors">
          {product.name}
        </h3>
        <span className="text-[11px] tracking-widest text-[#1a3d32] font-semibold mt-1">
          {product.price}
        </span>
      </Link>

      <div className="mt-4 h-px w-0 bg-black/10 transition-all duration-700 group-hover:w-16" />
    </div>
  );
};

export default ProductCard;
