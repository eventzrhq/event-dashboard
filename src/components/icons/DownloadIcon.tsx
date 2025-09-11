interface DownloadIconProps {
  className?: string;
}

export const DownloadIcon = ({ className = "w-5 h-5" }: DownloadIconProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.5 11.666L2.69487 12.2181C3.45333 14.3671 3.83256 15.4416 4.69785 16.0538C5.56313 16.666 6.70258 16.666 8.98147 16.666H11.0185C13.2974 16.666 14.4369 16.666 15.3022 16.0538C16.1674 15.4416 16.5467 14.3671 17.3051 12.2181L17.5 11.666"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        opacity="0.4"
        d="M9.99996 11.666V3.33264M9.99996 11.666C9.41644 11.666 8.32623 10.0041 7.91663 9.58264M9.99996 11.666C10.5835 11.666 11.6737 10.0041 12.0833 9.58264"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
