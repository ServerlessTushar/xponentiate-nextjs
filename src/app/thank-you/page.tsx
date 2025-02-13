import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/homepage/logo.webp"

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#ECEBEB]">
      {/* Logo */}
      <div className="fixed top-0 left-0 p-6">
        <Link href="/" className="flex items-center">
          <Image src={logo}alt="Logo" className="w-[128.09px] h-[19.97px] md:w-[258.4px] md:h-[40.27px]" />
        </Link>
      </div>

      {/* Thank You Message */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-[28px] leading-[36px] md:text-[68px] md:leading-[90px]">
            <span className="text-[#E12B15]">Thank you</span> for sharing your details. 
            <br />
            Our team will get in touch with you.
          </h1>
        </div>
      </div>
    </div>
  );
}