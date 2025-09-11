interface CalendarIconProps {
  className?: string;
}

export const CalendarIcon = ({ className = "w-5 h-5" }: CalendarIconProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.9999 1.66672V3.33338M4.99994 1.66672V3.33338"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M8.33327 14.1667L8.33326 11.1227C8.33326 10.9629 8.21932 10.8334 8.07876 10.8334H7.49994M11.358 14.1667L12.4868 11.1243C12.5395 10.9821 12.4273 10.8334 12.2672 10.8334H10.8333"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M2.08325 10.2027C2.08325 6.57166 2.08325 4.75612 3.12668 3.62808C4.17012 2.50005 5.84949 2.50005 9.20825 2.50005H10.7916C14.1503 2.50005 15.8297 2.50005 16.8732 3.62808C17.9166 4.75612 17.9166 6.57166 17.9166 10.2027V10.6307C17.9166 14.2618 17.9166 16.0773 16.8732 17.2053C15.8297 18.3334 14.1503 18.3334 10.7916 18.3334H9.20825C5.84949 18.3334 4.17012 18.3334 3.12668 17.2053C2.08325 16.0773 2.08325 14.2618 2.08325 10.6307V10.2027Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M4.99994 6.66672H14.9999"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
