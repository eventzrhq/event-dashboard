import TeamCard from "@/components/cards/TeamCard";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { TeamSection } from "@/types";

const OurTeamMembers = () => {
  const { title, subtitle, members } = getListPage(
    "sections/our-team-members.md",
  ).frontmatter as TeamSection["frontmatter"];
  return (
    <section className="section">
      <div className="container">
        <div className="section-intro text-center lg:col-8 mx-auto">
          {title && (
            <h2
              className="title"
              data-aos="fade-up-sm"
              data-aos-delay="0"
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
        </div>
        <div className="section-content">
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-aos="fade-up-sm"
            data-aos-delay="150"
          >
            {members &&
              members.length &&
              members.map((member, index) => {
                // equal aosDelay to 150, 300, 450 for each row
                const aosDelay = 150 * (index % 3);
                return (
                  <TeamCard
                    key={index}
                    image={member.image}
                    name={member.full_name}
                    position={member.position}
                    aosDelay={aosDelay}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamMembers;
