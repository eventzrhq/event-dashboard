import OurCommitmentCard from "@/components/OurCommitmentCard";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { ValuesSection } from "@/types";

const OurValues = () => {
  const { title, subtitle, commitmentCards, ourJourney, milestones } =
    getListPage("sections/our-values.md")
      .frontmatter as ValuesSection["frontmatter"];

  return (
    <section className="section space-y-14 lg:space-y-32">
      <div className="container">
        <div className="section-intro text-center lg:col-8 mx-auto">
          {title && (
            <h2 className="title" data-aos="fade-up-sm" data-aos-delay="0">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="subtitle" data-aos="fade-up-sm" data-aos-delay="100">
              {subtitle}
            </p>
          )}
        </div>
        <div className="section-content">
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up-sm"
            data-aos-delay="150"
          >
            {commitmentCards.map((card, i: number) => (
              <OurCommitmentCard
                key={i}
                title={card.title}
                description={card.description}
                aosDelay={+card.aosDelay}
              />
            ))}
          </div>
        </div>
      </div>
      {ourJourney && ourJourney.enable && (
        <div className="container">
          <div
            data-aos="fade-up-sm"
            data-aos-delay="0"
            className="inside-shadow shadow-shadow/60 border border-border p-8 lg:p-10 rounded-4xl overflow-hidden"
          >
            <div className="row gap-y-10 flex-col-reverse lg:flex-row items-center">
              <div className="lg:w-[45%]">
                <ImageFallback
                  className="rounded-3xl w-full object-cover"
                  src={ourJourney.image.src}
                  alt={ourJourney.image.alt}
                  width={ourJourney.image.width}
                  height={ourJourney.image.height}
                />
              </div>
              <div className="lg:w-[55%] lg:pl-10 relative">
                <div className="flex flex-col gap-y-8 py-2">
                  {ourJourney.sectionSubtitle && (
                    <p className="font-medium">{ourJourney.sectionSubtitle}</p>
                  )}

                  <div>
                    {ourJourney.title && (
                      <h3 className="text-h4 text-white mb-4">
                        {ourJourney.title}
                      </h3>
                    )}
                    {ourJourney.description && (
                      <p className="font-light">{ourJourney.description}</p>
                    )}
                  </div>
                </div>
                {ourJourney.overlayShape.enable && (
                  <div
                    data-aos="fade-in"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    className="relative -z-10"
                  >
                    <ImageFallback
                      className="absolute bottom-24 -right-16 opacity-20 min-w-[600px] max-w-[600px]"
                      src={ourJourney.overlayShape.src}
                      alt={ourJourney.overlayShape.alt}
                      width={600}
                      height={600}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {milestones && milestones.enable && (
        <div className="container ">
          <div className="lg:px-10">
            <div className="grid text-center sm:text-left sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {milestones.list?.map((milestone, index) => (
                <div
                  key={index}
                  data-aos="fade-up-sm"
                  data-aos-delay={++index * 100}
                >
                  <p>{milestone.year}</p>
                  <h3 className="text-secondary py-2">{milestone.value}</h3>
                  <p>{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurValues;
