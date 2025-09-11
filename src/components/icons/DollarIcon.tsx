import React from 'react';

interface DollarIconProps {
  className?: string;
}

const DollarIcon: React.FC<DollarIconProps> = ({ className = "w-5 h-5" }) => {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g opacity="0.4">
        <path 
          d="M7.22656 11.9415C7.22656 13.0165 8.05156 13.8832 9.07656 13.8832H11.1682C12.0599 13.8832 12.7849 13.1248 12.7849 12.1915C12.7849 11.1748 12.3432 10.8165 11.6849 10.5832L8.32656 9.41652C7.66823 9.18318 7.22656 8.82485 7.22656 7.80818C7.22656 6.87485 7.95156 6.11652 8.84323 6.11652H10.9349C11.9599 6.11652 12.7849 6.98318 12.7849 8.05818" 
          stroke="currentColor" 
          strokeWidth="1.25" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M10 5V15" 
          stroke="currentColor" 
          strokeWidth="1.25" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
      <path 
        d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DollarIcon;
