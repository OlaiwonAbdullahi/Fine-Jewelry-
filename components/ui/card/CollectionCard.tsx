"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface Collection {
  id: number | string;
  name: string;
  description: string;
  image: string;
  itemCount?: number;
  slug: string;
}

interface CollectionCardProps {
  collection: Collection;
}

const CollectionCard = ({ collection }: CollectionCardProps) => {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[3/4] w-full bg-beige-pearl overflow-hidden mb-6">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-emerald-dark/0 group-hover:bg-emerald-dark/30 transition-colors duration-500" />

        {collection.itemCount && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-cream-white/90 backdrop-blur-sm rounded-full">
            <span className="text-[10px] tracking-[0.2em] font-medium text-charcoal-dark uppercase">
              {collection.itemCount} Pieces
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center text-center px-4">
        <h3 className="brillant text-2xl md:text-3xl text-emerald-primary mb-3 group-hover:text-gold-primary transition-colors duration-300">
          {collection.name}
        </h3>

        <p className="text-sm text-gray-soft leading-relaxed mb-4 max-w-md">
          {collection.description}
        </p>

        <div className="flex items-center gap-2 text-gold-primary group-hover:gap-3 transition-all duration-300">
          <span className="text-xs tracking-[0.2em] uppercase font-medium">
            Explore Collection
          </span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>

        <div className="mt-6 h-px w-0 bg-gold-primary/30 transition-all duration-700 group-hover:w-24" />
      </div>
    </Link>
  );
};

export default CollectionCard;
