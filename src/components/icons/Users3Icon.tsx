import React from 'react';

interface Users3IconProps {
  className?: string;
}

const Users3Icon: React.FC<Users3IconProps> = ({ className = "w-5 h-5" }) => {
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
        d="M14.9065 9.08069C16.069 8.91735 16.964 7.92069 16.9665 6.71319C16.9665 5.52319 16.099 4.53652 14.9615 4.34985" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        opacity="0.4" 
        d="M16.4404 11.8752C17.5663 12.0436 18.3521 12.4377 18.3521 13.2502C18.3521 13.8094 17.9821 14.1727 17.3838 14.4011" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M9.90553 12.2199C7.2272 12.2199 4.9397 12.6257 4.9397 14.2466C4.9397 15.8666 7.21303 16.2841 9.90553 16.2841C12.5839 16.2841 14.8705 15.8824 14.8705 14.2607C14.8705 12.6391 12.598 12.2199 9.90553 12.2199Z" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M9.90567 9.90663C11.6632 9.90663 13.0882 8.48246 13.0882 6.72413C13.0882 4.96663 11.6632 3.54163 9.90567 3.54163C8.14817 3.54163 6.72317 4.96663 6.72317 6.72413C6.7165 8.47579 8.13067 9.90079 9.88233 9.90663H9.90567Z" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        opacity="0.4" 
        d="M4.90399 9.08069C3.74066 8.91735 2.84649 7.92069 2.84399 6.71319C2.84399 5.52319 3.71149 4.53652 4.84899 4.34985" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        opacity="0.4" 
        d="M3.36992 11.8752C2.24409 12.0436 1.45825 12.4377 1.45825 13.2502C1.45825 13.8094 1.82825 14.1727 2.42659 14.4011" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Users3Icon;
