import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Agency } from "@/components/Agency";
import NDPC  from "@/components/Ndpc";

export default function Home() {
  return (
    <>
      <Hero/>
      <Products/>
      {/* <Stats/> */}
      {/* <Testimonials /> */}
      <Agency />
      <NDPC />
    </>
  );
}
