import { getListPage } from "@/darkrise-lib/contentParser";
import AboutBanner from "@/darkrise-layouts/partials/AboutBanner";
import CallToAction1 from "@/darkrise-layouts/partials/CallToAction1";
import CareerCta from "@/darkrise-layouts/partials/CareerCta";
import OurTeam from "@/darkrise-layouts/partials/OurTeam";
import SeoMeta from "@/darkrise-layouts/partials/SeoMeta";
import Values from "@/darkrise-layouts/partials/Values";
import { RegularPage } from "@/darkrise-types";

const About = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const { frontmatter } = data;

  return (
    <>
      <SeoMeta {...frontmatter} />
      <AboutBanner />
      <Values />
      <OurTeam />
      <CareerCta />
      <CallToAction1 />
    </>
  );
};

export default About;