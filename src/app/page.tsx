import Navbar from "@/components/Navbar";
import CraftingUniqueConnection from "@/sections/CraftingUniqueConnection/CraftingUniqueConnection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import PeopleJobSection from "@/sections/PeopleJobSection/PeopleJobSection";
import TrustedBrand from "@/sections/TrustedBrand/TrustedBrand";

export default function Home() {
  return (
    <div
      className="h-screen"
      style={{
        background: "linear-gradient(to bottom, #F9F9F9 53%, #ECEBEB 47%)"
      }}
    >
      <Navbar />
      <HeroSection />
      <TrustedBrand />
      <CraftingUniqueConnection />
      <PeopleJobSection />
    </div>
  );
}
