import { getListPage } from "@/darkrise-lib/contentParser";
import CallToAction1 from "@/darkrise-layouts/partials/CallToAction1";
import ContactFormSection from "@/darkrise-layouts/partials/ContactFormSection";
import ContactHero from "@/darkrise-layouts/partials/ContactHero";
import SeoMeta from "@/darkrise-layouts/partials/SeoMeta";
import { RegularPage } from "@/darkrise-types";

const Contact = async () => {
  const data: RegularPage = getListPage("contact/_index.md");

  return (
    <>
      <SeoMeta {...data.frontmatter} />
      <ContactHero />
      <ContactFormSection />
      <CallToAction1 />
    </>
  );
};

export default Contact;