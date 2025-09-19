import PricingTableSingle from "@/components/common/PricingTableSingle";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { PricingSection } from "@/types";

const PricingPlanTable = () => {
  const { plans } = getListPage("sections/pricing.md")
    .frontmatter as PricingSection["frontmatter"];
  const { hero } = getListPage("pricing/-index.md").frontmatter;
  return (
    <>
      {hero.tablePricing && hero.tablePricing.enable && (
        <section className="section">
          <div className="container ">
            <div className="lg:px-28">
              <div className="section-intro pb-14 text-center">
                {hero.tablePricing.title && (
                  <h2
                    className="text-h3 mb-4"
                    data-aos="fade-up-sm"
                    dangerouslySetInnerHTML={markdownify(
                      hero.tablePricing.title,
                    )}
                  />
                )}
                {hero.tablePricing.subtitle && (
                  <p
                    className="hero.tablePricing.subtitle lg:w-3/5 mx-auto"
                    data-aos="fade-up-sm"
                    data-aos-delay="100"
                    dangerouslySetInnerHTML={markdownify(
                      hero.tablePricing.subtitle,
                    )}
                  />
                )}
              </div>

              {/* Tablet to Desktop View */}
              <table
                className="md:table hidden pricing-table"
                data-aos="fade-up-sm"
                data-aos-delay="150"
              >
                <thead>
                  <tr>
                    <th />
                    {plans.monthly.map((plan, i: number) => (
                      <th key={i}>
                        <div className="pricing-table-head">
                          <p className="title">{plan.plan}</p>
                          <div className="subtitle">{plan.audience}</div>
                          <div className="price-tag">
                            <span>{plan.price_prefix}</span>
                            <h2>{plan.price}</h2>
                          </div>
                          <div className="subtitle">{plan.users}</div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Main features</td>
                    {plans.monthly.map((_, i: number) => (
                      <td key={i} />
                    ))}
                  </tr>
                  {plans.monthly &&
                    plans.monthly.length &&
                    plans.monthly[0].features.map((feature) => {
                      return (
                        <tr key={feature}>
                          <td>{feature}</td>
                          {plans.monthly.map((_, i: number) => (
                            <td key={i}>
                              <div>
                                <ImageFallback
                                  src="/images/icons/green_tick.svg"
                                  alt="tick"
                                  width={16}
                                  height={16}
                                />
                              </div>
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  <tr>
                    <td />
                    {plans.monthly &&
                      plans.monthly.length &&
                      plans.monthly.slice(0, 3).map((plan, index: number) => {
                        const isMiddle = index === 1;
                        return (
                          <td key={index}>
                            {plan.button && plan.button.enable && (
                              <div>
                                <a
                                  href={plan.button.link}
                                  className={`${isMiddle ? "lg:btn btn-sm  rounded-lg lg:text-base lg:font-medium text-center text-white bg-primary border border-primary" : "g:btn btn-sm rounded-lg lg:text-base lg:font-medium bg-tertiary/50 text-white border border-light hover:btn-primary"}`}
                                >
                                  {plan.button.label}
                                </a>
                              </div>
                            )}
                          </td>
                        );
                      })}
                  </tr>
                </tbody>
              </table>

              {/* Mobile View */}
              <div className="block md:hidden space-y-5">
                {plans.monthly &&
                  plans.monthly.length &&
                  plans.monthly.slice(0, 3).map((plan, index: number) => {
                    return (
                      <div key={index}>
                        <PricingTableSingle
                          plan={plan.plan}
                          audience={plan.audience}
                          price_prefix={plan.price_prefix}
                          price={plan.price}
                          users={plan.users}
                          features={plan.features}
                          button={plan.button}
                          isMiddle={index === 1}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PricingPlanTable;
