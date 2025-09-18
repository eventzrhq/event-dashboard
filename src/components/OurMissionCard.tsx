import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";

const OurMissionCard = ({
  aosDelay,
  title,
  description,
  imageSrc,
}: {
  aosDelay: number;
  title: string;
  description: string;
  imageSrc: string;
}) => {
  return (
    <div data-aos="fade-up-sm" data-aos-delay={aosDelay}>
      <div className="border border-border inside-shadow p-10 rounded-4xl h-full flex flex-col justify-between">
        <div className="mb-10">
          <h2
            className="mb-4 text-h4"
            dangerouslySetInnerHTML={markdownify(title)}
          />
          <p dangerouslySetInnerHTML={markdownify(description)} />
        </div>
        {imageSrc && (
          <ImageFallback
            src={imageSrc}
            loading={"lazy"}
            width={520}
            height={480}
            className="w-full"
            alt="@@title"
          />
        )}
      </div>
    </div>
  );
};

export default OurMissionCard;
