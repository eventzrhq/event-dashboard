import CallToAction from "@/layouts/partials/CallToAction";
import ClientTestimonials from "@/layouts/partials/ClientTestimonials";
import Faq from "@/layouts/partials/Faq";
import HomeBanner from "@/layouts/partials/HomeBanner";
import OurCommitments from "@/layouts/partials/OurCommitments";
import OurJourney from "@/layouts/partials/OurJourney";
import OurServices from "@/layouts/partials/OurServices";
import PricingPlanSection from "@/layouts/partials/PricingPlanSection";
import SeoMeta from "@/layouts/partials/SeoMeta";
import TrustedBrands from "@/layouts/partials/TrustedBrands";

const Home = () => {
  return (
    <>
      <SeoMeta />
      <HomeBanner />
      <TrustedBrands />
      <OurCommitments />
      <OurJourney />
      <OurServices />
      <PricingPlanSection />
      <ClientTestimonials />
      <Faq />
      <CallToAction />
    </>
  );
};

export default Home;
