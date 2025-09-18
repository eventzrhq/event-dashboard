import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/layouts/partials/CallToAction";
import PricingPlanSection from "@/layouts/partials/PricingPlanSection";
import PricingPlanTable from "@/layouts/partials/PricingPlanTable";
import SeoMeta from "@/layouts/partials/SeoMeta";
import { FaA } from "react-icons/fa6";

const page = () => {
  const indexData = getListPage("pricing/-index.md");
  return (
    <>
      <SeoMeta {...indexData.frontmatter} />
      <PricingPlanSection />
      <PricingPlanTable />
      <FaA />
      <CallToAction />
    </>
  );
};

export default page;
