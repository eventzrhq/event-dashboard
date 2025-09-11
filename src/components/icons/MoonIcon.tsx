interface MoonIconProps {
  className?: string;
}

export const MoonIcon = ({ className = "w-4 h-4" }: MoonIconProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.4"
        d="M17.917 11.7313C16.9172 12.2651 15.7754 12.5677 14.5629 12.5677C10.6246 12.5677 7.43188 9.37504 7.43188 5.43669C7.43188 4.22419 7.7345 3.08238 8.26831 2.08264C4.72333 2.91346 2.08362 6.09525 2.08362 9.89358C2.08362 14.3242 5.67537 17.916 10.106 17.916C13.9043 17.916 17.0861 15.2763 17.917 11.7313Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.917 11.7313C17.0861 15.2763 13.9043 17.916 10.106 17.916C5.67537 17.916 2.08362 14.3242 2.08362 9.89358C2.08362 6.09525 4.72333 2.91346 8.26831 2.08264"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
