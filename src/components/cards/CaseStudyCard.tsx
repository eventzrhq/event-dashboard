import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import ArrowBtn from "@/components/buttons/ArrowBtn";

const CaseStudyCard = ({
  title,
  subtitle,
  desc,
  logo,
  logoAlt,
  slug,
}: {
  title: string;
  subtitle: string;
  desc: string;
  logo: string;
  logoAlt: string;
  slug: string;
}) => {
  return (
    <article className="inside-shadow shadow-shadow/50 hover:shadow-shadow hover:bg-light/10 transition-all duration-500 rounded-4xl p-8 lg:p-10">
      <div className="flex flex-col justify-between gap-8 h-full">
        <div>
          <ImageFallback
            src={logo}
            alt={logoAlt}
            width={180}
            height={44}
            className="mb-12"
          />
          <h4 className="mb-2" dangerouslySetInnerHTML={markdownify(title)} />
          <p className="mb-6" dangerouslySetInnerHTML={markdownify(subtitle)} />
          <p dangerouslySetInnerHTML={markdownify(desc)} />
        </div>
        <ArrowBtn label="Read Full Case Study" link={"/case/" + slug} />
      </div>
    </article>
  );
};

export default CaseStudyCard;
