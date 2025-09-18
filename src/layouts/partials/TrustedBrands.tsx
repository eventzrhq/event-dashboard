import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { BrandsSection } from "@/types";

const TrustedBrands = () => {
  const { description, brands } = getListPage("sections/trusted-brands.md")
    .frontmatter as BrandsSection["frontmatter"];

  return (
    <section className="section pt-20 xl:pt-24">
      <div className="container">
        {description && (
          <p
            className="text-center text-lg mb-10"
            data-aos="fade-up-sm"
            dangerouslySetInnerHTML={markdownify(description)}
          />
        )}
        <div data-aos="fade-up-sm" data-aos-delay="100">
          <div className="flex flex-wrap justify-around gap-8">
            {brands.map(({ src, alt }, i: number) => (
              <ImageFallback
                key={src + i}
                src={src}
                alt={alt}
                loading="lazy"
                height="0"
                width="180"
                className="grayscale opacity-70"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
