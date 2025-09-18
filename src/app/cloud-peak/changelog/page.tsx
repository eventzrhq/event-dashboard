import ChangelogCard from "@/layouts/components/ChangelogCard";
import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/layouts/partials/CallToAction";
import PageHeader from "@/layouts/partials/PageHeader";
import SeoMeta from "@/layouts/partials/SeoMeta";
import { ChangelogPage } from "@/types";

const Changelog = () => {
  const indexData: ChangelogPage = getListPage("changelog/-index.md");
  const { page_header, changelogs } = indexData.frontmatter;

  return (
    <>
      <SeoMeta {...indexData.frontmatter} />

      <PageHeader title={page_header.title} subtitle={page_header.subtitle} />
      <section className="section">
        <div className="container">
          <div
            className="flex flex-col gap-10"
            data-aos="fade-up-sm"
            data-aos-delay="150"
          >
            {changelogs.map((changelog, i: number) => (
              <ChangelogCard key={i} {...changelog} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Changelog;
