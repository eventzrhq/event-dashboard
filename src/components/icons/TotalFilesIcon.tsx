import React from 'react';

interface TotalFilesIconProps {
  className?: string;
}

const TotalFilesIcon: React.FC<TotalFilesIconProps> = ({ className = "w-5 h-5" }) => {
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
        d="M13.333 14.166L7.49967 14.166" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M13.333 10.834L10.833 10.834" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M17.083 11.6673C17.083 14.81 17.083 16.3814 16.0457 17.3577C15.0083 18.334 13.3388 18.334 9.99967 18.334H9.35574C6.63806 18.334 5.27923 18.334 4.33557 17.6691C4.06519 17.4786 3.82516 17.2527 3.62276 16.9982C2.91634 16.1101 2.91634 14.8312 2.91634 12.2734V10.1522C2.91634 7.68286 2.91634 6.4482 3.30712 5.46211C3.93535 3.87684 5.26395 2.62639 6.94831 2.03511C7.99603 1.66732 9.30785 1.66732 11.9315 1.66732C13.4307 1.66732 14.1803 1.66732 14.779 1.87749C15.7415 2.21536 16.5007 2.9299 16.8597 3.83577C17.083 4.39925 17.083 5.10477 17.083 6.5158V11.6673Z" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinejoin="round"
      />
      <path 
        d="M2.91667 10C2.91667 8.46588 4.16032 7.22222 5.69444 7.22222C6.24926 7.22222 6.90336 7.31944 7.4428 7.1749C7.9221 7.04647 8.29647 6.6721 8.4249 6.1928C8.56944 5.65336 8.47222 4.99926 8.47222 4.44444C8.47222 2.91032 9.71588 1.66667 11.25 1.66667" 
        stroke="currentColor" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TotalFilesIcon;


