import React from 'react';

interface AiChipIconProps {
  className?: string;
}

const AiChipIcon: React.FC<AiChipIconProps> = ({ className = "w-5 h-5" }) => {
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
        d="M3.3335 10C3.3335 6.85734 3.3335 5.286 4.3098 4.30968C5.28612 3.33337 6.85746 3.33337 10.0002 3.33337C13.1428 3.33337 14.7142 3.33337 15.6905 4.30968C16.6668 5.286 16.6668 6.85734 16.6668 10C16.6668 13.1427 16.6668 14.7141 15.6905 15.6904C14.7142 16.6667 13.1428 16.6667 10.0002 16.6667C6.85746 16.6667 5.28612 16.6667 4.3098 15.6904C3.3335 14.7141 3.3335 13.1427 3.3335 10Z" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinejoin="round"
      />
      <path 
        opacity="0.4" 
        d="M6.25 12.5L7.78491 7.89528C7.86359 7.65923 8.0845 7.5 8.33333 7.5C8.58217 7.5 8.80308 7.65923 8.88175 7.89528L10.4167 12.5M7.08333 10.8333H9.58333" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        opacity="0.4" 
        d="M12.9165 7.5V12.5" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M6.6665 1.66663V3.33329M13.3332 1.66663V3.33329M9.99984 1.66663V3.33329M6.6665 16.6666V18.3333M9.99984 16.6666V18.3333M13.3332 16.6666V18.3333M18.3332 13.3333H16.6665M3.33317 6.66663H1.6665M3.33317 13.3333H1.6665M3.33317 9.99996H1.6665M18.3332 6.66663H16.6665M18.3332 9.99996H16.6665" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AiChipIcon;
