interface MyZarsIconProps {
  className?: string;
}

export const MyZarsIcon = ({ className = "w-5 h-5" }: MyZarsIconProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.1654 1.66699V3.33366M9.9987 1.66699V3.33366M5.83203 1.66699V3.33366"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.91797 8.33333C2.91797 5.58347 2.91797 4.20854 3.77224 3.35427C4.62651 2.5 6.00144 2.5 8.7513 2.5H11.2513C14.0012 2.5 15.3761 2.5 16.2304 3.35427C17.0846 4.20854 17.0846 5.58347 17.0846 8.33333V12.5C17.0846 15.2499 17.0846 16.6248 16.2304 17.4791C15.3761 18.3333 14.0012 18.3333 11.2513 18.3333H8.7513C6.00144 18.3333 4.62651 18.3333 3.77224 17.4791C2.91797 16.6248 2.91797 15.2499 2.91797 12.5V8.33333Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M6.66797 12.4997H10.0013M6.66797 8.33301H13.3346"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
};
