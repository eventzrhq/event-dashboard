import React from 'react';

interface HomeIconProps {
  className?: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({ className = "w-5 h-5" }) => {
  return (
    <svg 
      width="18" 
      height="18" 
      viewBox="0 0 18 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_3_2775)">
        <path 
          opacity="0.4" 
          d="M6.74961 16.4999L6.56164 13.8682C6.46057 12.4533 7.58115 11.2499 8.99961 11.2499C10.4181 11.2499 11.5386 12.4533 11.4376 13.8682L11.2496 16.4999" 
          stroke="currentColor" 
          strokeWidth="1.15385"
        />
        <path 
          d="M1.76354 9.9101C1.49878 8.1872 1.3664 7.32574 1.69212 6.56205C2.01785 5.79835 2.74052 5.27584 4.18585 4.23081L5.26574 3.45002C7.06372 2.15002 7.9627 1.50002 9 1.50002C10.0373 1.50002 10.9363 2.15002 12.7343 3.45002L13.8141 4.23081C15.2595 5.27584 15.9821 5.79835 16.3079 6.56205C16.6336 7.32574 16.5012 8.1872 16.2365 9.9101L16.0107 11.3793C15.6353 13.8217 15.4477 15.0429 14.5717 15.7715C13.6958 16.5 12.4152 16.5 9.85411 16.5H8.14589C5.58475 16.5 4.30418 16.5 3.42825 15.7715C2.55232 15.0429 2.36465 13.8217 1.98932 11.3793L1.76354 9.9101Z" 
          stroke="currentColor" 
          strokeWidth="1.15385" 
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_2775">
          <rect width="18" height="18" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default HomeIcon;
