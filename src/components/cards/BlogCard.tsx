import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import dateFormat from "@/lib/utils/dateFormat";
import { markdownify, plainify } from "@/lib/utils/textConverter";
import { Post } from "@/types";
import ArrowBtn from "@/components/buttons/ArrowBtn";
import CardTag from "@/components/common/CardTag";

const BlogCard = ({ data, aosDelay }: { data: Post; aosDelay?: number }) => {
  const { summary_length } = config.settings;
  const { title, image, categories, date } = data.frontmatter;
  return (
    <div data-aos="fade-up-sm" data-aos-delay={aosDelay}>
      <div className="inside-shadow shadow-shadow/50 hover:shadow-shadow hover:bg-light/10 transition-all duration-500 border border-border p-8 lg:p-10 !pb-8 rounded-4xl group h-full">
        <div className="flex gap-y-5 flex-col items-start justify-between h-full">
          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute top-5 right-5 z-10 flex items-center gap-2">
                {categories &&
                  categories.map((cat: string, i: number) => (
                    <CardTag key={i} category={cat} />
                  ))}
              </div>
              <ImageFallback
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={image}
                alt={title}
                width={500}
                height={385}
              />
            </div>

            <div className="flex flex-col">
              <p className="font-light mb-8">
                {dateFormat(date, "iiii, MMM dd, yyyy")}
              </p>
              <h3
                className="text-h5 text-white mb-4"
                dangerouslySetInnerHTML={markdownify(title)}
              />
              {data.content && (
                <p>{plainify(data.content.slice(0, summary_length))}</p>
              )}
            </div>
          </div>

          <ArrowBtn label="Read Full Blog" link={"/blog/" + data.slug} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
