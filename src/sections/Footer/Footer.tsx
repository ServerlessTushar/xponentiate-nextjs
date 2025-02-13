import React from 'react'
import Image from 'next/image'
import foorterImg from '../../../public/homepage/sectionLogo.webp'

const Footer = () => {
  return (
    <footer className="bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[#616161]">
          {/* Logo and Description */}
          <div className="md:w-1/3 space-y-4">
            <Image src={foorterImg} alt='logo' className='w-[98.21px] h-[15.31px] md:w-[245.53px] md:h-[38.26px]' />
            <p className="text-[10px] leading-[14px] md:text-[19px] md:leading-[22.27px]">
              Xponentiate is the leading healthcare talent partner, connecting organizations with high-impact professionals to drive growth and innovation.
            </p>
          </div>

          {/* Links */}
          <div className="hidden md:flex md:flex-row md:space-x-16 mt-8 md:mt-0">
            <div className="space-y-2">
              <h2 className="font-semibold text-[22px] leading-[25.78px]">Company</h2>
              <ul className="text-[14px] leading-[28.42px] space-y-1">
                <li>About</li>
                <li>Services</li>
                <li>Industries</li>
                <li>Employers</li>
                <li>Job Seekers</li>
              </ul>
            </div>
            <div className="space-y-2 mt-8 md:mt-0">
              <h2 className="font-semibold text-[22px] leading-[25.78px]">Help</h2>
              <ul className="text-[14px] leading-[28.42px] space-y-1">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Customer Support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact and Copyright */}
        <div className="flex flex-row justify-between items-baseline mt-8 md:mt-16 text-[9px] leading-[10.55px] md:text-[14px] md:leading-[16.41px] bg-[linear-gradient(90deg,_rgba(217,217,217,0)_-1.43%,_#F9F9F9_47.28%,_rgba(217,217,217,0)_99.14%)] p-2 md:px-4 md:py-8">
          <div className="flex space-x-4">
            <span>+91 9361126603</span>
            <span>xponentiate.com</span>
          </div>
          <span className="mt-4 md:mt-0">All rights reserved, 2025</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
