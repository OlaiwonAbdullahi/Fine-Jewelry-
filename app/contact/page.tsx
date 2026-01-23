import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactUs() {
  return (
    <PageLayout>
      <div className="bg-cream-white min-h-[80vh]">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="brillant text-5xl text-emerald-primary mb-4">
              Contact Our Concierge
            </h1>
            <p className="fancy text-charcoal-dark">
              We are at your service for inquiries, appointments, and styling
              advice.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="space-y-12">
              <div>
                <h3 className="brillant text-2xl text-emerald-secondary mb-4">
                  Client Services
                </h3>
                <p className="fancy text-charcoal-dark mb-2">
                  Monday to Saturday, 9am - 8pm EST
                </p>
                <p className="fancy text-gold-deep font-medium text-lg">
                  +1 (800) 123-4567
                </p>
                <p className="fancy text-charcoal-dark underline cursor-pointer hover:text-gold-deep transition-colors">
                  concierge@a3jewelry.com
                </p>
              </div>

              <div>
                <h3 className="brillant text-2xl text-emerald-secondary mb-4">
                  Boutique
                </h3>
                <p className="fancy text-charcoal-dark leading-relaxed">
                  155 Mercer Street
                  <br />
                  SoHo, New York, NY 10012
                  <br />
                  United States
                </p>
                <Button
                  variant="link"
                  className="text-gold-deep p-0 mt-2 h-auto font-normal fancy hover:no-underline"
                >
                  Get Directions &rarr;
                </Button>
              </div>

              <div>
                <h3 className="brillant text-2xl text-emerald-secondary mb-4">
                  Press Inquiries
                </h3>
                <p className="fancy text-charcoal-dark">
                  For press and collaboration requests, please contact
                  press@a3jewelry.com
                </p>
              </div>
            </div>

            <div className="bg-cream-primary p-8 md:p-12 border border-beige-warm rounded-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="fancy text-emerald-dark"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Jane"
                      className="bg-white border-beige-warm focus-visible:ring-gold-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="fancy text-emerald-dark"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-white border-beige-warm focus-visible:ring-gold-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="fancy text-emerald-dark">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    className="bg-white border-beige-warm focus-visible:ring-gold-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="fancy text-emerald-dark">
                    Message
                  </Label>

                  <textarea
                    id="message"
                    rows={5}
                    className="flex w-full rounded-md border border-beige-warm bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 fancy"
                    placeholder="How can we assist you?"
                  />
                </div>

                <Button className="w-full bg-emerald-primary text-white hover:bg-emerald-dark fancy py-6">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
