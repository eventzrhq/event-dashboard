import { getListPage } from "@/lib/contentParser";
import PricingPlanCards from "./PricingPlanCards";
import { PricingSection } from "@/types";

const PricingPlanSection = () => {
  const data = getListPage("sections/pricing.md")
    .frontmatter as PricingSection["frontmatter"];

  return <PricingPlanCards data={data} />;
};

export default PricingPlanSection;
