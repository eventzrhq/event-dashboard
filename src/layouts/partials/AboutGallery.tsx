import ImageFallback from "@/helpers/ImageFallback";
import { AboutPage } from "@/types";

const AboutGallery = ({
  gallery,
}: {
  gallery: AboutPage["frontmatter"]["hero"]["gallery"];
}) => {
  return (
    <>
      {gallery && gallery.enable && (
        <section className="section">
          <div className="container">
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-8 relative overflow-hidden rounded-4xl">
                {gallery.leftImage && (
                  <ImageFallback
                    width={792}
                    height={500}
                    src={gallery.leftImage}
                    alt={gallery.leftImageAlt}
                    className="object-cover w-full h-full"
                    data-aos="fade-up-sm"
                    data-aos-delay="0"
                  />
                )}
              </div>
              <div className="md:col-span-4 relative overflow-hidden rounded-4xl">
                {gallery.rightImage && (
                  <ImageFallback
                    width={384}
                    height={500}
                    src={gallery.rightImage}
                    alt={gallery.rightImageAlt}
                    className="object-cover w-full h-full"
                    data-aos="fade-up-sm"
                    data-aos-delay="100"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AboutGallery;
