'use client'
import React, { useState } from 'react'
import TestimonialCard from '@/components/TestimonialCard'
import { StaticImageData } from 'next/image'

interface Testimonial {
  name: string
  title: string
  ratingImg: StaticImageData
  review: string
}

interface TestimonialSectionProps {
  testimonials: Testimonial[]
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-[#F1EFEF] p-8 text-center" id="testimonial-section">
      <h2 className="text-[#E42217] text-xs md:text-[28px] font-medium md:leading-[56px]">Testimonial</h2>
      <h1 className="text-2xl md:text-[50px] md:leading-[56px] font-medium mt-2 mx-10">
        See what our clients have to say
      </h1>
      <div className="mt-8 flex justify-center">
        <TestimonialCard {...testimonials[currentIndex]} />
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handlePrev} className="mx-2">◀</button>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`mx-2 ${index === currentIndex ? 'text-red-500' : 'text-gray-500'}`}
            onClick={() => setCurrentIndex(index)}
          >
            ●
          </button>
        ))}
        <button onClick={handleNext} className="mx-2">▶</button>
      </div>
    </div>
  )
}

export default TestimonialSection