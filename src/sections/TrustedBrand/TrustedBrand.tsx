import React from 'react'
import Image from 'next/image'
import brand1 from '../../../public/homepage/brand1.webp'
import brand2 from '../../../public/homepage/brand2.webp'
import brand3 from '../../../public/homepage/brand3.webp'
import brand4 from '../../../public/homepage/brand4.webp'
import brand5 from '../../../public/homepage/brand5.webp'
import brand6 from '../../../public/homepage/brand6.webp'

const TrustedBrand = () => {
  return (
    <div className="py-12 md:py-16 px-6 md:px-20 text-center">
      <h2 className="text-[18px] leading-[28px] md:text-[36px] md:leading-[48px] font-bold">
        Trusted by Brands you know!
      </h2>
      <p className="text-[12px] md:text-[18px] text-[#616161] mb-16">
        Don&apos;t worry, you are in good company!
      </p>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-8">
        <Image src={brand1} alt="Brand 1" className="w-[78.16px] md:w-[148px] h-auto" />
        <Image src={brand2} alt="Brand 2" className="w-[78.16px] md:w-[148px] h-auto" />
        <Image src={brand3} alt="Brand 3" className="w-[78.16px] md:w-[148px] h-auto" />
        <Image src={brand4} alt="Brand 4" className="w-[78.16px] md:w-[148px] h-auto" />
        <Image src={brand5} alt="Brand 5" className="w-[78.16px] md:w-[148px] h-auto" />
        <Image src={brand6} alt="Brand 6" className="w-[78.16px] md:w-[148px] h-auto" />
      </div>
      <div className="mt-6 relative">
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 border-t border-[#E12B15]"></div>
        <div className="relative bg-white inline-block px-4">
          <h3 className="text-[52px] leading-[48px] md:text-[114px] md:leading-[133.59px] font-black text-[#CCCACA]">
            300+
          </h3>
          <p className="text-sm md:text-[27px] md:leading-[31.64px]">
            positions closed
          </p>
        </div>
      </div>
    </div>
  )
}

export default TrustedBrand
