import React from 'react';

interface ClockIconProps {
  className?: string;
}

const ClockIcon: React.FC<ClockIconProps> = ({ className = "w-5 h-5" }) => {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle 
        cx="9.99837" 
        cy="9.99971" 
        r="8.33333" 
        stroke="currentColor" 
        strokeWidth="1.25"
      />
      <path 
        opacity="0.4" 
        d="M9.99854 6.66638V9.99972L11.6652 11.6664" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ClockIcon;
