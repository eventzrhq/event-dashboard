import React from 'react';

interface UserPlusIconProps {
  className?: string;
}

const UserPlusIcon: React.FC<UserPlusIconProps> = ({ className = "w-5 h-5" }) => {
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
        d="M10.8846 19H5.88458C4.57695 19 3.53688 18.342 2.60302 17.422C0.691309 15.5386 3.83006 14.0335 5.02718 13.2964C6.80477 12.2018 8.88501 11.8004 10.8846 12.092C11.6102 12.1979 12.3168 12.3949 13 12.6833" 
        stroke="currentColor" 
        strokeWidth="1.22449" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M15 6C15 8.20914 13.2091 10 11 10C8.79086 10 7 8.20914 7 6C7 3.79086 8.79086 2 11 2C13.2091 2 15 3.79086 15 6Z" 
        stroke="currentColor" 
        strokeWidth="1.22449"
      />
      <path 
        opacity="0.4" 
        d="M16 19L16 13M13 16H19" 
        stroke="currentColor" 
        strokeWidth="1.22449" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default UserPlusIcon;
