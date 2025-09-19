import PrimaryArrowBtn from "@/components/buttons/PrimaryArrowBtn";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { type HomeBanner } from "@/types";
import Link from "next/link";

const HomeBanner = () => {
  const {
    title,
    description,
    notification,
    buttons,
    main_image,
    background_image,
  } = getListPage("sections/home-banner.md")
    .frontmatter as HomeBanner["frontmatter"];

  return (
    <section className="relative lg:pb-[350px] xl:pb-[450px] overflow-hidden">
      <div className="container relative">
        <div className="row justify-center">
          <div className="xl:col-8 py-10 text-center">
            <div className="flex flex-col items-center gap-8">
              {notification && (
                <div className="overflow-hidden">
                  <div className="animate-headshot">
                    <div className="inside-shadow-sm border border-border px-4 pt-1.5 pb-1 rounded-3xl text-white/85  leading-relaxed text-sm font-light [&_a]:hover:text-primary [&_a]:transition-colors [&_a]:duration-500">
                      <p dangerouslySetInnerHTML={markdownify(notification)} />
                    </div>
                  </div>
                </div>
              )}
              <div>
                {title && (
                  <h1
                    data-aos="fade-up-sm"
                    className="font-normal text-h2 lg:text-[5rem] lg:leading-[1.2] mb-3 tracking-tighter"
                    dangerouslySetInnerHTML={markdownify(title)}
                  />
                )}
                {description && (
                  <div className="xl:col-9 mx-auto">
                    <p
                      data-aos="fade-up-sm"
                      data-aos-delay="100"
                      dangerouslySetInnerHTML={markdownify(description)}
                    />
                  </div>
                )}
              </div>
              {buttons && (
                <div
                  className="flex flex-wrap gap-3 justify-center"
                  data-aos="fade-up-sm"
                  data-aos-delay="150"
                >
                  {buttons
                    .filter((btn) => btn.enable)
                    .map(({ label, link }, index) =>
                      index === 0 ? (
                        <PrimaryArrowBtn
                          key={index}
                          label={label}
                          link={link}
                        />
                      ) : (
                        <Link
                          key={index}
                          className="btn btn-secondary border border-tertiary/70"
                          href={link}
                        >
                          {label}
                        </Link>
                      ),
                    )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {main_image && (
        <div className="relative container-fluid">
          <div
            className="mt-5 lg:mt-16 pb-10"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className=" mx-auto w-full sm:w-2/3 xl:max-w-[959px] object-cover lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2">
              <div
                data-ac="tilt"
                data-ac-angle="1"
                className="rounded-4xl p-6 border border-white/15"
              >
                <ImageFallback
                  className="rounded-3xl overflow-hidden"
                  src={main_image.src}
                  width={910}
                  height={680}
                  loading="eager"
                  alt={main_image.alt}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {background_image && (
        <div
          className="hidden lg:block absolute left-10 -bottom-20 w-full -z-10"
          aria-hidden="true"
          data-aos="fade-in"
          data-aos-delay="800"
          data-aos-duration="2000"
          data-aos-easing="ease-out"
        >
          <ImageFallback
            src={background_image.src}
            className="w-full max-w-[2000px] mx-auto lg:scale-110"
            loading="eager"
            width={1560}
            height={924}
            alt={background_image.alt || ""}
          />
        </div>
      )}
    </section>
  );
};

export default HomeBanner;
