import React from 'react'
import Image from 'next/image'
import CustomButton from '../../components/CustomButton'
import craftingUniqueConnection from '../../../public/homepage/craftingUniqueConnection.webp'   
import craftingUniqueConnectionMob from '../../../public/homepage/craftingUniqueConnectionMob.webp'

const CraftingUniqueConnection = () => {
  return (
    <div className="md:h-screen flex flex-col md:flex-row items-center md:justify-between gap-8 px-6 md:px-28 md:py-16">
      {/* Text Section */}
      <div className="md:w-[60%] text-left order-2 md:order-1">
        <h2 className="text-[24px] leading-[30px] md:text-[60px] md:leading-[64px] font-medium">
          Crafting <span className="text-[#E42217] italic font-bold">unique</span> connections, everytime.
        </h2>
        <p className="text-sm md:text-[22px] md:leading-[25.78px] text-[#616161] mt-4 font-normal">
          Let our team solve the structural and operational problems of building a recruiting funnel, so that you can focus on what you do best.
        </p>
        <div className="mt-8 md:mt-20">
          <CustomButton cta="It's time to accelerate your hiring" />
        </div>
      </div>
      {/* Image Section */}
      <div className="mt-8 md:mt-0 flex justify-center order-1 md:order-2">
        <Image 
          src={craftingUniqueConnection} 
          alt="Main Image" 
          className="w-[430.9px] h-[441.61px] md:max-w-none hidden md:block"
        />
        <Image 
          src={craftingUniqueConnectionMob} 
          alt="Main Image" 
          className="w-[258.54px] h-[264.97px] md:max-w-none block md:hidden"
        />
      </div>
    </div>
  )
}

export default CraftingUniqueConnection
