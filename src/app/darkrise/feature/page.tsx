import FeaturedTestimonial from "@/darkrise-layouts/components/FeaturedTestimonial";
import { getListPage } from "@/darkrise-lib/contentParser";
import CallToAction2 from "@/darkrise-layouts/partials/CallToAction2";
import FeaturesGrid from "@/darkrise-layouts/partials/FeaturesGrid";
import FeaturesStickyLayout from "@/darkrise-layouts/partials/FeaturesStickyLayout";
import SeoMeta from "@/darkrise-layouts/partials/SeoMeta";

const page = () => {
  const featureIndex = getListPage("feature/_index.md");
  return (
    <>
      <SeoMeta {...featureIndex.frontmatter} />
      <FeaturesGrid largeHeading />
      <FeaturesStickyLayout sticky={false} />
      <section className="section pt-0">
        <div className="container">
          <FeaturedTestimonial
            alternateLayout
            featuredCustomer={"David Miller"}
          />
        </div>
      </section>
      <CallToAction2 />
    </>
  );
};

export default page;
