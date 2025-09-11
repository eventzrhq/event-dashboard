interface VaultIconProps {
  className?: string;
}

export const VaultIcon = ({ className = "w-5 h-5" }: VaultIconProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.8334 1.66667H9.16669C5.63115 1.66667 3.86339 1.66667 2.76504 2.76502C1.66669 3.86337 1.66669 5.63114 1.66669 9.16667C1.66669 12.7022 1.66669 14.47 2.76504 15.5683C3.86339 16.6667 5.63115 16.6667 9.16669 16.6667H10.8334C14.3689 16.6667 16.1367 16.6667 17.235 15.5683C18.3334 14.47 18.3334 12.7022 18.3334 9.16667C18.3334 5.63114 18.3334 3.86337 17.235 2.76502C16.1367 1.66667 14.3689 1.66667 10.8334 1.66667Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M14.1667 12.5C15.0001 12.0577 15.0001 11.3457 15.0001 9.92184V8.41157C15.0001 6.98767 15.0001 6.27572 14.1667 5.83337"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        opacity="0.4"
        d="M15.0001 18.3334V16.6667"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        opacity="0.4"
        d="M5.00006 18.3334V16.6667"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        opacity="0.4"
        d="M7.91659 10.8334C8.84659 10.8334 9.6005 10.0872 9.6005 9.16671C9.6005 8.24623 8.84659 7.50004 7.91659 7.50004M7.91659 10.8334C6.98659 10.8334 6.23268 10.0872 6.23268 9.16671C6.23268 8.24623 6.98659 7.50004 7.91659 7.50004M7.91659 10.8334V12.5M7.91659 7.50004V5.83337M6.45829 10L4.99997 10.8334M10.8332 7.50004L9.37491 8.33337M9.375 10L10.8333 10.8334M5.00006 7.50004L6.45837 8.33337"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
