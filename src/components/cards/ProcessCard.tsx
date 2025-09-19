import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import SvgGrowthUpward from "@/components/svgs/SvgGrowthUpward";

const ProcessCard = ({
  imageSrc,
  imageAlt,
  isStatsEnable,
  percentage,
  growthRate,
  desc,
}: {
  imageSrc: string;
  imageAlt: string;
  isStatsEnable: boolean;
  percentage: string;
  growthRate: string;
  desc: string;
}) => {
  return (
    <div className="inside-shadow border border-border shadow-shadow/70 p-10 rounded-4xl">
      <div className="flex flex-col gap-y-4 max-w-[350px] mx-auto">
        <ImageFallback
          width={350}
          height={245}
          src={imageSrc}
          alt={imageAlt}
          className="w-full"
          loading="lazy"
        />
        {isStatsEnable && (
          <div className="p-4 rounded-2xl bg-light w-full">
            <div className="flex items-center gap-x-5 mb-1">
              <h3 dangerouslySetInnerHTML={markdownify(percentage)} />
              <div className="flex items-center gap-x-1">
                <div className="text-primary">
                  <SvgGrowthUpward />
                </div>
                <span
                  className="text-white text-sm font-semibold"
                  dangerouslySetInnerHTML={markdownify(growthRate)}
                />
              </div>
            </div>
            <p dangerouslySetInnerHTML={markdownify(desc)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessCard;
