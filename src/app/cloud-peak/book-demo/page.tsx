import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import CallToAction from '@/layouts/partials/CallToAction';
import PageHeader from '@/layouts/partials/PageHeader';
import SeoMeta from '@/layouts/partials/SeoMeta';

const BookDemoPage = () => {
  const { contact_form_action }: { contact_form_action: string } = config.params;

  const indexData = getListPage("book-demo/-index.md");
  const { page_header } = indexData.frontmatter;

  return (
    <>
      <SeoMeta {...page_header} />
      <PageHeader title={page_header.title} subtitle={page_header.subtitle} />
      <section className="section">
        <div className="container">
          <div className="lg:!px-24">
            <div
              className="border border-border inside-shadow shadow-shadow/60 p-10 rounded-4xl"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              <form action={contact_form_action} method="post">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      aria-required="true"
                      className="form-input"
                      placeholder="John"
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="form-input"
                      required
                      aria-required="true"
                      placeholder="Doe"
                    />
                  </div>

                  <div className="col-span-2">
                    <label htmlFor="email" className="form-label">Email *</label>
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
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-input"
                      required
                      aria-required="true"
                      placeholder="Your message subject"
                    />
                  </div>

                  <div className="col-span-2">
                    <label htmlFor="message" className="form-label">Write Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="form-input h-auto"
                      required
                      aria-required="true"
                      placeholder="Type your message here..."></textarea>
                  </div>

                  <div className="col-span-2">
                    <button
                      type="submit"
                      className="btn btn-primary w-full py-5 px-7 leading-none"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}

export default BookDemoPage
