"use client";

import PriceCard from "@/components/cards/PriceCard";
import { priceTogglerInit } from "@/lib/utils/priceToggler";
import { markdownify } from "@/lib/utils/textConverter";
import { PricingSection } from "@/types";
import { useEffect } from "react";

const PricingPlanCards = ({
  data,
}: {
  data: PricingSection["frontmatter"];
}) => {
  const { title, subtitle, plans } = data;

  useEffect(() => {
    priceTogglerInit();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="section-intro lg:col-6 mx-auto text-center">
          {title && (
            <h2
              className="title"
              data-aos="fade-up-sm"
              dangerouslySetInnerHTML={markdownify(title)}
            />
          )}
          {subtitle && (
            <p
              className="subtitle"
              data-aos="fade-up-sm"
              data-aos-delay="100"
              dangerouslySetInnerHTML={markdownify(subtitle)}
            />
          )}

          {/* price toggle buttons */}
          <div
            data-aos="fade-up-sm"
            data-aos-delay="150"
            className="mt-10 flex items-center gap-x-3 lg:gap-x-5 justify-center text-sm font-light transition-all"
          >
            <span className="text-white duration-500" id="monthly">
              Monthly
            </span>

            <form action="">
              <label
                className="inline-flex items-center cursor-pointer"
                htmlFor="pricing-switch"
              >
                <input
                  type="checkbox"
                  value=""
                  aria-label="pricing switch"
                  id="pricing-switch"
                  className="sr-only peer"
                />
                <div className="relative w-[65px] h-[32px] bg-primary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[33px] rtl:peer-checked:after:-translate-x-[22px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[24px] after:w-[24px] after:transition-all after:duration-500 after:ease-in-out peer-checked:bg-primary"></div>
              </label>
            </form>

            <span id="yearly" className="duration-500">
              Yearly
            </span>
          </div>
        </div>
        <div
          className="section-content lg:px-20"
          data-aos="fade-up-sm"
          data-aos-delay="150"
        >
          {/* MONTHLY PRICE CARDS */}
          <div id="monthly-card-container">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {plans &&
                plans.monthly &&
                plans.monthly.length &&
                plans.monthly
                  .slice(0, 3)
                  .map((plan, index: number) => (
                    <PriceCard
                      key={index}
                      plan={plan.plan}
                      audience={plan.audience}
                      price={plan.price}
                      price_prefix={plan.price_prefix}
                      users={plan.users}
                      features={plan.features}
                      button={plan.button}
                      isMiddle={index === 1}
                    />
                  ))}
            </div>
          </div>

          {/* YEARLY PRICE CARDS--> */}
          <div id="yearly-card-container" className="hidden">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {plans &&
                plans.yearly &&
                plans.yearly.length &&
                plans.yearly
                  .slice(0, 3)
                  .map((plan, index: number) => (
                    <PriceCard
                      key={index}
                      plan={plan.plan}
                      audience={plan.audience}
                      price={plan.price}
                      price_prefix={plan.price_prefix}
                      users={plan.users}
                      features={plan.features}
                      button={plan.button}
                      isMiddle={index === 1}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlanCards;
