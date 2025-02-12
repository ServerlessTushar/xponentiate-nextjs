import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CustomButton from "./CustomButton";

export default function Navbar() {
  return (
    <div className="fixed top-6 md:top-0 left-0 right-0 h-10 md:h-[6.436rem] z-50 flex items-center">
      <div className="container px-6 md:px-24 mx-auto">
        <div className="bg-white rounded-xl shadow-[0_2px_24px_rgba(0,0,0,0.05)] px-6 py-2 md:py-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold tracking-tight">
                x<span className="inline-block -translate-y-1">^</span>ponentiate
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link 
                href="/why-partner" 
                className="text-[15px] text-gray-600 hover:text-gray-900 transition-colors"
              >
                Why Partner with us
              </Link>
              <Link 
                href="/testimonials" 
                className="text-[15px] text-gray-600 hover:text-gray-900 transition-colors"
              >
                Testimonials
              </Link>
              <Link 
                href="/roles" 
                className="text-[15px] text-gray-600 hover:text-gray-900 transition-colors"
              >
                Find your new role
              </Link>
              <CustomButton cta="Contact us" />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link href="/why-partner" className="text-lg">
                      Why Partner with us
                    </Link>
                    <hr className="border-[0.5px] border-[#E42217]" />
                    <Link href="/testimonials" className="text-lg">
                      Testimonials
                    </Link>
                    <hr className="border-[0.5px] border-[#E42217]" />
                    <Link href="/roles" className="text-lg">
                      Find your new role
                    </Link>
                    <hr className="border-[0.5px] border-[#E42217]" />
                  </div>
                  <CustomButton cta="Contact us" className="w-[9.716rem] mt-16" />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}