import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";

const PrimaryArrowBtn = ({ label, link }: { label: string; link: string }) => {
  return (
    <Link
      className="btn btn-primary group flex items-center max-w-max gap-1"
      href={link}
    >
      <span dangerouslySetInnerHTML={markdownify(label)} />
      <div className="sr-only">Details</div>
      <div className="relative w-5 h-5 grid place-items-center overflow-hidden">
        <i className="-rotate-45 group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </i>

        <i className="-rotate-45 absolute top-full right-full group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-500 ease-out w-5 h-5 grid place-items-center">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </i>
      </div>
    </Link>
  );
};

export default PrimaryArrowBtn;
