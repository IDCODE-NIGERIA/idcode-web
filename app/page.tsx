import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Agency } from "@/components/Agency";

export default function Home() {
  return (
    <>
      <Hero/>
      <Products/>
      <Stats/>
      <Testimonials />
      <Agency />
    </>
  );
}
