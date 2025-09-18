import CardTag from "@/components/CardTag";
import PrimaryArrowBtn from "@/components/PrimaryArrowBtn";
import ImageFallback from "@/helpers/ImageFallback";
import dateFormat from "@/lib/utils/dateFormat";
import { markdownify, plainify } from "@/lib/utils/textConverter";
import { Post } from "@/types";

const FeaturedBlogPostCard = ({ mostRecentPost }: { mostRecentPost: Post }) => {
  const { title, date, image, categories } = mostRecentPost.frontmatter;

  return (
    <div
      data-aos="fade-up-sm"
      data-aos-delay="150"
      className="inside-shadow shadow-shadow/60 border border-border p-8 lg:p-10 rounded-4xl"
    >
      <div className="row gap-y-10 flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-[55%] lg:pr-10">
          <div className="flex flex-col gap-y-8 py-2">
            <p className="font-light">
              {dateFormat(date, "iiii, MMM dd, yyyy")}
            </p>
            <div>
              <h3
                className="text-h4 text-white mb-4"
                dangerouslySetInnerHTML={markdownify(title)}
              />

              {mostRecentPost.content && (
                <p>{plainify(mostRecentPost.content?.slice(0, 190))}</p>
              )}
            </div>
            <PrimaryArrowBtn
              link={"/blog/" + mostRecentPost.slug}
              label={"Read Full News"}
            />
          </div>
        </div>
        <div className="lg:w-[45%] h-full items-stretch">
          <div className="relative h-full">
            <div className="flex items-center gap-2 flex-wrap">
              <div className="absolute top-5 right-5 z-10 flex items-center gap-2">
                {categories &&
                  categories.map((cat: string, i: number) => (
                    <CardTag key={i} category={cat} />
                  ))}
              </div>
            </div>
            <ImageFallback
              className="rounded-3xl w-full h-full object-cover"
              src={image}
              alt="Blog Post"
              width={500}
              height={390}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogPostCard;
