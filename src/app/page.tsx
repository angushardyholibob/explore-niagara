import Hero from "@/components/Hero";
import FeaturedTours from "@/components/FeaturedTours";
import USPSection from "@/components/USPSection";
import Collections from "@/components/Collections";
import AboutSection from "@/components/AboutSection";
import InstagramSection from "@/components/InstagramSection";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedTours />
      <USPSection />
      <Collections />
      <AboutSection />
      <Newsletter />
      <InstagramSection />
    </>
  );
}
