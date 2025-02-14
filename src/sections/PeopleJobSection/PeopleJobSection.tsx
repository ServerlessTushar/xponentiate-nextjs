import React from 'react'
import Image from 'next/image'
import peopleJob from '../../../public/homepage/peopleJob.webp'
import peopleJobMob from '../../../public/homepage/peopleJobMob.webp'

const PeopleJobSection = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-2 md:gap-8 mt-8 md:mt-0">
      <div className="text-left pl-4 md:pl-28 w-[90%] md:w-[60%] -mt-20">
        <h1 className="font-500 text-[30px] leading-[30px] md:text-[120px] md:leading-[120px] text-[#DAD8D8]">
          It&apos;s not a <br/><span className="text-[#E42217]">People-Job</span><br/> match <br/>anymore! |
        </h1>
      </div>
      <div className="mt-4 md:mt-0">
          <Image
            src={peopleJob}
            alt="People Job"
            // width={747.78}
            // height={589.96}
            className="hidden md:block md:w-[611.82px] md:h-[743.96px]"
          />
          <Image
            src={peopleJobMob}
            alt="People Job Mobile"
            // width={259.97}
            // height={284.82}
            className="block md:hidden md:w-[201.33px] md:h-[231.82px]"
          />
      </div>
    </div>
  )
}

export default PeopleJobSection
