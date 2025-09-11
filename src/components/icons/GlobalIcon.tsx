import React from 'react';

interface GlobalIconProps {
  className?: string;
}

const GlobalIcon: React.FC<GlobalIconProps> = ({ className = "w-5 h-5" }) => {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <g opacity="0.4">
        <path 
          d="M6.66618 2.5H7.49951C5.87451 7.36667 5.87451 12.6333 7.49951 17.5H6.66618" 
          stroke="currentColor" 
          strokeWidth="1.25" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M12.5 2.5C14.125 7.36667 14.125 12.6333 12.5 17.5" 
          stroke="currentColor" 
          strokeWidth="1.25" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M2.5 13.3333V12.5C7.36667 14.125 12.6333 14.125 17.5 12.5V13.3333" 
          stroke="currentColor" 
          strokeWidth="1.25" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M2.5 7.50006C7.36667 5.87506 12.6333 5.87506 17.5 7.50006" 
          stroke="currentColor" 
          strokeWidth="1.25" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default GlobalIcon;
