import React from 'react';

interface BuildingIconProps {
  className?: string;
}

const BuildingIcon: React.FC<BuildingIconProps> = ({ className = "w-5 h-5" }) => {
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
        d="M2.0835 10C2.0835 6.26809 2.0835 4.40212 3.24286 3.24274C4.40224 2.08337 6.26821 2.08337 10.0002 2.08337C13.7321 2.08337 15.5981 2.08337 16.7575 3.24274C17.9168 4.40212 17.9168 6.26809 17.9168 10C17.9168 13.732 17.9168 15.598 16.7575 16.7574C15.5981 17.9167 13.7321 17.9167 10.0002 17.9167C6.26821 17.9167 4.40224 17.9167 3.24286 16.7574C2.0835 15.598 2.0835 13.732 2.0835 10Z" 
        stroke="currentColor" 
        strokeWidth="1.25"
      />
      <path 
        d="M2.0835 7.5H17.9168" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinejoin="round"
      />
      <path 
        opacity="0.4" 
        d="M10.8335 10.8334H14.1668" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        opacity="0.4" 
        d="M10.8335 14.1666H12.5002" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M5.83301 5H5.84049" 
        stroke="currentColor" 
        strokeWidth="1.66667" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M9.1665 5H9.174" 
        stroke="currentColor" 
        strokeWidth="1.66667" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        opacity="0.4" 
        d="M7.5 7.5V17.9167" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BuildingIcon;
