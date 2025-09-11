import React from "react";

interface PlusIconProps {
  className?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({ className = "w-4 h-4" }) => {
  return (
    <svg 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M8.00015 2.66733V13.334" 
        stroke="black" 
        strokeOpacity="0.2" 
        strokeLinejoin="round"
      />
      <path 
        d="M2.66682 8.00067H13.3335" 
        stroke="black" 
        strokeOpacity="0.2" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
