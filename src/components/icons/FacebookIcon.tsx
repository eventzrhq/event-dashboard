import React from "react";

interface FacebookIconProps {
  className?: string;
}

export const FacebookIcon: React.FC<FacebookIconProps> = ({ className }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.63685 7.74936C3.90353 7.74936 3.75049 7.89329 3.75049 8.58269V9.83271C3.75049 10.5222 3.90353 10.666 4.63685 10.666H6.40958V15.6661C6.40958 16.3555 6.56262 16.4994 7.29594 16.4994H9.06866C9.80201 16.4994 9.95501 16.3555 9.95501 15.6661V10.666H11.9455C12.5017 10.666 12.645 10.5644 12.7978 10.0617L13.1777 8.81166C13.4394 7.95044 13.2781 7.74936 12.3254 7.74936H9.95501V5.66606C9.95501 5.20582 10.3518 4.83272 10.8414 4.83272H13.3641C14.0974 4.83272 14.2505 4.68883 14.2505 3.99939V2.33272C14.2505 1.64328 14.0974 1.49939 13.3641 1.49939H10.8414C8.39374 1.49939 6.40958 3.36487 6.40958 5.66606V7.74936H4.63685Z"
        stroke="currentColor"
        strokeWidth="1.125"
        strokeLinejoin="round"
      />
    </svg>
  );
};
