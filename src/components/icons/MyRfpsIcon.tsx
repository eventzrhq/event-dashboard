interface MyRfpsIconProps {
  className?: string;
}

export const MyRfpsIcon = ({ className = "w-5 h-5" }: MyRfpsIconProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.05 8.70002L17.2333 12.1834C16.5333 15.1917 15.15 16.4083 12.55 16.1583C12.1333 16.125 11.6833 16.05 11.2 15.9334L9.79999 15.6C6.32499 14.775 5.24999 13.0584 6.06665 9.57502L6.88332 6.08335C7.04999 5.37502 7.24999 4.75835 7.49999 4.25002C8.47499 2.23335 10.1333 1.69168 12.9167 2.35002L14.3083 2.67502C17.8 3.49168 18.8667 5.21668 18.05 8.70002Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M12.55 16.1583C12.0333 16.5083 11.3833 16.8 10.5917 17.0583L9.27501 17.4917C5.96668 18.5583 4.22501 17.6667 3.15001 14.3583L2.08334 11.0667C1.01668 7.75833 1.90001 6.00833 5.20834 4.94167L6.52501 4.50833C6.86668 4.4 7.19168 4.30833 7.50001 4.25C7.25001 4.75833 7.05001 5.375 6.88334 6.08333L6.06668 9.575C5.25001 13.0583 6.32501 14.775 9.80001 15.6L11.2 15.9333C11.6833 16.05 12.1333 16.125 12.55 16.1583Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M10.5334 7.10834L14.575 8.13334"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M9.71667 10.3333L12.1333 10.95"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
