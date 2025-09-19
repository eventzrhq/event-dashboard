import OurMissionCard from "@/components/cards/OurMissionCard";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { JourneySection } from "@/types";

const OurJourney = () => {
  const { title, subtitle, cards } = getListPage("sections/our-journey.md")
    .frontmatter as JourneySection["frontmatter"];

  return (
    <section className="section">
      <div className="container">
        <div className="section-intro text-center lg:col-8 mx-auto">
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
              className="subtitle"
              dangerouslySetInnerHTML={markdownify(subtitle)}
            />
          )}
        </div>

        {cards && cards.length > 0 && (
          <div className="section-content lg:px-20">
            <div className="grid md:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <OurMissionCard
                  key={index}
                  aosDelay={++index * 100}
                  title={card.title}
                  description={card.description}
                  imageSrc={card.imageSrc}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurJourney;
