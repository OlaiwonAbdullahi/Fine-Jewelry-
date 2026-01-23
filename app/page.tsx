import Hero from "./_components/hero";
import FeaturedProducts from "./_components/featured-products";
import About from "./_components/about";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedProducts />
      <About />
    </div>
  );
}
