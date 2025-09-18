import PrimaryArrowBtn from "@/components/PrimaryArrowBtn";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { type CallToAction } from "@/types";

const CallToAction = () => {
  const { title, subtitle, button, dashboard_image, shape_image } = getListPage(
    "sections/call-to-action.md",
  ).frontmatter as CallToAction["frontmatter"];
  return (
    <section className="section">
      <div className="container">
        <div className="border border-border bg-light/60 rounded-3xl sm:rounded-4xl overflow-hidden relative">
          <div
            className={`${dashboard_image.enable ? "grid sm:grid-cols-12" : ""}`}
          >
            <div className="px-5 sm:px-12 pr-12 py-7 sm:py-14 relative z-30 sm:col-span-7">
              <div className="section-intro pb-0">
                {title && (
                  <h2
                    className="title"
                    dangerouslySetInnerHTML={markdownify(title)}
                  />
                )}
                {subtitle && (
                  <p
                    className="subtitle mb-10"
                    dangerouslySetInnerHTML={markdownify(subtitle)}
                  />
                )}
                {button && button.enable && (
                  <PrimaryArrowBtn label={button.label} link={button.link} />
                )}
              </div>
            </div>

            {dashboard_image && dashboard_image.enable && (
              <div className="relative h-[200px] sm:h-0 sm:col-span-5 z-20">
                <div className="absolute left-10 top-10 sm:left-0 sm:top-20 z-20 rounded-3xl border border-white/15 p-4">
                  <ImageFallback
                    src={dashboard_image.src}
                    loading="lazy"
                    className="sm:min-w-[700px] min-w-[500px] rounded-2xl overflow-hidden"
                    alt={dashboard_image.alt}
                    draggable={false}
                    width={800}
                    height={500}
                  />
                </div>
              </div>
            )}
          </div>

          {/* shapes */}
          {dashboard_image &&
            dashboard_image.enable &&
            shape_image &&
            shape_image.enable && (
              <div
                data-aos="fade-in"
                data-aos-duration="1600"
                data-aos-easing="ease-out"
              >
                <ImageFallback
                  src="/images/shapes/card_bg_blob.webp"
                  loading="lazy"
                  width={700}
                  height={700}
                  alt=""
                  draggable={false}
                  className="absolute right-0 bottom-10 w-full max-w-[700px] z-10 opacity-80"
                />
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
