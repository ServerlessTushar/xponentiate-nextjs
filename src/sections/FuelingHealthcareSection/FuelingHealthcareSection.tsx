import React from 'react'
import Image from 'next/image'
import sectionLogo from '../../../public/homepage/sectionLogo.webp'
import sectionLogoMob from '../../../public/homepage/sectionLogoMob.webp'

const FuelingHealthcareSection = () => {
  return (
    <section className="container mx-auto py-16 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        {/* Logo */}
        <div className="w-full max-w-[300px] md:max-w-[400px]">
          <Image
            src={sectionLogo}
            alt="Xponentiate"
            className="hidden md:block"
            width={414}
            height={64}
          />
          <Image
            src={sectionLogoMob}
            alt="Xponentiate"
            className="block md:hidden mx-auto"
            width={165.6}
            height={25.6}
          />
        </div>

        {/* Heading */}
        <div className="space-y-2 text-[16.9px] leading-[22.02px] md:text-[52.8px] md:leading-[68.8px] font-light">
          <p className="text-[#616161]">Fueling Healthcare Growth with</p>
          <p className="italic text-[#E42217]">Xponential Talent</p>
        </div>
      </div>
    </section>
  )
}

export default FuelingHealthcareSection
