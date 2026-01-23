"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  IconHeart,
  IconShoppingBag,
  IconChevronRight,
  IconTruck,
  IconClock,
  IconPackage,
} from "@tabler/icons-react";
import ProductCard from "@/components/uis/productCard";
import { ALL_PRODUCTS } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product =
    ALL_PRODUCTS.find((p) => p.id.toString() === id) || ALL_PRODUCTS[0];

  // Simulated related products
  const relatedProducts = ALL_PRODUCTS.filter(
    (p) => p.id.toString() !== id,
  ).slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <nav className="px-6 lg:px-12 py-6 border-b border-border/10">
        <div className="max-w-[1800px] mx-auto flex items-center gap-2 text-[10px] tracking-widest text-foreground/40 uppercase font-medium">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <IconChevronRight size={12} strokeWidth={1} />
          <Link
            href="/shop"
            className="hover:text-foreground transition-colors"
          >
            Products
          </Link>
          <IconChevronRight size={12} strokeWidth={1} />
          <span className="text-foreground/80">{product.name}</span>
        </div>
      </nav>

      <main className="max-w-[1800px] mx-auto px-6 lg:px-12 py-12 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 xl:gap-32 items-start">
          {/* Image Gallery */}
          <section className="space-y-8">
            <div className="relative aspect-4/5 w-full bg-[#f6f6f6] overflow-hidden group">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                priority
              />
            </div>
            {/* Carousel for multiple views */}
            <div className="pt-10 hidden">
              {product.images && product.images.length > 0 && (
                <Carousel className="w-full max-w-lg mx-auto  ">
                  <CarouselContent className="-ml-4">
                    {product.images.map((img, i) => (
                      <CarouselItem
                        key={i}
                        className="pl-4 basis-1/3 w-[200px]"
                      >
                        <div className="aspect-square bg-[#f6f6f6] relative cursor-pointer border border-transparent hover:border-black/10 transition-colors">
                          <Image
                            src={img}
                            alt={`${product.name} view ${i + 1}`}
                            fill
                            className="object-cover p-2"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              )}
            </div>
          </section>

          {/* Product Info */}
          <section className="flex flex-col">
            <div className="mb-10 pb-10 border-b border-border/10">
              <span className="text-[11px] tracking-[0.4em] font-medium text-foreground/40 uppercase mb-4 block">
                {product.category}
              </span>
              <h1 className="brillant text-4xl lg:text-5xl text-foreground mb-6 leading-tight uppercase font-medium">
                {product.name}
              </h1>
              <p className="text-xl lg:text-2xl tracking-widest text-[#1a3d32] font-semibold mb-8">
                {product.price}
              </p>
              <p className="text-sm leading-relaxed text-foreground/60 font-light tracking-wide max-w-md uppercase">
                {product.description ||
                  "A masterpiece of grace and light, this creation embodies the essence of timeless sophistication. Hand-finished by our master artisans."}
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-6 mb-12">
              <div className="flex flex-row gap-4">
                <button className="flex-1 py-4 bg-black text-white text-[11px] tracking-[0.3em] font-bold uppercase transition-all duration-500 hover:bg-neutral-800 flex items-center justify-center gap-3">
                  <IconShoppingBag size={18} strokeWidth={1} />
                  Add to Shopping Bag
                </button>
                <button className="py-4 px-8 border border-black/10 hover:border-black transition-all duration-500 flex items-center justify-center group">
                  <IconHeart
                    size={20}
                    strokeWidth={1}
                    className="text-foreground transition-all duration-300 group-hover:scale-110"
                  />
                </button>
              </div>
              <p className="text-[10px] text-center text-foreground/40 tracking-widest uppercase italic">
                Complimentary shipping on all orders
              </p>
            </div>

            {/* Product Specifications */}
            {product.details && product.details.length > 0 && (
              <div className="mb-12">
                <h3 className="text-[11px] tracking-[0.3em] font-bold uppercase mb-4">
                  Product Details
                </h3>
                <ul className="grid grid-cols-2 gap-y-3 gap-x-8">
                  {product.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-[10px] tracking-widest text-foreground/50 uppercase flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-black/10 rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Features/Details */}
            <div className="space-y-8 border-t border-border/10 pt-10">
              {[
                {
                  icon: <IconTruck size={20} strokeWidth={1} />,
                  title: "Delivery & Returns",
                  desc: "Complimentary express delivery and 30-day returns.",
                },
                {
                  icon: <IconClock size={20} strokeWidth={1} />,
                  title: "Collect in Boutique",
                  desc: "Available to collect in our Manhattan boutique within 2 hours.",
                },
                {
                  icon: <IconPackage size={20} strokeWidth={1} />,
                  title: "Art of Gifting",
                  desc: "All creations arrive in our signature gift box.",
                },
              ].map((feature, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="text-foreground/60">{feature.icon}</div>
                  <div>
                    <h4 className="text-[11px] tracking-[0.2em] font-bold uppercase mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-[10px] tracking-widest text-foreground/50 uppercase leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Story */}
            <div className="mt-16 pt-16 border-t border-border/10">
              <h3 className="text-[12px] tracking-[0.3em] font-bold uppercase mb-8">
                The Story
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-foreground/70 font-light tracking-[0.05em] uppercase">
                {product.story ||
                  "Inspired by the pure geometry of light, this creation is part of a century-old lineage of excellence. Each gem is meticulously selected for its brilliance and fire, set in high-grade platinum to ensure a lifetime of radiance."}
              </p>
            </div>

            {/* Expert Service */}
            <div className="mt-16 p-10 bg-[#f9f9f9] border border-black/5 flex flex-col items-center text-center">
              <span className="text-[10px] tracking-[0.5em] font-medium text-foreground/30 uppercase mb-4">
                Personalized
              </span>
              <h4 className="text-2xl font-medium mb-4">Contact an Expert</h4>
              <p className="text-[10px] tracking-widest text-foreground/50 uppercase mb-8 max-w-xs leading-relaxed">
                Our advisors are available to assist you with your selection or
                book an appointment in boutique.
              </p>
              <button className="text-[11px] tracking-[0.3em] font-bold uppercase border-b border-black pb-1 hover:text-foreground/50 transition-colors">
                Book a consultation
              </button>
            </div>
          </section>
        </div>

        {/* Related Products */}
        <section className="mt-32 pt-24 border-t border-border/10">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] font-medium text-foreground/40 uppercase mb-4 block">
              You May Also Like
            </span>
            <h2 className="brillant text-4xl sm:text-5xl text-foreground mb-4">
              Related Creations
            </h2>
            <div className="h-px w-20 bg-black/10 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetailsPage;
