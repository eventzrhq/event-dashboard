import React from 'react';

interface Home2IconProps {
  className?: string;
}

const Home2Icon: React.FC<Home2IconProps> = ({ className = "w-5 h-5" }) => {
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
        opacity="0.4" 
        d="M9.99902 14.167H10.0065" 
        stroke="currentColor" 
        strokeWidth="1.66667" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M16.6654 7.08368V11.2503C16.6654 14.393 16.6654 15.9644 15.6891 16.9407C14.7127 17.917 13.1414 17.917 9.9987 17.917C6.856 17.917 5.28465 17.917 4.30834 16.9407C3.33203 15.9644 3.33203 14.393 3.33203 11.2503V7.08368" 
        stroke="currentColor" 
        strokeWidth="1.25"
      />
      <path 
        d="M18.3322 8.75035L14.7129 5.27992C12.4907 3.14909 11.3796 2.08368 9.99886 2.08368C8.61815 2.08368 7.50704 3.14909 5.28482 5.27991L1.66553 8.75035" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Home2Icon;
