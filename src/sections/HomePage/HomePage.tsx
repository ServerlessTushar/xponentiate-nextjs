'use client'
import React from 'react'
import Navbar from "@/components/Navbar";
import CraftingUniqueConnection from "@/sections/CraftingUniqueConnection/CraftingUniqueConnection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import PeopleJobSection from "@/sections/PeopleJobSection/PeopleJobSection";
import TestimonialSection from "@/sections/TestimonialSection/TestimonialSection";
import TrustedBrand from "@/sections/TrustedBrand/TrustedBrand";
import ratingImg from '../../../public/homepage/fiveStar.webp'
import FuelingHealthcareSection from "@/sections/FuelingHealthcareSection/FuelingHealthcareSection";
import ContactUs from "@/sections/ContactUs/ContactUs";
import Footer from "@/sections/Footer/Footer";
import RightChoiceSection from "@/sections/RightChoiceSection/RightChoiceSection";

const testimonials = [
    {
        name: 'Deepak Sahu',
        title: 'Stealth VC Fund',
        ratingImg: ratingImg,
        review: "“Xponentiate is the best recruitment team I've ever partnered with.”"
    },
    {
        name: 'Sanchit Mullick',
        title: 'CEO, Reveal HealthTech',
        ratingImg: ratingImg,
        review: "“Working with Xponentiate streamlined our recruitment process significantly. Their ability to understand our specific needs and deliver high-quality candidates allowed us to make key hires efficiently. Their insights into HealthTech hiring trends have been a valuable addition to our strategy.”"
    }
   
]

const HomePage = () => {
 
    return (
        <>
            <Navbar />
            <HeroSection />
            <TrustedBrand />
            <CraftingUniqueConnection />
            <PeopleJobSection />
            <RightChoiceSection />
            <TestimonialSection testimonials={testimonials} />
            <FuelingHealthcareSection />
            <ContactUs />
            <Footer />
        </>
    )
}

export default HomePage
