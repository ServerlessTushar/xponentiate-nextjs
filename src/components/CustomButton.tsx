import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";

interface CustomButtonProps {
  cta: string;
  className?: string; 
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ cta, className, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={`
        group flex items-center gap-2 border-[#E12B15] text-black bg-white
        text-[14.4px] md:text-[18px] border rounded-[6px] transition-all duration-300
        hover:bg-[#E12B15] hover:text-white hover:border-[#E12B15]
        transform origin-left hover:scale-x-110 ${className}
      `}
    >
      {cta}
      <ChevronRight className="w-5 h-5 transition-all duration-300 text-[#E12B15] group-hover:!text-white" />
    </Button>
  );
};

export default CustomButton;
