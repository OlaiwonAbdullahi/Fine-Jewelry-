import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandX,
  IconBrandFacebook,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border/10 pt-20 pb-10 px-6 lg:px-12">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col gap-1">
              <span className="brillant text-3xl tracking-widest text-foreground">
                A3
              </span>
              <span className="text-[8px] tracking-[0.4em] font-medium text-foreground/50 uppercase">
                Fine Jewelry
              </span>
            </Link>
            <p className="text-[10px] tracking-widest leading-loose text-foreground/60 uppercase max-w-[200px]">
              The pinnacle of luxury craftsmanship, defined by sophistication
              since 1924.
            </p>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] font-bold text-foreground mb-8 uppercase">
              Customer Care
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                "Contact Us",
                "Boutique Locator",
                "Book an Appointment",
                "Gifting Services",
                "Care & Repair",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-[10px] tracking-widest text-foreground/50 hover:text-foreground transition-colors uppercase"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] font-bold text-foreground mb-8 uppercase">
              Legal
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                "Terms of Use",
                "Privacy Policy",
                "Cookie Policy",
                "Conditions of Sale",
                "Ethical Trading",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-[10px] tracking-widest text-foreground/50 hover:text-foreground transition-colors uppercase"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] font-bold text-foreground mb-8 uppercase">
              Newsletter
            </h4>
            <p className="text-[10px] tracking-widest text-foreground/50 uppercase mb-6">
              Subscribe to discover our latest collections and events.
            </p>
            <div className="border-b border-black/10 pb-2 flex items-center justify-between group">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="bg-transparent border-none outline-none text-[10px] tracking-[0.2em] w-full placeholder:text-foreground/30 font-medium"
              />
              <button className="text-[10px] tracking-[0.3em] font-bold uppercase transition-all duration-300 group-hover:translate-x-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 border-t border-border/10 gap-8">
          <div className="flex items-center gap-8">
            <IconBrandInstagram
              size={20}
              strokeWidth={1}
              className="text-foreground/40 hover:text-foreground cursor-pointer transition-colors"
            />
            <IconBrandPinterest
              size={20}
              strokeWidth={1}
              className="text-foreground/40 hover:text-foreground cursor-pointer transition-colors"
            />
            <IconBrandX
              size={20}
              strokeWidth={1}
              className="text-foreground/40 hover:text-foreground cursor-pointer transition-colors"
            />
            <IconBrandFacebook
              size={20}
              strokeWidth={1}
              className="text-foreground/40 hover:text-foreground cursor-pointer transition-colors"
            />
          </div>
          <span className="text-[9px] tracking-[0.5em] text-foreground/30 uppercase">
            © 2026 A3 FINE JEWELRY. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
