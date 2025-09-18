import CaseStudyCard from "@/layouts/components/CaseStudyCard";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import CallToAction from "@/layouts/partials/CallToAction";
import PageHeader from "@/layouts/partials/PageHeader";
import SeoMeta from "@/layouts/partials/SeoMeta";
import { type Case } from "@/types";

const IntegrationPage = () => {
  const indexData = getListPage("case/-index.md");

  const cases: Case[] = getSinglePage("case");

  return (
    <>
      <SeoMeta {...indexData.frontmatter} />
      <PageHeader
        title={indexData.frontmatter.page_header!.title}
        subtitle={indexData.frontmatter.page_header!.subtitle}
      />
      <section className="section">
        <div className="container">
          <div
            className="grid lg:grid-cols-2 gap-6"
            data-aos="fade-up-sm"
            data-aos-delay="150"
          >
            {cases &&
              cases.length &&
              cases.map((c, i: number) => {
                const { frontmatter } = c;
                return (
                  <CaseStudyCard
                    key={i}
                    title={frontmatter.title}
                    subtitle={frontmatter.subtitle}
                    desc={frontmatter.desc}
                    logo={frontmatter.logo}
                    logoAlt={frontmatter.logoAlt}
                    slug={c.slug!}
                  />
                );
              })}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default IntegrationPage;
