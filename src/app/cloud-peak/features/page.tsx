import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/layouts/partials/CallToAction";
import ClientTestimonials from "@/layouts/partials/ClientTestimonials";
import Faq from "@/layouts/partials/Faq";
import FeaturesBanner from "@/layouts/partials/FeaturesBanner";
import OurFeatures from "@/layouts/partials/OurFeatures";
import SeoMeta from "@/layouts/partials/SeoMeta";

const page = () => {
  const indexData = getListPage("features/-index.md");
  const featureIndexHeroData = indexData.frontmatter.hero;
  return (
    <>
      <SeoMeta {...indexData.frontmatter} />
      <FeaturesBanner featureIndexHeroData={featureIndexHeroData} />
      <OurFeatures />
      <ClientTestimonials />
      <Faq />
      <CallToAction />
    </>
  );
};

export default page;
