import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./Navigation/MobileNav";
import MobileBottomNav from "./MobileBottomNav";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MobileNav />

      <main className="flex-1 pb-16 lg:pb-0">{children}</main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
