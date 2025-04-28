import { HeroSection } from "@/components/home/hero-section/hero-section";
import { NavigationSection } from "@/components/home/navigation-section/navigation-section";
import { Overview } from "@/components/home/overview/overview";
import { Categories } from "@/components/home/categories/categories";
import { ForYouSection } from "@/components/home/for-you-section/for-you-section";
import { AlaBabk } from "@/components/home/ala-babk/ala-babk";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <NavigationSection />
      <Overview />
      <Categories />
      <ForYouSection />
      <AlaBabk />
    </>
  );
}
