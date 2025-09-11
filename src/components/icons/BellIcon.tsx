import React from 'react';

interface BellIconProps {
  className?: string;
}

const BellIcon: React.FC<BellIconProps> = ({ className = "w-5 h-5" }) => {
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
        d="M12.4385 2.42594L6.8946 5.08718C6.46792 5.29199 6.01203 5.3433 5.54729 5.23919C5.24314 5.17106 5.09105 5.13699 4.96859 5.123C3.44786 4.94934 2.5 6.15293 2.5 7.53697V8.29653C2.5 9.68056 3.44786 10.8842 4.96859 10.7105C5.09105 10.6965 5.24315 10.6624 5.54729 10.5943C6.01203 10.4902 6.46793 10.5415 6.8946 10.7463L12.4385 13.4076C13.7112 14.0185 14.3475 14.3239 15.057 14.0858C15.7664 13.8477 16.01 13.3369 16.497 12.3151C17.8343 9.50938 17.8343 6.32412 16.497 3.51838C16.01 2.49663 15.7664 1.98575 15.057 1.74767C14.3475 1.50958 13.7112 1.81503 12.4385 2.42594Z" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        opacity="0.4" 
        d="M9.54854 17.309L8.30578 18.3333C5.50446 16.1115 5.84669 15.052 5.84669 10.8333H6.79154C7.17498 13.2174 8.07943 14.3466 9.32745 15.1641C10.0961 15.6676 10.2547 16.727 9.54854 17.309Z" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M6.25 10.4167V5.41675" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BellIcon;
