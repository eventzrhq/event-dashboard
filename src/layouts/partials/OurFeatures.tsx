import PrimaryArrowBtn from "@/components/buttons/PrimaryArrowBtn";
import ProcessCard from "@/components/cards/ProcessCard";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { FeaturesSection } from "@/types";

const OurFeatures = () => {
  const { title, subtitle, services } = getListPage("sections/our-features.md")
    .frontmatter as FeaturesSection["frontmatter"];

  return (
    <section className="section">
      <div className="container">
        <div className="section-intro text-center lg:col-7 mx-auto">
          {title && (
            <h2
              data-aos="fade-up-sm"
              className="title"
              dangerouslySetInnerHTML={markdownify(title)}
            />
          )}
          {subtitle && (
            <p
              data-aos="fade-up-sm"
              data-aos-delay="100"
              className="subtitle w-5/6 mx-auto"
              dangerouslySetInnerHTML={markdownify(subtitle)}
            />
          )}
        </div>
        <div className="section-content lg:px-20">
          <div className="flex flex-col gap-16">
            {services &&
              services.length &&
              services.map((service, index: number) => {
                const isEvenIndex = index % 2 !== 0;
                return (
                  <div
                    key={index}
                    className="grid md:grid-cols-2 gap-10 xl:gap-16"
                  >
                    <div className={`${isEvenIndex && "order-1 md:order-2"}`}>
                      <ProcessCard
                        imageSrc={service.imageSrc}
                        imageAlt={service.imageAlt}
                        isStatsEnable={service.stats.enable}
                        percentage={service.stats.percentage}
                        growthRate={service.stats.growthRate}
                        desc={service.stats.desc}
                      />
                    </div>
                    <div
                      className={`self-center ${isEvenIndex && "order-1 md:order-1"}`}
                    >
                      <div className="space-y-8" data-aos="fade-up-sm">
                        <div>
                          {service.title && (
                            <h3
                              className="mb-4"
                              dangerouslySetInnerHTML={markdownify(
                                service.title,
                              )}
                            />
                          )}
                          {service.description && (
                            <p
                              dangerouslySetInnerHTML={markdownify(
                                service.description,
                              )}
                            />
                          )}
                        </div>
                        {service.button && service.button.enable && (
                          <PrimaryArrowBtn
                            label={service.button.label}
                            link={service.button.link}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
