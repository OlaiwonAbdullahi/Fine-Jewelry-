"use client";

import Link from "next/link";
import Image from "next/image";
import {
  IconShoppingBag,
  IconMinus,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import {
  useUIStore,
  useCartStore,
  selectCartCount,
  selectCartSubtotal,
} from "@/store";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/Button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function MiniCartSlideIn() {
  const { activeModal, closeModal } = useUIStore();
  const { items, removeItem, updateQuantity } = useCartStore();
  const cartCount = useCartStore(selectCartCount);
  const subtotal = useCartStore(selectCartSubtotal);
  const isOpen = activeModal === "miniCart";

  return (
    <Sheet open={isOpen} onOpenChange={closeModal}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md flex flex-col p-0 bg-white border-l border-border/10 max-w-[600px]!"
      >
        <SheetHeader className="px-8 py-8 border-b border-border/10">
          <SheetTitle className="flex items-center justify-between text-foreground">
            <span className="text-[12px] tracking-[0.4em] font-light uppercase">
              Shopping Bag ({cartCount})
            </span>
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
            <IconShoppingBag
              size={48}
              strokeWidth={0.5}
              className="text-foreground/20 mb-6"
            />
            <h3 className="text-[11px] tracking-[0.3em] font-light text-foreground mb-3 uppercase">
              Your bag is empty
            </h3>
            <p className="text-[9px] tracking-[0.2em] text-foreground/40 mb-8 uppercase leading-relaxed">
              Discover our latest collections and find <br /> your next timeless
              piece.
            </p>
            <Button
              variant="default"
              onClick={closeModal}
              asChild
              className="rounded-none bg-foreground hover:bg-foreground/90 text-white px-10 text-[10px] tracking-[0.3em] uppercase transition-all duration-500"
            >
              <Link href="/shop">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1">
              <div className="divide-y divide-border/10">
                {items.map((item) => (
                  <div key={item.id} className="p-8 flex gap-6 group">
                    <div className="w-24 h-32 bg-neutral-50 flex-shrink-0 overflow-hidden relative">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] tracking-widest text-foreground/20 uppercase">
                          No Image
                        </div>
                      )}
                    </div>

                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="space-y-1">
                        <div className="flex justify-between items-start gap-4">
                          <h4 className="text-[10px] tracking-[0.25em] font-medium text-foreground uppercase leading-tight">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => {
                              removeItem(item.id);
                              toast.success("Removed from bag");
                            }}
                            className="text-foreground/30 hover:text-foreground transition-colors"
                          >
                            <IconX size={14} strokeWidth={1} />
                          </button>
                        </div>
                        {item.material && (
                          <p className="text-[8px] tracking-[0.2em] text-foreground/40 uppercase">
                            {item.material}
                          </p>
                        )}
                        {item.size && (
                          <p className="text-[8px] tracking-[0.2em] text-foreground/40 uppercase">
                            Size: {item.size}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-border/20">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                Math.max(1, item.quantity - 1),
                              )
                            }
                            className="p-1 px-2 hover:bg-neutral-50 transition-colors border-r border-border/10"
                          >
                            <IconMinus size={10} strokeWidth={1} />
                          </button>
                          <span className="text-[9px] tracking-widest px-4 font-medium min-w-[40px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 px-2 hover:bg-neutral-50 transition-colors border-l border-border/10"
                          >
                            <IconPlus size={10} strokeWidth={1} />
                          </button>
                        </div>
                        <span className="text-[10px] tracking-[0.2em] font-semibold text-foreground">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-8 border-t border-border/10 space-y-6 bg-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.3em] font-light text-foreground/50 uppercase">
                    Subtotal
                  </span>
                  <span className="text-[12px] tracking-[0.2em] font-semibold text-foreground">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <p className="text-[8px] tracking-[0.2em] text-foreground/40 uppercase leading-relaxed text-center italic">
                  Complimentary delivery and signature packaging included.
                </p>
              </div>

              <div className="grid gap-3 pt-2">
                <Button
                  variant="default"
                  asChild
                  className="w-full h-12 rounded-none bg-foreground hover:bg-foreground/90 text-white text-[10px] tracking-[0.3em] uppercase font-medium transition-all"
                >
                  <Link href="/checkout" onClick={closeModal}>
                    Proceed to Checkout
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12 rounded-none border-border/30 hover:bg-neutral-50 text-foreground text-[10px] tracking-[0.3em] uppercase font-medium transition-all"
                  asChild
                >
                  <Link href="/cart" onClick={closeModal}>
                    View Full Bag
                  </Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
