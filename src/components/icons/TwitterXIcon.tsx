import React from "react";

interface TwitterXIconProps {
  className?: string;
}

export const TwitterXIcon: React.FC<TwitterXIconProps> = ({ className }) => {
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
        d="M2.25 15.75L7.9113 10.0887M7.9113 10.0887L2.25 2.25H6L10.0887 7.9113M7.9113 10.0887L12 15.75H15.75L10.0887 7.9113M15.75 2.25L10.0887 7.9113"
        stroke="currentColor"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
