import React from 'react';

interface StorageUsedIconProps {
  className?: string;
}

const StorageUsedIcon: React.FC<StorageUsedIconProps> = ({ className = "w-5 h-5" }) => {
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
        d="M3.36426 10.449L8.31343 5.49979C9.47996 4.33326 10.0632 3.75 10.788 3.75C11.5128 3.75 12.0961 4.33326 13.2626 5.49979L14.4999 6.73709C15.6664 7.90361 16.2497 8.48688 16.2497 9.21167C16.2497 9.93646 15.6664 10.5197 14.4999 11.6862L9.55072 16.6354C7.84238 18.3438 5.07261 18.3438 3.36426 16.6354C1.65592 14.9271 1.65592 12.1573 3.36426 10.449Z" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M7.08301 14.166C7.08301 13.4757 6.52336 12.916 5.83301 12.916C5.14265 12.916 4.58301 13.4757 4.58301 14.166C4.58301 14.8564 5.14265 15.416 5.83301 15.416C6.52336 15.416 7.08301 14.8564 7.08301 14.166Z" 
        stroke="currentColor" 
        strokeWidth="1.25"
      />
      <path 
        opacity="0.4" 
        d="M12.083 4.45732L13.2357 3.30464C14.0508 2.48957 14.4583 2.08203 14.9647 2.08203C15.4711 2.08203 15.8787 2.48957 16.6937 3.30464C17.5088 4.11971 17.9163 4.52724 17.9163 5.03366C17.9163 5.54008 17.5088 5.94761 16.6937 6.76268L15.5411 7.91536" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StorageUsedIcon;


