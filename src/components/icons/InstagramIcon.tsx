import React from "react";

interface InstagramIconProps {
  className?: string;
}

export const InstagramIcon: React.FC<InstagramIconProps> = ({ className }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.87451 9.00061C1.87451 5.64186 1.87451 3.96248 2.91794 2.91904C3.96138 1.87561 5.64076 1.87561 8.99951 1.87561C12.3582 1.87561 14.0376 1.87561 15.0811 2.91904C16.1245 3.96248 16.1245 5.64186 16.1245 9.00061C16.1245 12.3593 16.1245 14.0387 15.0811 15.0822C14.0376 16.1256 12.3582 16.1256 8.99951 16.1256C5.64076 16.1256 3.96138 16.1256 2.91794 15.0822C1.87451 14.0387 1.87451 12.3593 1.87451 9.00061Z"
        stroke="currentColor"
        strokeWidth="1.125"
        strokeLinejoin="round"
      />
      <path
        d="M12.375 9C12.375 10.864 10.864 12.375 9 12.375C7.13604 12.375 5.625 10.864 5.625 9C5.625 7.13604 7.13604 5.625 9 5.625C10.864 5.625 12.375 7.13604 12.375 9Z"
        stroke="currentColor"
        strokeWidth="1.125"
      />
      <path
        d="M13.1315 4.87439H13.124"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
