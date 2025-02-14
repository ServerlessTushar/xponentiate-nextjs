'use client'
import React, { useRef } from 'react'
import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import image1 from '../../../public/homepage/rightChoice/rightChoice1.webp'
import image2 from '../../../public/homepage/rightChoice/rightChoice2.webp'
import image3 from '../../../public/homepage/rightChoice/rightChoice3.webp'
import image4 from '../../../public/homepage/rightChoice/rightChoice4.webp'
import image5 from '../../../public/homepage/rightChoice/rightChoice5.webp'
import image6 from '../../../public/homepage/rightChoice/rightChoice6.webp'
// import image1Mob from '../../../public/homepage/rightChoice/rightChoice1Mob.webp'
// import image2Mob from '../../../public/homepage/rightChoice/rightChoice2Mob.webp'   
// import image3Mob from '../../../public/homepage/rightChoice/rightChoice3Mob.webp'
// import image4Mob from '../../../public/homepage/rightChoice/rightChoice4Mob.webp'
// import image5Mob from '../../../public/homepage/rightChoice/rightChoice5Mob.webp'   
// import image6Mob from '../../../public/homepage/rightChoice/rightChoice6Mob.webp'

const desktopImages = [image1, image2, image3, image4, image5, image6]
//const mobileImages = [image1Mob, image2Mob, image3Mob, image4Mob, image5Mob, image6Mob]

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const RightChoiceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  //const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  //const images = isMobile ? mobileImages : desktopImages
  const images = desktopImages


  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 min-h-screen" id="why-partner">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <h2 className="text-[24px] leading-8 md:text-[60px] md:leading-[64px] font-base">
          What makes us the <span className="text-[#e42217] italic font-bold">right choice</span> for you?
        </h2>
        <p className="text-[16px] leading-6 md:text-[22px] md:leading-[25.78px] text-[#616161] mt-4 md:mt-6 md:w-[80%]">
          We don&apos;t just source good candidates and throw them over the fence. We build recruitment structures that fuel growth and long-term success.
        </p>
        <div className='w-[134px] h-[33.42px] md:w-[150.38px] md:h-[45.42px] mt-10 md:mt-20'>
            <CustomButton cta="Contact Us" href="contact-us" asChild={true} />
        </div>
      </div>

      {/* Right Animation */}
      <div className="md:w-1/2 relative h-[75vh] overflow-hidden" ref={containerRef}>
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full flex justify-center items-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <Image
              src={img}
              alt={`Image ${index + 1}`}
              className="object-cover w-[267px] h-[130px] md:w-[645.12px] md:h-[248.64px]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default RightChoiceSection