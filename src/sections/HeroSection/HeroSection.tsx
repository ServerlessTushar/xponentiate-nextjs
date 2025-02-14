import CustomButton from '@/components/CustomButton'
import React from 'react'
import Image from 'next/image'
import HeroImg from '../../../public/homepage/heroImg.webp'
import HeroImgMob from '../../../public/homepage/heroImgMob.webp'
import TypewriterEffect from '@/components/TypewriterEffect'

const HeroSection = React.memo(() => {
    const healthcareWords = ["Leader", "Consultant", "Clinicians", "Product Lead", "CXOs"];
      
    return (
        <div className="min-h-screen flex flex-col px-6 md:px-28 relative">
            {/* This section expands and centers the h1 vertically */}
            <div className="flex items-center justify-start mt-24 md:mt-48">
                <h1 className="text-black text-[28px] leading-[36px] md:text-[68px] md:leading-[90px] text-start">
                    Find your future <br/>
                    <span className="text-[#E42217] italic">Healthcare <TypewriterEffect words={healthcareWords} /></span>
                </h1>
            </div>
            {/* This section places the paragraph and buttons below the h1 */}
            <div className="mt-8 md:mt-40">
                <p className="text-[14px] leading-[19px] md:text-[22px] md:leading-8 text-[#616161] text-left w-[90%] md:w-[40%]">
                    Xponentiate is the leading healthcare talent partner, connecting organizations with high-impact professionals to drive growth and innovation.
                </p>
                <div className="mt-8 md:mt-12 hidden md:flex md:justify-start md:gap-4">
                    <CustomButton cta="Find Work" asChild={true} href="contact-us" />
                    <CustomButton cta="Find Talent" asChild={true} href="contact-us" />
                </div>
            </div>
            <Image 
                src={HeroImg} 
                alt='hero image' 
                className='w-full h-auto absolute right-0 top-[59%] -translate-y-1/2 md:w-[676.94px] md:h-[664.06px] hidden md:block' 
                width={676.94}
                height={664.06}
            />
            <Image 
                src={HeroImgMob} 
                alt='hero image mobile' 
                className='absolute right-[12%] top-[66%] -translate-y-1/2 md:hidden w-[268.98px] h-[316.45px]' 
                width={268.98}
                height={316.45}
            />
            {/* Mobile-specific button container */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 md:hidden">
                <CustomButton cta="Find Work" asChild={true} href="contact-us" />
                <CustomButton cta="Find Talent" asChild={true} href="contact-us" />
            </div>
        </div>
    )
})

HeroSection.displayName = 'HeroSection';

export default HeroSection
