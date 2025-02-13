'use client'
import React, { useEffect, useRef, useState } from 'react'
import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import image1 from '../../../public/homepage/rightChoice/rightChoice1.webp'
import image2 from '../../../public/homepage/rightChoice/rightChoice2.webp'
import image3 from '../../../public/homepage/rightChoice/rightChoice3.webp'
import image4 from '../../../public/homepage/rightChoice/rightChoice4.webp'
import image5 from '../../../public/homepage/rightChoice/rightChoice5.webp'
import image6 from '../../../public/homepage/rightChoice/rightChoice6.webp'
import image1Mob from '../../../public/homepage/rightChoice/rightChoice1Mob.webp'
import image2Mob from '../../../public/homepage/rightChoice/rightChoice2Mob.webp'   
import image3Mob from '../../../public/homepage/rightChoice/rightChoice3Mob.webp'
import image4Mob from '../../../public/homepage/rightChoice/rightChoice4Mob.webp'
import image5Mob from '../../../public/homepage/rightChoice/rightChoice5Mob.webp'   
import image6Mob from '../../../public/homepage/rightChoice/rightChoice6Mob.webp'

const desktopImages = [image1, image2, image3, image4, image5, image6]
const mobileImages = [image1Mob, image2Mob, image3Mob, image4Mob, image5Mob, image6Mob]


const RightChoiceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      if (!container) return

      const { top, height } = container.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      if (top < viewportHeight && top > -height) {
        const progress = Math.min(Math.max((viewportHeight - top) / viewportHeight, 0), 1)
        setActiveIndex(Math.floor(progress * desktopImages.length))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const images = isMobile ? mobileImages : desktopImages

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 min-h-screen">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <h2 className="text-[24px] leading-8 md:text-[60px] md:leading-[64px] font-base">
          What makes us the <span className="text-[#e42217] italic font-bold">right choice</span> for you?
        </h2>
        <p className="text-[16px] leading-6 md:text-[22px] md:leading-[25.78px] text-[#616161] mt-4 md:mt-6 md:w-[80%]">
          We don&apos;t just source good candidates and throw them over the fence. We build recruitment structures that fuel growth and long-term success.
        </p>
        <div className='w-[134px] h-[33.42px] md:w-[150.38px] md:h-[45.42px] mt-10 md:mt-20'>
            <CustomButton cta="Contact Us" />
        </div>
      </div>

      {/* Right Animation */}
      <div className="md:w-1/2 relative h-[75vh] overflow-hidden" ref={containerRef}>
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            className="absolute bottom-0 transition-transform duration-500"
            style={{
              transform: `translateY(${index <= activeIndex ? 0 : 100}%)`,
              opacity: index <= activeIndex ? 1 : 0,
              zIndex: index,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default RightChoiceSection