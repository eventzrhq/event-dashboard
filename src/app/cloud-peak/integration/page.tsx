import IntegrationCard from "@/layouts/components/IntegrationCard";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import CallToAction from "@/layouts/partials/CallToAction";
import PageHeader from "@/layouts/partials/PageHeader";
import SeoMeta from "@/layouts/partials/SeoMeta";
import { Integration } from "@/types";

const IntegrationPage = () => {
  const integrationIndex = getListPage("integration/-index.md");

  const integrations = getSinglePage("integration");

  return (
    <>
      <SeoMeta {...integrationIndex.frontmatter} />
      <PageHeader
        title={integrationIndex.frontmatter.page_header!.title}
        subtitle={integrationIndex.frontmatter.page_header!.subtitle}
      />
      <section className="section">
        <div className="container">
          <div className="lg:px-20">
            <div className="grid lg:grid-cols-3 gap-6">
              {integrations &&
                integrations.length &&
                integrations.map((integration: Integration, index: number) => {
                  const { frontmatter } = integration;
                  const aosDelay = 100 * (index % 3);
                  return (
                    <IntegrationCard
                      key={integration.slug}
                      title={frontmatter.title}
                      desc={frontmatter.shortDesc}
                      logoSrc={frontmatter.logo}
                      link={integration.slug!}
                      aosDelay={aosDelay}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default IntegrationPage;
