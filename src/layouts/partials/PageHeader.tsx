import { markdownify } from "@/lib/utils/textConverter";

const PageHeader = ({
  title,
  subtitle,
  lastModified,
  desc,
}: {
  title: string;
  subtitle?: string;
  lastModified?: string;
  desc?: string;
}) => {
  return (
    <section className="section-page-heading">
      <div className="container text-center">
        <div className="lg:px-8 flex flex-col items-center lg:col-10 mx-auto gap-4">
          {title && (
            <h1
              className="lg:text-[4.5rem] lg:leading-[1.2] capitalize"
              data-aos="fade-up-sm"
              dangerouslySetInnerHTML={markdownify(title)}
            />
          )}
          {desc && (
            <p
              className="text-lg text-white/70 text-balance"
              data-aos="fade-up-sm"
              data-aos-delay="100"
              dangerouslySetInnerHTML={markdownify(desc)}
            />
          )}
          {subtitle && (
            <p
              className="xl:col-10 mx-auto text-balance"
              data-aos="fade-up-sm"
              data-aos-delay="100"
              dangerouslySetInnerHTML={markdownify(subtitle)}
            />
          )}
          {lastModified && (
            <p
              className="text-white/70"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              Last update: {lastModified}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
