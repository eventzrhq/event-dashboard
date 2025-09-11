import React from 'react';

interface HeartIconProps {
  className?: string;
}

const HeartIcon: React.FC<HeartIconProps> = ({ className = "w-5 h-5" }) => {
  return (
    <svg 
      width="18" 
      height="16" 
      viewBox="0 0 18 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >

<path fill-rule="evenodd" clip-rule="evenodd" d="M1.43477 8.37048C0.540608 5.57882 1.58644 2.10798 4.51727 1.16465C6.05894 0.66715 7.96144 1.08215 9.04227 2.57298C10.0614 1.02715 12.0189 0.670483 13.5589 1.16465C16.4889 2.10798 17.5406 5.57882 16.6473 8.37048C15.2556 12.7955 10.3998 15.1005 9.04227 15.1005C7.68561 15.1005 2.87311 12.8471 1.43477 8.37048Z" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.1562 4.30469C13.1621 4.40802 13.7913 5.20552 13.7538 6.32302" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  );
};

export default HeartIcon;
