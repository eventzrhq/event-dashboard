import React from "react";

const PhoneIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => {
  return (
    <svg 
      width="17" 
      height="16" 
      viewBox="0 0 17 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M3.8335 6.00004C3.8335 3.80015 3.8335 2.70021 4.51691 2.01679C5.20033 1.33337 6.30027 1.33337 8.50016 1.33337C10.7001 1.33337 11.8 1.33337 12.4834 2.01679C13.1668 2.70021 13.1668 3.80015 13.1668 6.00004V10C13.1668 12.1999 13.1668 13.2999 12.4834 13.9833C11.8 14.6667 10.7001 14.6667 8.50016 14.6667C6.30027 14.6667 5.20033 14.6667 4.51691 13.9833C3.8335 13.2999 3.8335 12.1999 3.8335 10V6.00004Z" 
        stroke="currentColor" 
        strokeLinecap="round"
      />
      <path 
        d="M7.8335 12.6665H9.16683" 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M6.5 1.33325L6.55934 1.68926C6.68792 2.46078 6.75221 2.84654 7.01679 3.08128C7.29278 3.32615 7.6841 3.33325 8.5 3.33325C9.3159 3.33325 9.70721 3.32615 9.98321 3.08128C10.2478 2.84654 10.3121 2.46078 10.4407 1.68926L10.5 1.33325" 
        stroke="currentColor" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PhoneIcon;
