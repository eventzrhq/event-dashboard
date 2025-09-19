import TestimonialCard from "@/components/cards/TestimonialCard";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { Testimonials } from "@/types";

const ClientTestimonials = () => {
  const { title, subtitle, testimonials } = getListPage(
    "sections/client-testimonials.md",
  ).frontmatter as Testimonials["frontmatter"];

  return (
    <section className="section">
      <div className="container">
        <div className="section-intro lg:col-8 mx-auto text-center">
          {title && (
            <h2
              className="title"
              data-aos="fade-up-sm"
              dangerouslySetInnerHTML={markdownify(title)}
            />
          )}
          {subtitle && (
            <p
              className="subtitle w-5/6 mx-auto"
              data-aos="fade-up-sm"
              data-aos-delay="100"
              dangerouslySetInnerHTML={markdownify(subtitle)}
            />
          )}
        </div>
        <div className="section-content">
          {/* Testimonial Cards */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-aos="fade-up-sm"
            data-aos-delay="150"
          >
            {testimonials.map((testimonial, index) => {
              const aosDelay = 100 * (index % 3);
              return (
                <TestimonialCard
                  key={index}
                  aosDelay={aosDelay}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  position={testimonial.position}
                  image={testimonial.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
