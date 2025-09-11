import React from 'react';

interface UserSwitchIconProps {
  className?: string;
}

const UserSwitchIcon: React.FC<UserSwitchIconProps> = ({ className = "w-5 h-5" }) => {
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
        d="M3.15863 7.53123C2.56914 7.85032 1.02354 8.50188 1.96491 9.31721C2.42476 9.71548 2.93692 10.0003 3.58083 10.0003H7.25511C7.89901 10.0003 8.41117 9.71548 8.87103 9.31721C9.8124 8.50188 8.2668 7.85032 7.67731 7.53123C6.29497 6.78295 4.54096 6.78295 3.15863 7.53123Z" 
        stroke="currentColor" 
        strokeWidth="1.25"
      />
      <path 
        d="M7.29297 3.56093C7.29297 4.60693 6.4535 5.45487 5.41797 5.45487C4.38244 5.45487 3.54297 4.60693 3.54297 3.56093C3.54297 2.51494 4.38244 1.66699 5.41797 1.66699C6.4535 1.66699 7.29297 2.51494 7.29297 3.56093Z" 
        stroke="currentColor" 
        strokeWidth="1.25"
      />
      <path 
        opacity="0.4" 
        d="M3.33203 12.5C3.33203 15.2643 5.56775 17.5 8.33203 17.5L7.61775 16.0714" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        opacity="0.4" 
        d="M16.668 7.5C16.668 4.73572 14.4323 2.5 11.668 2.5L12.3823 3.92857" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12.3227 15.8642C11.7332 16.1833 10.1876 16.8349 11.129 17.6502C11.5888 18.0485 12.101 18.3333 12.7449 18.3333H16.4192C17.0631 18.3333 17.5752 18.0485 18.0351 17.6502C18.9765 16.8349 17.4309 16.1833 16.8414 15.8642C15.459 15.116 13.705 15.116 12.3227 15.8642Z" 
        stroke="currentColor" 
        strokeWidth="1.25"
      />
      <path 
        d="M16.457 11.8939C16.457 12.9399 15.6176 13.7879 14.582 13.7879C13.5465 13.7879 12.707 12.9399 12.707 11.8939C12.707 10.8479 13.5465 10 14.582 10C15.6176 10 16.457 10.8479 16.457 11.8939Z" 
        stroke="currentColor" 
        strokeWidth="1.25"
      />
    </svg>
  );
};

export default UserSwitchIcon;
