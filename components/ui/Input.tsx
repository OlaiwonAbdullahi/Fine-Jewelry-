import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-md border border-beige-warm bg-cream-white px-3 py-1 text-base shadow-sm transition-all outline-none",

        "text-charcoal-dark placeholder:text-gray-soft",

        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-charcoal-dark",

        "selection:bg-gold-primary selection:text-emerald-dark",

        "focus-visible:border-gold-primary focus-visible:ring-[3px] focus-visible:ring-gold-primary/30",

        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 focus-visible:aria-invalid:ring-destructive/30",

        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-beige-pearl",

        "dark:bg-emerald-dark/30 dark:border-emerald-secondary dark:text-cream-primary",

        "md:text-sm",

        className,
      )}
      {...props}
    />
  );
}

export { Input };
