"use client";

import { useState } from "react";
import Image from "next/image";
import { useUIStore, useCartStore, useWishlistStore } from "@/store";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Heart, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export default function QuickViewModal() {
  const { activeModal, closeModal, modalData, openModal } = useUIStore();
  const { addItem } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const isOpen = activeModal === "quickView";

  const [selectedSize, setSelectedSize] = useState("");

  if (!modalData || !isOpen) return null;

  const product = {
    id: modalData.productId || 1,
    name: modalData.productName || "Product Name",
    price: modalData.productPrice || 0,
    image: modalData.productImage || "",
    material: modalData.material || "18K Gold",
    description:
      modalData.description || "Beautiful handcrafted jewelry piece.",
  };

  const sizes = ["6", "7", "8", "9", "10"];
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }

    addItem({
      ...product,
      size: selectedSize,
    });

    toast.success("Added to cart!", {
      action: {
        label: "View Cart",
        onClick: () => {
          closeModal();
          openModal("miniCart");
        },
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-4xl p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Quick View: {product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-beige-pearl p-8 flex items-center justify-center">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-auto max-h-[500px] object-contain"
              />
            ) : (
              <div className="w-full aspect-square flex items-center justify-center text-gray-soft">
                No image available
              </div>
            )}
          </div>

          <div className="p-8 flex flex-col">
            <div className="flex-1">
              <h2 className="brillant text-3xl text-emerald-primary mb-2">
                {product.name}
              </h2>
              <p className="text-sm text-gray-soft mb-4">{product.material}</p>

              <p className="text-2xl font-semibold text-gold-primary mb-6">
                ${product.price.toFixed(2)}
              </p>

              <p className="text-sm text-charcoal-dark mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-6">
                <Label className="text-sm font-semibold text-charcoal-dark mb-2 block">
                  Select Size
                </Label>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg border-2 transition-all ${
                        selectedSize === size
                          ? "border-gold-primary bg-gold-champagne text-gold-primary"
                          : "border-beige-warm hover:border-gold-primary text-charcoal-dark"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                variant="gold"
                className="w-full"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>

              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    toggleWishlist(product);
                    toast(
                      inWishlist
                        ? "Removed from wishlist"
                        : "Added to wishlist",
                    );
                  }}
                >
                  <Heart
                    className={`mr-2 h-4 w-4 ${inWishlist ? "fill-current" : ""}`}
                  />
                  {inWishlist ? "Saved" : "Save"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    closeModal();
                    openModal("reservation", product);
                  }}
                >
                  Reserve in Store
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
