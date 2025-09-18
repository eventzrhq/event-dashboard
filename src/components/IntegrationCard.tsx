import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import RightArrowBtn from "./RightArrowBtn";

const IntegrationCard = ({
  title,
  desc,
  logoSrc,
  link,
  aosDelay,
}: {
  title: string;
  desc: string;
  logoSrc: string;
  link: string;
  aosDelay?: number;
}) => {
  return (
    <article data-aos="fade-up-sm" data-aos-delay={aosDelay || 0}>
      <div className="p-10 inside-shadow shadow-shadow/50 hover:shadow-shadow hover:bg-light/10 transition-all duration-500 rounded-4xl bg-light/10 flex flex-col justify-between gap-6 h-full">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <ImageFallback
              loading="eager"
              src={logoSrc}
              alt={title}
              width={60}
              height={60}
              className="max-w-[60px] w-full aspect-square"
            />
            <div className="px-4 py-2 rounded-full bg-tertiary/40">
              <span className="text-white text-sm font-light">Browser</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p
              className="font-semibold text-white capitalize"
              dangerouslySetInnerHTML={markdownify(title)}
            />
            <p dangerouslySetInnerHTML={markdownify(desc)} />
          </div>
        </div>
        <RightArrowBtn label="View Integration" link={"/integration/" + link} />
      </div>
    </article>
  );
};

export default IntegrationCard;
