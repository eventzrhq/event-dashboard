import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";

const ChangelogCard = ({
  title,
  version,
  desc,
  image,
  imageAlt,
}: {
  title: string;
  version: string;
  desc: string;
  image: string;
  imageAlt: string;
}) => {
  return (
    <div className="p-6 rounded-4xl border border-border" data-aos="fade-up-sm">
      <div className="flex flex-col lg:flex-row gap-10 max-w-[500px] lg:max-w-none mx-auto">
        <div className="lg:w-[45%] px-0">
          <div className="rounded-3xl overflow-hidden border border-border bg-light/50 px-10 lg:px-16 py-6">
            <ImageFallback
              src={image}
              alt={imageAlt}
              width={360}
              height={336}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:w-[55%] px-0">
          <div className="flex flex-col items-start justify-center h-full">
            {version && (
              <span className="h-10 px-4 text-sm font-medium bg-secondary rounded-full text-text-dark grid place-items-center">
                Version {version}
              </span>
            )}
            <h2
              className="text-h4 mt-8 mb-4 col-10"
              dangerouslySetInnerHTML={markdownify(title)}
            />
            <p dangerouslySetInnerHTML={markdownify(desc)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangelogCard;
