import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import Accordion from "@/shortcodes/Accordion";
import { FaqSection } from "@/types";

const Faq = () => {
  const { title, subtitle, accordions } = getListPage("sections/faq.md")
    .frontmatter as FaqSection["frontmatter"];

  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="section-intro text-center lg:text-left">
              {title && (
                <h2
                  className="title"
                  data-aos="fade-up-sm"
                  dangerouslySetInnerHTML={markdownify(title)}
                />
              )}
              {subtitle && (
                <p
                  className="subtitle lg:w-3/5 mx-auto lg:mx-0"
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                  dangerouslySetInnerHTML={markdownify(subtitle)}
                />
              )}
            </div>
          </div>
          <div className="lg:col-span-7">
            {/* FAQ CARDS  */}
            <div data-aos="fade-up-sm" data-aos-delay="150">
              {accordions.map((accordion, i: number) => (
                <div key={i}>
                  <Accordion title={accordion.title}>
                    {accordion.content}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
