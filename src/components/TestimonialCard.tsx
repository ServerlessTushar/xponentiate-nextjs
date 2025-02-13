import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface TestimonialCardProps {
  name: string
  title: string
  ratingImg: StaticImageData
  review: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, title, ratingImg, review }) => {
  return (
    <div className="bg-white p-6 md:px-20 md:py-12 rounded-lg shadow-lg w-[18.479rem] h-[14.079rem] md:w-[51.598rem] md:h-[30.736rem] flex flex-col justify-between">
      <div className="flex flex-col justify-between items-start">
        <div className="block">
          {/* <Image src={ratingImg} alt="Star Rating" width={43.99} height={8.8} /> */}
          <Image src={ratingImg} alt="Star Rating" className='w-[43.99px] h-[8.8px] md:w-[146.63px] md:h-[29.33px]' />
        </div>
        <p className="text-[18px] leading-[21px] md:text-[33.6px] md:leading-[46.5px] mt-6 md:mt-12 text-[#616161] text-left">
          {review}
        </p>
        {/* <div className="hidden md:block">
          <Image src={ratingImg} alt="Star Rating" width={146.63} height={29.33} />
          <Image src={ratingImg} alt="Star Rating" className='w-[43.99px] h-[8.8px] md:w-[146.63px] md:h-[29.33px]' />
        </div> */}
      </div>
      <div className="mt-2 md:mt-4 text-left">
        <p className="font-extrabold text-[12px] leading-[8.86px] md:text-[23.6px] md:leading-[29.52px]">{name}</p>
        <p className='font-normal text-[9px] leading-[8.86px] md:text-[17.28px] md:leading-[29.52px]'>{title}</p>
      </div>
    </div>
  )
}

export default TestimonialCard