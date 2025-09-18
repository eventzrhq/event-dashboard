import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";

const TestimonialCard = ({
  quote,
  name,
  position,
  image,
  aosDelay,
}: {
  quote: string;
  name: string;
  position: string;
  image: string;
  aosDelay?: number;
}) => {
  return (
    <div data-aos="fade-up-sm" data-aos-delay={aosDelay || 0}>
      <div className="border border-border inside-shadow shadow-shadow/50 hover:shadow-shadow transition-shadow duration-500 rounded-4xl py-4 flex flex-col justify-between h-full">
        <div className="py-10 px-6">
          <blockquote className="text-white/80 leading-[1.813rem] bq">
            {quote}
          </blockquote>
        </div>
        <div className="p-6 border-t border-border/60">
          <div className="flex justify-between items-center">
            <div>
              <p
                className="text-white font-medium"
                dangerouslySetInnerHTML={markdownify(name)}
              />
              <p
                className="text-sm font-light text-white/60"
                dangerouslySetInnerHTML={markdownify(position)}
              />
            </div>
            <ImageFallback
              width={64}
              height={64}
              src={image}
              alt={name}
              loading="lazy"
              className="rounded-2xl w-16 h-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
