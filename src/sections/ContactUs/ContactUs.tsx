"use client";

import Form from "@/components/Form";

export default function ContactUs() {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-8" id="contact-us">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
            <span
              className="px-3 py-2 md:px-5 md:py-3 rounded-[2.6px] w-[78.94px] h-[23.12px] md:w-[112.77px] md:h-[33.03px] bg-[#E42217] border-[#E42217] text-white hover:bg-white hover:text-[#E42217] text-sm md:text-base"
            >
              Contact us
            </span>
            <h2 className="text-[24px] leading-[29.3px] md:text-[54px] md:leading-[65.93px] font-semibold">
              Looking to <span className="text-[#E42217] italic font-medium md:font-bold">xponentiate</span>
              <br /> your team? Talk to us
            </h2>
            <p className="text-[14px] leading-5 md:text-[22px] md:leading-7 font-normal">
              Whether you&apos;re hiring experienced executives, management leaders, or specialized healthcare talent, we help you find the right people to drive growth. Let&apos;s connect and accelerate your hiring.
            </p>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2">
              <Form />
          </div>
        </div>
      </div>
    </section>
  );
}