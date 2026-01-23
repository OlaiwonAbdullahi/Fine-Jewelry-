import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A3 Fine Jewelry",
  description:
    "Where heritage meets contemporary elegance. The pinnacle of luxury craftsmanship, defined by sophistication, timelessness, and exclusivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-black selection:text-white`}
      >
        <Navbar />
        {children}
        <Toaster
          position="bottom-right"
          expand={false}
          richColors
          toastOptions={{
            classNames: {
              toast: "bg-emerald-primary border-gold-primary",
              title: "text-cream-primary",
              description: "text-cream-primary/80",
              actionButton: "bg-gold-primary text-emerald-dark",
              cancelButton: "bg-beige-pearl text-charcoal-dark",
              closeButton:
                "bg-gold-primary/20 text-gold-primary hover:bg-gold-primary hover:text-emerald-dark",
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
