import { getSinglePage } from "@/darkrise-lib/contentParser";
import CallToAction2 from "@/darkrise-layouts/partials/CallToAction2";
import IntegrationSingle from "@/darkrise-layouts/partials/IntegrationSingle";
import SeoMeta from "@/darkrise-layouts/partials/SeoMeta";
import { Integration } from "@/darkrise-types";

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
  const integrations = getSinglePage("integration");

  const paths = integrations.map((integration) => ({
    single: integration.slug!,
  }));

  return paths;
};

const IntegrationSinglePage = async (props: {
  params: Promise<{ single: string }>;
}) => {
  const params = await props.params;
  const integrations: Integration[] = getSinglePage("integration");
  const integration = integrations.find((item) => item.slug === params.single);

  return (
    <>
      <SeoMeta />
      <IntegrationSingle integration={integration!} />
      <CallToAction2 />
    </>
  );
};

export default IntegrationSinglePage;
