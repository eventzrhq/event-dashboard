import PrimaryArrowBtn from "@/components/buttons/PrimaryArrowBtn";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { FeaturePage } from "@/types";

const FeaturesBanner = ({
  featureIndexHeroData,
}: {
  featureIndexHeroData: FeaturePage["frontmatter"]["hero"];
}) => {
  const { title, description, button, banner_image, shape_image } =
    featureIndexHeroData;

  return (
    <section className="section relative overflow-hidden lg:pt-20">
      <div className="container">
        <div className="row g-5">
          <div className="lg:col-6 lg:self-center">
            {title && (
              <h1
                className="text-h2 lg:text-h1 mb-6"
                data-aos="fade-up-sm"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
            {description && (
              <p
                className="mb-8"
                data-aos="fade-up-sm"
                data-aos-delay="100"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
            {button && button.enable && (
              <div data-aos="fade-up-sm" data-aos-delay="150">
                <PrimaryArrowBtn link={button.link} label={button.label} />
              </div>
            )}
          </div>
          <div
            className="lg:col-6"
            data-aos="fade-left-sm"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {banner_image && (
              <div className="lg:translate-x-[100px] xl:translate-x-[250px] relative p-6 border border-white/15 rounded-4xl mx-auto w-full lg:min-w-[620px] xl:min-w-[900px]">
                <ImageFallback
                  className="object-cover rounded-3xl overflow-hidden"
                  src={banner_image.src}
                  alt={banner_image.alt}
                  width={900}
                  height={570}
                />

                {shape_image && shape_image.enable && (
                  <ImageFallback
                    src="/images/shapes/vertical_blob.webp"
                    className="w-full max-w-[400px] lg:max-w-[500px] absolute -right-[270px] lg:-right-[100px] xl:right-[150px] bottom-0 lg:bottom-1/2 lg:translate-y-1/2 -z-10"
                    alt=""
                    width={500}
                    height={500}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBanner;
