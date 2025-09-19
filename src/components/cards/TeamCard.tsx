import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";

const TeamCard = ({
  image,
  name,
  position,
  aosDelay,
}: {
  image: string;
  name: string;
  position: string;
  aosDelay: number;
}) => {
  return (
    <div
      className="rounded-4xl border border-border bg-light/60 py-6 px-11 group"
      data-aos="fade-up-sm"
      data-aos-delay={aosDelay}
    >
      <div className="overflow-hidden">
        {image && (
          <ImageFallback
            width={294}
            height={343}
            src={image}
            alt={name}
            className="w-full group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        )}
      </div>
      <div className="text-center mt-4">
        {name && (
          <p
            className="mb-1 text-white font-medium text-lg"
            dangerouslySetInnerHTML={markdownify(name)}
          />
        )}
        {position && (
          <p
            className="text-white/70"
            dangerouslySetInnerHTML={markdownify(position)}
          />
        )}
      </div>
    </div>
  );
};

export default TeamCard;
