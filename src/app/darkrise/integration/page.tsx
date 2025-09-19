import { getListPage } from "@/darkrise-lib/contentParser";
import CallToAction2 from "@/darkrise-layouts/partials/CallToAction2";
import IntegrationCardLayout from "@/darkrise-layouts/partials/IntegrationCardLayout";
import IntegrationSection from "@/darkrise-layouts/partials/IntegrationSection";
import SeoMeta from "@/darkrise-layouts/partials/SeoMeta";
import { RegularPage } from "@/darkrise-types";

// for all regular pages
const IntegrationPage = () => {
  const { title, description, meta_title, image }: RegularPage["frontmatter"] =
    getListPage(`integration/_index.md`).frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <IntegrationSection
        largeHeading
        hideBackground
        fluidContainer
        hideCTAButton
        hideHeadingOverlay
      />
      <IntegrationCardLayout />
      <CallToAction2 />
    </>
  );
};

export default IntegrationPage;
