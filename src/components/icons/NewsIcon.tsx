import React from 'react';

interface NewsIconProps {
  className?: string;
}

const NewsIcon: React.FC<NewsIconProps> = ({ className = "w-5 h-5" }) => {
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
        d="M5.83195 6.24963H4.99862C3.42727 6.24963 2.64159 6.24963 2.15344 6.73779C1.66528 7.22594 1.66528 8.01162 1.66528 9.58297V14.9996C1.66528 16.1502 2.59802 17.083 3.74862 17.083C4.89921 17.083 5.83195 16.1502 5.83195 14.9996V6.24963Z" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        opacity="0.4" 
        d="M8.74854 6.66632H15.4152M8.74854 9.99965H10.8319M15.4152 9.99965H13.3319M8.74854 13.333H10.8319M15.4152 13.333H13.3319" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M13.3319 2.91632H9.1652C8.39023 2.91632 8.00274 2.91632 7.68482 3.00151C6.82209 3.23267 6.14822 3.90654 5.91705 4.76927C5.83187 5.08719 5.83187 5.47468 5.83187 6.24965V14.9997C5.83187 16.1502 4.89913 17.083 3.74854 17.083H13.3319C15.6889 17.083 16.8674 17.083 17.5996 16.3508C18.3319 15.6185 18.3319 14.44 18.3319 12.083V7.91632C18.3319 5.5593 18.3319 4.38079 17.5996 3.64855C16.8674 2.91632 15.6889 2.91632 13.3319 2.91632Z" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NewsIcon;
