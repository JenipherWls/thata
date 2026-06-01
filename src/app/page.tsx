import { HomeAreas } from "@/components/sections/home/areas";
import { HomeFeatured } from "@/components/sections/home/featured";
import { HomeHero } from "@/components/sections/home/hero";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAreas />
      <HomeFeatured />
    </>
  );
}
