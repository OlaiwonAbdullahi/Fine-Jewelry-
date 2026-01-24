import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MessageSquare } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="bg-white min-h-screen">
      <section className="grid md:grid-cols-2 items-center bg-white border-b border-beige-warm overflow-hidden">
        <div className="relative h-[300px] md:h-[500px] bg-[#f7f7f7]">
          <img
            src="/hero.png"
            alt="Luxury Jewelry Box"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 md:p-16 lg:p-24 space-y-4">
          <h2 className="brillant text-3xl md:text-4xl tracking-widest text-emerald-primary uppercase">
            Contact Us
          </h2>
          <p className="fancy text-charcoal-dark max-w-md leading-relaxed">
            Our A3 Ambassadors are delighted to assist you with your orders,
            style advice, gift ideas, and more.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 stroke-[1.5px] text-charcoal-dark" />
              <h3 className="brillant text-lg tracking-widest uppercase">
                Call Us
              </h3>
            </div>
            <div className="fancy text-[15px] leading-relaxed text-charcoal-dark space-y-1">
              <p className="italic opacity-80 mb-2">
                A3 Client Relations hours (in EST)
              </p>
              <p>Weekdays - 9 a.m. to 9 p.m.</p>
              <p>Saturday - 10 a.m. to 9 p.m.</p>
              <p>Sunday - 10 a.m. to 8 p.m.</p>
            </div>
            <a
              href="tel:18001234567"
              className="group relative cursor-pointer inline-block fancy text-lg pt-2"
            >
              <span>Tel. 1.800.123.4567</span>

              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-charcoal-dark/40 transition-transform duration-300 origin-left group-hover:scale-x-0"></span>
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 stroke-[1.5px] text-charcoal-dark" />
              <h3 className="brillant text-lg tracking-widest uppercase">
                E-Mail Us
              </h3>
            </div>
            <p className="fancy text-[15px] text-charcoal-dark">
              An A3 Ambassador will respond as soon as possible.
            </p>
            <a
              href="mailto:concierge@a3jewelry.com"
              className="group relative cursor-pointer inline-block fancy text-[15px] pt-4"
            >
              <span>Send an e-mail</span>

              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-charcoal-dark transition-transform duration-300 origin-left group-hover:scale-x-0"></span>
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 stroke-[1.5px] text-charcoal-dark" />
              <h3 className="brillant text-lg tracking-widest uppercase">
                Live Chat
              </h3>
            </div>
            <p className="fancy text-[15px] text-charcoal-dark">
              Connect with an A3 Ambassador when available.
            </p>
          </div>
        </div>

        <div className="mt-32 max-w-2xl mx-auto border-t border-beige-warm pt-20">
          <h3 className="brillant text-2xl text-center mb-12 uppercase tracking-widest">
            Inquiry Form
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="fancy text-xs uppercase tracking-widest"
                >
                  First Name
                </Label>
                <input
                  id="firstName"
                  className="w-full rounded-none border-0 border-b border-beige-warm bg-transparent focus:outline-none focus:border-charcoal-dark px-0 h-10 fancy text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="lastName"
                  className="fancy text-xs uppercase tracking-widest"
                >
                  Last Name
                </Label>
                <input
                  id="lastName"
                  className="w-full rounded-none border-0 border-b border-beige-warm bg-transparent focus:outline-none focus:border-charcoal-dark px-0 h-10 fancy text-sm"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="fancy text-xs uppercase tracking-widest"
              >
                Email
              </Label>
              <input
                id="email"
                type="email"
                className="w-full rounded-none border-0 border-b border-beige-warm bg-transparent focus:outline-none focus:border-charcoal-dark px-0 h-10 fancy text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="fancy text-xs uppercase tracking-widest"
              >
                Message
              </Label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-none border-0 border-b border-beige-warm focus:outline-none focus:border-charcoal-dark py-2 fancy text-sm"
              />
            </div>

            <div className="flex justify-center pt-10">
              <Button
                variant="outline"
                className="group relative overflow-hidden rounded-none border border-gold-primary/50 bg-transparent px-12 py-8 text-emerald-primary transition-all hover:border-gold-primary hover:bg-transparent"
              >
                <span className="relative z-10 fancy tracking-widest uppercase text-xs transition-colors group-hover:text-white">
                  Submit Inquiry
                </span>
                <span className="absolute inset-0 z-0 h-full w-full -translate-x-full bg-gold-primary transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
