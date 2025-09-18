import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import Faq from "@/layouts/partials/Faq";
import SeoMeta from "@/layouts/partials/SeoMeta";
import { ContactPage } from "@/types";

const Contact = async () => {
  const { contact_form_action }: { contact_form_action: string } =
    config.params;
  const data: ContactPage = getListPage("contact/-index.md");
  const { title, description, meta_title, image, hero } = data.frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section relative overflow-hidden">
        <div className="container">
          <div className="row pt-10 lg:pt-20 g-5">
            <div className="md:col-6 xl:col-7">
              <div className="flex flex-col justify-between h-full md:py-12">
                <div>
                  {title && (
                    <h1
                      className="text-h2 lg:text-h1 mb-6"
                      data-aos="fade-up-sm"
                      data-aos-delay="0"
                      dangerouslySetInnerHTML={markdownify(title)}
                    />
                  )}
                  {hero.subtitle && (
                    <p
                      className="text-lg text-white font-medium mb-7"
                      data-aos="fade-up-sm"
                      data-aos-delay="100"
                      dangerouslySetInnerHTML={markdownify(hero.subtitle)}
                    />
                  )}
                </div>
                <div data-aos="fade-up-sm" data-aos-delay="200">
                  {hero.contact && (
                    <p
                      className="text-lg text-white font-medium mb-7"
                      dangerouslySetInnerHTML={markdownify(hero.contact)}
                    />
                  )}
                  <ul className="list-disc ml-4 text-white leading-loose">
                    <li>
                      <span>Email: </span>
                      {hero.email && (
                        <a className="text-text" href={`mailto:${hero.email}`}>
                          {hero.email}
                        </a>
                      )}
                    </li>
                    <li>
                      <span>Phone: </span>
                      {hero.phone && (
                        <a className="text-text" href={`tel:${hero.phone}`}>
                          {hero.phone}
                        </a>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:col-6 xl:col-5">
              <div className="border border-border inside-shadow shadow-shadow/60 p-10 rounded-4xl">
                <form action={contact_form_action} method="post">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="firstName" className="form-label">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        aria-required="true"
                        className="form-input"
                        placeholder="Your First Name"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="lastName" className="form-label">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-input"
                        required
                        aria-required="true"
                        placeholder="Your Last Name"
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="email" className="form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        required
                        aria-required="true"
                        placeholder="johndoe@example.com"
                      />
                    </div>

                    <div className="col-span-2">
                      <label htmlFor="subject" className="form-label">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-input"
                        required
                        aria-required="true"
                        placeholder="Write Your Subject Here"
                      />
                    </div>

                    <div className="col-span-2">
                      <label htmlFor="message" className="form-label">
                        Write Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="form-input"
                        required
                        aria-required="true"
                        placeholder="Write Your Message Here"
                      ></textarea>
                    </div>

                    <div className="col-span-2">
                      <button
                        type="submit"
                        className="btn bg-secondary py-5 px-7 border-secondary text-light leading-none"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Contact;
