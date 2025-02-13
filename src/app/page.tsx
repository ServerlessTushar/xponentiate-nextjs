import Navbar from "@/components/Navbar";
import CraftingUniqueConnection from "@/sections/CraftingUniqueConnection/CraftingUniqueConnection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import PeopleJobSection from "@/sections/PeopleJobSection/PeopleJobSection";
import TestimonialSection from "@/sections/TestimonialSection/TestimonialSection";
import TrustedBrand from "@/sections/TrustedBrand/TrustedBrand";
import ratingImg from '../../public/homepage/fiveStar.webp'
import FuelingHealthcareSection from "@/sections/FuelingHealthcareSection/FuelingHealthcareSection";
import ContactUs from "@/sections/ContactUs/ContactUs";
import Footer from "@/sections/Footer/Footer";

const testimonials = [
  {
    name: 'Deepak Sahu',
    title: 'Stealth VC Fund',
    ratingImg: ratingImg,
    review: "“Xponentiate is the best recruitment team I've ever partnered with.”"
  },
  {
    name: 'Isaac Newton',
    title: 'Stealth VC Fund',
    ratingImg: ratingImg,
    review: "“Xponentiate is the best recruitment team I've ever partnered with. Xponentiate is the best recruitment team I've ever partnered with.”"
  },
  {
    name: 'Elbert Einstein',
    title: 'Stealth VC Fund',
    ratingImg: ratingImg,
    review: "“Xponentiate is the best recruitment team I've ever partnered with.Xponentiate is the best recruitment team I've ever partnered with.Xponentiate is the best recruitment team I've ever partnered with.”"
  },
  {
    name: 'Thomas Edison',
    title: 'Stealth VC Fund',
    ratingImg: ratingImg,
    review: "“Xponentiate is the best recruitment team I've ever partnered with.Xponentiate is the best recruitment.”"
  },
]

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
      <TestimonialSection testimonials={testimonials} />
      <FuelingHealthcareSection />
      <ContactUs />
      <Footer />
    </div>
  );
}
