import { getListPage } from "@/darkrise-lib/contentParser";
import CallToAction1 from "@/darkrise-layouts/partials/CallToAction1";
import FeaturesCardLayout from "@/darkrise-layouts/partials/FeaturesCardLayout";
import PricingCompare from "@/darkrise-layouts/partials/PricingCompare";
import PricingSection from "@/darkrise-layouts/partials/PricingSection";
import SeoMeta from "@/darkrise-layouts/partials/SeoMeta";
import Testimonial from "@/darkrise-layouts/partials/Testimonial";
import { RegularPage } from "@/darkrise-types";

const pricing = () => {
  const {
    title,
    description,
    meta_title,
    image,
    features,
  }: RegularPage["frontmatter"] = getListPage("pricing/_index.md").frontmatter;

  const pricingSectionData = getListPage("sections/pricing.md").frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PricingSection data={pricingSectionData} largeHeading />
      <FeaturesCardLayout features={features} />
      <PricingCompare />
      <Testimonial featuredCustomer="David Miller" hideCTAButton />
      <CallToAction1 />
    </>
  );
};

export default pricing;