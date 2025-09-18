import PrimaryArrowBtn from "@/layouts/components/PrimaryArrowBtn";
import ImageFallback from "@/layouts/helpers/ImageFallback";
import MDXContent from "@/layouts/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/layouts/partials/SeoMeta";

type StaticParams = () => { single: string }[];

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: StaticParams = () => {
  const integrations = getSinglePage("integration");
  const paths = integrations.map((integration) => ({
    single: integration.slug,
  }));

  return paths;
};

const IntegrationSingle = async (props: {
  params: Promise<{ single: string }>;
}) => {
  const params = await props.params;
  const integrations = getSinglePage("integration");
  const integration = integrations.filter(
    (page) => page.slug === params.single,
  )[0];
  const {
    title,
    meta_title,
    description,
    image,
    subtitle,
    logo,
    desc,
    button,
  } = integration.frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section-page-heading">
        <div className="container">
          <div className="lg:px-20">
            <div className="flex flex-col gap-6">
              <div
                className="flex items-center gap-x-4"
                data-aos="fade-up-sm"
                data-aos-delay="0"
              >
                <ImageFallback src={logo!} height={80} width={80} alt={title} />
                <div className="px-4 py-2 rounded-full bg-light inline-block">
                  <span className="text-white text-sm font-light">Browser</span>
                </div>
              </div>
              <div data-aos="fade-up-sm" data-aos-delay="100">
                {title && (
                  <h2
                    className="text-h3 mb-3"
                    dangerouslySetInnerHTML={markdownify(title)}
                  />
                )}
                {subtitle && (
                  <p
                    className="mb-6 text-lg font-medium text-white/70"
                    dangerouslySetInnerHTML={markdownify(subtitle)}
                  />
                )}
                {desc && (
                  <p
                    className="mb-8"
                    dangerouslySetInnerHTML={markdownify(desc)}
                  />
                )}
                {button && button.enable && (
                  <PrimaryArrowBtn label={button.label} link={button.link} />
                )}
              </div>
            </div>

            <div
              className="content mt-12"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              <MDXContent content={integration.content} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntegrationSingle;
