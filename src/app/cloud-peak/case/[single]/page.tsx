import CaseStudyCard from "@/layouts/components/CaseStudyCard";
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
  const cases = getSinglePage("case");
  const paths = cases.map((caseStudy) => ({
    single: caseStudy.slug,
  }));

  return paths;
};

const IntegrationSingle = async (props: {
  params: Promise<{ single: string }>;
}) => {
  const params = await props.params;
  const cases = getSinglePage("case");
  const caseStudy = cases.filter((page) => page.slug === params.single)[0];
  const { title, meta_title, description, image, logo, desc, logoAlt } =
    caseStudy.frontmatter;

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
              <div>
                <h1
                  className="lg:text-[4.5rem] lg:leading-[1.2] mb-4"
                  data-aos="fade-up-sm"
                  data-aos-delay="0"
                  dangerouslySetInnerHTML={markdownify(title)}
                />
                <p
                  className="mb-14"
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                  dangerouslySetInnerHTML={markdownify(desc!)}
                />
                {logo && (
                  <div
                    className="case-banner"
                    data-aos="fade-up-sm"
                    data-aos-delay="150"
                  >
                    <ImageFallback
                      src={logo}
                      alt={logoAlt || title}
                      width={432}
                      height={123}
                      className="relative z-20"
                    />
                  </div>
                )}
              </div>
              <div className="content">
                <MDXContent content={caseStudy.content} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-h3 mb-14">Similar Case Studies Like this</h2>
          <div>
            <div className="grid lg:grid-cols-2 gap-6">
              {cases &&
                cases.length &&
                cases.slice(0, 4).map((c, i: number) => {
                  const { frontmatter } = c;
                  return (
                    <CaseStudyCard
                      key={i}
                      title={frontmatter.title}
                      subtitle={frontmatter.subtitle}
                      desc={frontmatter.desc}
                      logo={frontmatter.logo}
                      logoAlt={frontmatter.logoAlt}
                      slug={c.slug}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntegrationSingle;
