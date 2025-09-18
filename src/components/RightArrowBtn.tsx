import Link from "next/link";

const RightArrowBtn = ({ link, label }: { link: string; label: string }) => {
  return (
    <Link
      href={link}
      className="group/arrowBtn flex items-center max-w-max gap-1 text-white cursor-pointer"
      aria-label={label}
    >
      <span className="font-medium">{label}</span>
      <div className="relative w-5 h-5 grid place-items-center overflow-hidden">
        <i className="group-hover/arrowBtn:translate-x-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
          </svg>
        </i>
        <i className="absolute top-0 right-full group-hover/arrowBtn:translate-x-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
          </svg>
        </i>
      </div>
    </Link>
  );
};

export default RightArrowBtn;
