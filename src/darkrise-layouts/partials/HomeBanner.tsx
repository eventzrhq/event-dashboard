import AnimatedAnchor from "@/darkrise-layouts/components/AnimatedAnchor";
import ImageFallback from "@/darkrise-layouts/helpers/ImageFallback";
import { getListPage } from "@/darkrise-lib/contentParser";
import { markdownify } from "@/darkrise-lib/utils/textConverter";

const HomeBanner = () => {
  const { title, note, description, buttons, list, image } = getListPage(
    "sections/home-banner.md",
  ).frontmatter;
  return (
    <section className="overflow-hidden pb-0 pt-16 relative">
      <div className="container">
        <div className="row justify-center">
          <div className="pt-6 text-center md:col-9 lg:col-9">
            {note && (
              <div
                data-aos="fade-up-sm"
                className="border-animation mx-auto mb-4 w-fit rounded-full p-px relative"
              >
                <div className="border-animation-inner flex gap-2 rounded-full border border-white/15 px-3 py-1.5">
                  <ImageFallback
                    width={24}
                    height={24}
                    src="/images/icons/svg/award.svg"
                    alt="note"
                  />
                  <span
                    className="text-sm opacity-70 md:text-base"
                    dangerouslySetInnerHTML={markdownify(note)}
                  />
                </div>
              </div>
            )}
            {title && (
              <h1
                dangerouslySetInnerHTML={markdownify(title)}
                data-aos="fade-up-sm"
                className="has-gradient mb-4 text-h2 lg:text-h1"
              />
            )}
            {description && (
              <p
                dangerouslySetInnerHTML={markdownify(description)}
                data-aos="fade-up-sm"
                className="mb-8 text-xl/[inherit] text-light"
              />
            )}
            {buttons && (
              <ul className="flex flex-wrap justify-center gap-4">
                {buttons.map(
                  (
                    { label, link }: { label: string; link: string },
                    index: number,
                  ) => (
                    <li
                      key={index}
                      data-aos="fade-up-sm"
                      data-aos-delay={100 + index * 50}
                    >
                      <AnimatedAnchor
                        className={`${index === 0 ? "btn-primary" : "btn-outline-transparent"}`}
                        link={link}
                        target={link.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener"
                        label={label}
                        hideIcon={!(index === 0)}
                      />
                    </li>
                  ),
                )}
              </ul>
            )}
            {list && (
              <ul
                data-aos="fade-up-sm"
                data-aos-delay="200"
                className="mt-6 flex flex-wrap justify-center gap-4"
              >
                {list.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-sm opacity-70"
                  >
                    {!(index === 0) && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    )}
                    <span dangerouslySetInnerHTML={markdownify(item)} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          {image && (
            <div
              className="col-12 pt-8 lg:pt-16"
              data-aos="fade-up-sm"
              data-aos-delay="400"
            >
              <div className="max-h-[825px]">
                {image && (
                  <ImageFallback
                    src={image.src}
                    alt={image.alt}
                    width={1300}
                    height={825}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[15%] top-1/2 z-10 h-[358px] w-[516px] rotate-[-19deg] rounded-full from-secondary/40 from-40% via-secondary via-60% to-primary opacity-30 blur-[100px] bg-gradient-to-tr md:top-1/3"
      />
    </section>
  );
};

export default HomeBanner;
