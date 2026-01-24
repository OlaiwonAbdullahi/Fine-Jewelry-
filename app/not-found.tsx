
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-cream-primary px-4 text-center">
      <h1 className="brillant text-9xl text-gold-muted/50 mb-4 select-none">
        404
      </h1>
      <h2 className="brillant text-4xl text-emerald-primary mb-6">
        Page Not Found
      </h2>

      <p className="fancy text-charcoal-dark max-w-md mb-10 leading-relaxed">
        It seems the jewel you are looking for is currently out of sight. Let us
        guide you back to our collection.
      </p>

      <div className="flex gap-4">
        <Link href="/">
          <Button className="bg-emerald-primary hover:bg-emerald-dark text-white px-8 py-6 fancy">
            Return Home
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            variant="outline"
            className="border-emerald-primary text-emerald-primary hover:bg-emerald-primary/5 px-8 py-6 fancy"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}
