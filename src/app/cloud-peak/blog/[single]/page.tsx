import config from "@/config/config.json";
import ImageFallback from "@/layouts/helpers/ImageFallback";
import MDXContent from "@/layouts/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import dateFormat from "@/lib/utils/dateFormat";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/layouts/partials/SeoMeta";
import { Post } from "@/types";

const { blog_folder } = config.settings;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
  const posts: Post[] = getSinglePage(blog_folder);

  const paths = posts.map((post) => ({
    single: post.slug!,
  }));

  return paths;
};

const PostSingle = async (props: { params: Promise<{ single: string }> }) => {
  const params = await props.params;
  const posts: Post[] = getSinglePage(blog_folder);
  const post = posts.filter((page) => page.slug === params.single)[0];

  const { frontmatter, content } = post;
  const { title, meta_title, description, image, date, author, categories } =
    frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />

      <section className="section-page-heading lg:pt-10">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <div className="bg-secondary rounded-4xl px-4 py-3 grid place-items-center mb-6 max-w-min">
              {categories &&
                categories.map((cat: string, i: number) => (
                  <span
                    key={i}
                    className="text-[0.625rem] font-semibold capitalize text-white leading-none mt-[2px]"
                  >
                    {cat}
                  </span>
                ))}
            </div>

            <h1
              className="lg:text-[4.5rem] lg:leading-[1.2] mb-4 lg:col-10 lg:mx-auto"
              data-aos="fade-up-sm"
              data-aos-delay="0"
              dangerouslySetInnerHTML={markdownify(title)}
            />
            <p
              className="mb-14 flex flex-wrap text-center justify-center gap-4"
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              {date && (
                <span>
                  Published on: {dateFormat(date, "EEEE, MMM dd, yyyy")}
                </span>
              )}
              {author && <span>By {author}</span>}
            </p>
            <div
              className="self-stretch rounded-4xl overflow-hidden"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              <ImageFallback
                src="/images/blog/post_1.png"
                width={1200}
                height={475}
                alt="sisyphus"
                draggable={false}
                className="max-h-[350px] lg:max-h-[475px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="flex flex-col items-start lg:flex-row gap-12">
            <div className="content w-full">
              <MDXContent content={content} />
            </div>
            {config.params.newsletter && (
              <div className="bg-light/40 rounded-4xl border border-border px-6 py-14 lg:w-[450px] sticky top-10">
                <div className="flex flex-col gap-4">
                  <h3
                    className="text-h5"
                    dangerouslySetInnerHTML={markdownify(
                      config.params.newsletter.title,
                    )}
                  />
                  <p
                    className="text-white font-light"
                    dangerouslySetInnerHTML={markdownify(
                      config.params.newsletter.subtitle,
                    )}
                  />
                  {config.params.newsletter.button && (
                    <form action={config.params.newsletter.form_action}>
                      <input
                        type="email"
                        name="Email"
                        placeholder="Enter your email"
                        required
                        className="accent-primary bg-border rounded-lg border-border h-14 text-white px-5 w-full"
                      />
                      <button className="btn btn-primary w-full rounded-lg mt-4">
                        {config.params.newsletter.button.label}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostSingle;
