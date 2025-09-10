interface AppStoreIconProps {
  className?: string;
}

export const AppStoreIcon = ({ className = "w-4 h-4" }: AppStoreIconProps) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
    </svg>
  );
};
