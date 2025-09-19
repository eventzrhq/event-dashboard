import CallToAction1 from "@/darkrise-layouts/partials/CallToAction1";
import CustomersLogo from "@/darkrise-layouts/partials/CustomersLogo";
import FeaturesCardLayout from "@/darkrise-layouts/partials/FeaturesCardLayout";
import FeaturesStickyLayout from "@/darkrise-layouts/partials/FeaturesStickyLayout";
import HomeBanner from "@/darkrise-layouts/partials/HomeBanner";
import IntegrationSection from "@/darkrise-layouts/partials/IntegrationSection";
import SeoMeta from "@/darkrise-layouts/partials/SeoMeta";
import Testimonial from "@/darkrise-layouts/partials/Testimonial";

const Home = () => {
  return (
    <>
      <SeoMeta />
      <HomeBanner />
      <CustomersLogo />
      <FeaturesStickyLayout />
      <FeaturesCardLayout />
      <IntegrationSection />
      <Testimonial featuredCustomer="David Miller" />
      <CallToAction1 />
    </>
  );
};

export default Home;