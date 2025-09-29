interface ListIconProps {
  className?: string;
}

export const ListIcon = ({ className = "w-4 h-4" }: ListIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M6 3.33203L14 3.33203" stroke="currentColor" stroke-linecap="round" />
      <path
        d="M2 3.33203L3.33333 3.33203"
        stroke="currentColor"
        stroke-linecap="round"
      />
      <path d="M6 8L14 8" stroke="currentColor" stroke-linecap="round" />
      <path d="M2 8L3.33333 8" stroke="currentColor" stroke-linecap="round" />
      <path d="M6 12.6641L14 12.6641" stroke="currentColor" stroke-linecap="round" />
      <path
        d="M2 12.6641L3.33333 12.6641"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
};
