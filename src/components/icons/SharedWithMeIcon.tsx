import React from 'react';

interface SharedWithMeIconProps {
  className?: string;
}

const SharedWithMeIcon: React.FC<SharedWithMeIconProps> = ({ className = "w-5 h-5" }) => {
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
        d="M17.5 5.41602C17.5 6.79673 16.3807 7.91602 15 7.91602C13.6193 7.91602 12.5 6.79673 12.5 5.41602C12.5 4.0353 13.6193 2.91602 15 2.91602C16.3807 2.91602 17.5 4.0353 17.5 5.41602Z" 
        stroke="currentColor" 
        strokeWidth="1.25"
      />
      <path 
        d="M7.5 10C7.5 11.3807 6.38071 12.5 5 12.5C3.61929 12.5 2.5 11.3807 2.5 10C2.5 8.61929 3.61929 7.5 5 7.5C6.38071 7.5 7.5 8.61929 7.5 10Z" 
        stroke="currentColor" 
        strokeWidth="1.25"
      />
      <path 
        d="M17.5 14.584C17.5 15.9647 16.3807 17.084 15 17.084C13.6193 17.084 12.5 15.9647 12.5 14.584C12.5 13.2033 13.6193 12.084 15 12.084C16.3807 12.084 17.5 13.2033 17.5 14.584Z" 
        stroke="currentColor" 
        strokeWidth="1.25"
      />
      <path 
        opacity="0.4" 
        d="M7.27393 8.95854L12.6906 6.45898M7.27393 11.0423L12.6906 13.5419" 
        stroke="currentColor" 
        strokeWidth="1.25"
      />
    </svg>
  );
};

export default SharedWithMeIcon;


