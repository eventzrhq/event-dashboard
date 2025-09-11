import React from 'react';

interface BoxIconProps {
  className?: string;
}

const BoxIcon: React.FC<BoxIconProps> = ({ className = "w-5 h-5" }) => {
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
        d="M5.83325 2.08333C4.66049 2.22113 3.85348 2.5124 3.24262 3.12802C2.08325 4.29645 2.08325 6.17701 2.08325 9.93813C2.08325 13.6992 2.08325 15.5798 3.24262 16.7482C4.40199 17.9167 6.26797 17.9167 9.99992 17.9167C13.7319 17.9167 15.5978 17.9167 16.7572 16.7482C17.9166 15.5798 17.9166 13.6992 17.9166 9.93813C17.9166 6.17701 17.9166 4.29645 16.7572 3.12802C16.1464 2.5124 15.3393 2.22113 14.1666 2.08333" 
        stroke="currentColor" 
        strokeWidth="1.22449" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        opacity="0.4" 
        d="M7.9165 6.66675C8.32611 7.08816 9.41631 8.75008 9.99984 8.75008M12.0832 6.66675C11.6736 7.08816 10.5834 8.75008 9.99984 8.75008M9.99984 8.75008V2.08341" 
        stroke="currentColor" 
        strokeWidth="1.22449" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M17.9166 11.2501H13.8119C13.1101 11.2501 12.5587 11.8364 12.2495 12.4561C11.9135 13.1293 11.2406 13.7501 9.99992 13.7501C8.75919 13.7501 8.08636 13.1293 7.75037 12.4561C7.4411 11.8364 6.88973 11.2501 6.18797 11.2501H2.08325" 
        stroke="currentColor" 
        strokeWidth="1.22449" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BoxIcon;
