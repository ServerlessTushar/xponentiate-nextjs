import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CustomButton from "./CustomButton";
import Image from "next/image";
import logo from "../../public/homepage/logo.webp"
import { useState } from "react";
import Form from "./Form";

export default function Navbar() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <div className="fixed top-6 md:top-0 left-0 right-0 h-10 md:h-[6.436rem] z-50 flex items-center">
      <div className="container px-6 md:px-24 mx-auto">
        <div className="bg-white rounded-xl shadow-[0_2px_24px_rgba(0,0,0,0.05)] px-6 py-2 md:py-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center cursor-pointer">
              <Image src={logo} alt="Logo" className="w-[128.09px] h-[19.97px] md:w-[258.4px] md:h-[40.27px]" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link 
                href="#why-partner" 
                className="text-[15.84px] leading-[21.57px] text-[#616161] hover:text-gray-900 transition-colors cursor-pointer"
              >
                Why Partner with us
              </Link>
              <Link 
                href="#testimonial-section" 
                className="text-[15.84px] leading-[21.57px] text-[#616161] hover:text-gray-900 transition-colors cursor-pointer"
              >
                Testimonials
              </Link>
              <a 
                href="mailto:talent@xponentiate.com" 
                className="text-[15.84px] leading-[21.57px] text-[#616161] hover:text-gray-900 transition-colors cursor-pointer"
              >
                Find your new role
              </a>
              <CustomButton cta="Contact us" onClick={toggleForm} />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={toggleSheet}>
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link href="#why-partner" className="text-[24px] leading-[28px] text-[#616161]" onClick={closeSheet}>
                      Why Partner with us
                    </Link>
                    <hr className="border-[0.5px] border-[#E42217]" />
                    <Link href="#testimonial-section" className="text-[24px] leading-[28px] text-[#616161]" onClick={closeSheet}>
                      Testimonials
                    </Link>
                    <hr className="border-[0.5px] border-[#E42217]" />
                    <a href="mailto:talent@xponentiate.com" className="text-[24px] leading-[28px] text-[#616161]" onClick={closeSheet}>
                      Find your new role
                    </a>
                    <hr className="border-[0.5px] border-[#E42217]" />
                  </div>
                  <CustomButton cta="Contact us" className="w-[9.716rem] mt-16" onClick={() => { closeSheet(); toggleForm(); }} />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-[#9E9D9DCC] flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md md:max-w-lg relative">
            <button onClick={toggleForm} className="absolute top-3 right-3 text-red-500">X</button>
            <Form />
          </div>
        </div>
      )}
    </div>
  );
}