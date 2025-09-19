import OurCommitmentCard from "@/components/cards/OurCommitmentCard";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { Commitments } from "@/types";

const OurCommitments = () => {
  const { title, description, cards } = getListPage(
    "sections/our-commitments.md",
  ).frontmatter as Commitments["frontmatter"];
  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-3 items-center gap-8">
          <div data-aos="fade-up-sm">
            {title && (
              <h2
                className="mb-4 text-h4"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
            {description && (
              <p dangerouslySetInnerHTML={markdownify(description)} />
            )}
          </div>
          {cards.map(({ title, description }, index) => (
            <OurCommitmentCard
              key={index}
              title={title}
              description={description}
              aosDelay={++index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCommitments;
