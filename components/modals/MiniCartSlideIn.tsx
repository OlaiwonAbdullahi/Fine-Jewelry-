"use client";

import Link from "next/link";
import Image from "next/image";
import { X, ShoppingBag, Minus, Plus } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

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
        className="w-full sm:max-w-lg flex flex-col p-0"
      >
        <SheetHeader className="px-6 py-4 border-b border-beige-warm">
          <SheetTitle className="flex items-center gap-2 text-emerald-primary">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart ({cartCount})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-soft mb-4" />
            <h3 className="text-lg font-semibold text-charcoal-dark mb-2">
              Your cart is empty
            </h3>
            <p className="text-sm text-gray-soft mb-6">
              Add some beautiful jewelry to get started!
            </p>
            <Button variant="gold" onClick={closeModal} asChild>
              <Link href="/collections">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 pb-4 border-b border-beige-warm last:border-0"
                  >
                    <div className="w-20 h-20 bg-beige-pearl rounded-lg overflow-hidden flex-shrink-0">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-soft">
                          No image
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-charcoal-dark text-sm truncate">
                        {item.name}
                      </h4>
                      {item.material && (
                        <p className="text-xs text-gray-soft mt-1">
                          {item.material}
                        </p>
                      )}
                      {item.size && (
                        <p className="text-xs text-gray-soft">
                          Size: {item.size}
                        </p>
                      )}

                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-semibold text-gold-primary">
                          ${item.price.toFixed(2)}
                        </span>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon-sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon-sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        removeItem(item.id);
                        toast.success("Item removed from cart");
                      }}
                      className="text-gray-soft hover:text-destructive transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-beige-warm p-6 space-y-4 bg-cream-white">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span className="text-charcoal-dark">Subtotal</span>
                <span className="text-gold-primary">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <p className="text-xs text-gray-soft text-center">
                Shipping and taxes calculated at checkout
              </p>

              <div className="space-y-2">
                <Button variant="gold" className="w-full" asChild>
                  <Link href="/checkout" onClick={closeModal}>
                    Proceed to Checkout
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/cart" onClick={closeModal}>
                    View Full Cart
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
