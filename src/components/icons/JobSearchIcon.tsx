import React from "react";

const JobSearchIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Briefcase body */}
      <path 
        d="M2.5 6.66667C2.5 5.19391 2.5 4.45753 2.87229 4.08524C3.24458 3.71295 3.98096 3.71295 5.45372 3.71295H14.5463C16.019 3.71295 16.7554 3.71295 17.1277 4.08524C17.5 4.45753 17.5 5.19391 17.5 6.66667V14.1667C17.5 15.6394 17.5 16.3758 17.1277 16.7481C16.7554 17.1204 16.019 17.1204 14.5463 17.1204H5.45372C3.98096 17.1204 3.24458 17.1204 2.87229 16.7481C2.5 16.3758 2.5 15.6394 2.5 14.1667V6.66667Z" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Briefcase handle */}
      <path 
        d="M6.66667 3.71295V2.5C6.66667 2.03976 6.66667 1.80964 6.74732 1.61697C6.82029 1.44324 6.94324 1.32029 7.11697 1.24732C7.30964 1.16667 7.53976 1.16667 8 1.16667H12C12.4602 1.16667 12.6904 1.16667 12.883 1.24732C13.0568 1.32029 13.1797 1.44324 13.2527 1.61697C13.3333 1.80964 13.3333 2.03976 13.3333 2.5V3.71295" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Search magnifying glass */}
      <circle 
        cx="13.5" 
        cy="13.5" 
        r="2.5" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        opacity="0.6"
      />
      <path 
        d="M15.5 15.5L17.5 17.5" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        opacity="0.6"
      />
      {/* Briefcase lines */}
      <path 
        d="M6.66667 8.33333H13.3333" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        opacity="0.4"
      />
      <path 
        d="M6.66667 11.6667H10" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        opacity="0.4"
      />
    </svg>
  );
};

export default JobSearchIcon;
