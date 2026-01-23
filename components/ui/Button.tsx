import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-gold-primary/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default:
          "bg-emerald-primary text-cream-primary shadow-sm hover:bg-emerald-secondary focus-visible:ring-gold-primary/30",

        gold: "bg-gold-primary text-emerald-dark shadow-sm hover:bg-gold-deep focus-visible:ring-gold-deep/30",

        outline:
          "border-2 border-gold-primary text-gold-primary bg-transparent hover:bg-gold-champagne hover:border-gold-deep focus-visible:ring-gold-primary/30",

        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/30",

        secondary:
          "bg-beige-pearl text-emerald-primary hover:bg-beige-warm focus-visible:ring-gold-primary/20",

        ghost:
          "text-emerald-primary hover:bg-beige-pearl hover:text-emerald-secondary focus-visible:ring-gold-primary/20",

        link: "text-gold-primary underline-offset-4 hover:underline hover:text-gold-deep",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 text-xs has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 text-base has-[>svg]:px-4",
        xl: "h-12 rounded-md px-8 text-lg has-[>svg]:px-6",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
