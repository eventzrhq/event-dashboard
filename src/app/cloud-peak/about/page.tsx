import Clients from "@/layouts/components/Clients";
import { getListPage } from "@/lib/contentParser";
import AboutGallery from "@/layouts/partials/AboutGallery";
import CallToAction from "@/layouts/partials/CallToAction";
import OurTeamMembers from "@/layouts/partials/OurTeamMembers";
import OurValues from "@/layouts/partials/OurValues";
import SeoMeta from "@/layouts/partials/SeoMeta";
import { AboutPage } from "@/types";

const About = () => {
  const data: AboutPage = getListPage("about/-index.md");
  const { brands } = getListPage("sections/trusted-brands.md").frontmatter;
  const { title, meta_title, description, image } = data.frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <AboutGallery gallery={data.frontmatter.hero.gallery} />
      <Clients brands={brands} />
      <OurValues />
      <OurTeamMembers />
      <CallToAction />
    </>
  );
};

export default About;
