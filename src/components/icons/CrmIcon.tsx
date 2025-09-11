interface CrmIconProps {
  className?: string;
}

export const CrmIcon = ({ className = "w-5 h-5" }: CrmIconProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.23399 12.747C3.21876 13.3613 0.556894 14.6155 2.17815 16.185C2.97012 16.9517 3.85217 17.5 4.96112 17.5H11.289C12.398 17.5 13.28 16.9517 14.072 16.185C15.6933 14.6155 13.0314 13.3613 12.0162 12.747C9.63548 11.3066 6.61468 11.3066 4.23399 12.747Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 5.83333C11.25 7.67428 9.75766 9.16667 7.91671 9.16667C6.07576 9.16667 4.58337 7.67428 4.58337 5.83333C4.58337 3.99238 6.07576 2.5 7.91671 2.5C9.75766 2.5 11.25 3.99238 11.25 5.83333Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        opacity="0.4"
        d="M14.1667 4.16667L18.3334 4.16667"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M14.1667 6.66667L18.3334 6.66667"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M16.6667 9.16667L18.3334 9.16667"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
