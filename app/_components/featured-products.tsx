import React from "react";
import Link from "next/link";
import ProductCard from "@/components/uis/productCard";
import { ALL_PRODUCTS } from "@/lib/data";

const FeaturedProducts = () => {
  const products = ALL_PRODUCTS;

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-350 mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.4em] font-medium text-foreground/40 uppercase mb-4 block">
            Selection
          </span>
          <h2 className="brillant text-4xl sm:text-5xl mb-4 text-foreground">
            Featured Products
          </h2>
          <div className="h-px w-20 bg-black/10 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/shop"
            className="inline-block text-[10px] tracking-[0.3em] font-bold uppercase border-b border-black pb-2 hover:opacity-50 transition-all"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
