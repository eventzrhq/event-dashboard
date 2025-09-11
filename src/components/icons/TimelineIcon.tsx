interface TimelineIconProps {
  className?: string;
}

export const TimelineIcon = ({ className = "w-5 h-5" }: TimelineIconProps) => {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.3334 9C17.3334 4.39762 13.6024 0.666664 9.00002 0.666664C4.39765 0.666664 0.666687 4.39762 0.666687 9C0.666687 13.6024 4.39765 17.3333 9.00002 17.3333C13.6024 17.3333 17.3334 13.6024 17.3334 9Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        opacity="0.4"
        d="M9.33439 5.91489L11.7677 5.1038C12.5062 4.85762 12.8755 4.73453 13.0704 4.92945C13.2653 5.12438 13.1422 5.49364 12.896 6.23218L12.085 8.66544C11.6655 9.92394 11.4557 10.5532 11.0044 11.0044C10.5532 11.4557 9.92394 11.6655 8.66544 12.085L6.23218 12.896C5.49364 13.1422 5.12438 13.2653 4.92945 13.0704C4.73453 12.8755 4.85762 12.5062 5.1038 11.7677L5.91489 9.33439C6.33438 8.0759 6.54413 7.44665 6.99539 6.99539C7.44665 6.54413 8.0759 6.33438 9.33439 5.91489Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M8.99994 8.99992L8.99465 9.00521"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
