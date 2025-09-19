import BlogCard from "@/layouts/components/BlogCard";
import config from "@/config/config.json";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { getTaxonomy } from "@/lib/taxonomyParser";
import { sortByDate } from "@/lib/utils/sortFunctions";
import { markdownify } from "@/lib/utils/textConverter";
import FeaturedBlogPostCard from "@/layouts/partials/FeaturedBlogPostCard";
import PageHeader from "@/layouts/partials/PageHeader";
import SeoMeta from "@/layouts/partials/SeoMeta";
import { Post } from "@/types";
const { blog_folder } = config.settings;

// for all regular pages
const Posts = () => {
  const postIndex = getListPage(`${blog_folder}/-index.md`);
  const { title, meta_title, description, image } = postIndex.frontmatter;
  const pageHeaderIndexData = postIndex.frontmatter.page_header;
  const readMoreIndexData = postIndex.frontmatter.read_more_blogs;
  const posts: Post[] = getSinglePage(blog_folder);
  const sortedPosts = sortByDate(posts);
  const allUniqueCategories = getTaxonomy(blog_folder, "categories");

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />

      <PageHeader
        title={pageHeaderIndexData?.title}
        subtitle={pageHeaderIndexData?.subtitle}
      />

      <section className="section">
        <div className="container">
          <FeaturedBlogPostCard mostRecentPost={sortedPosts[0]} />
        </div>
      </section>

      {readMoreIndexData && (
        <section className="section">
          <div className="container">
            <div className="section-intro text-center">
              {readMoreIndexData.title && (
                <h3
                  className="title !text-h3"
                  dangerouslySetInnerHTML={markdownify(readMoreIndexData.title)}
                />
              )}

              {readMoreIndexData.subtitle && (
                <p
                  className="subtitle lg:col-6 mx-auto"
                  dangerouslySetInnerHTML={markdownify(
                    readMoreIndexData.subtitle,
                  )}
                />
              )}
            </div>

            <div className="section-content">
              <ul className="px-10 flex flex-wrap justify-center items-center gap-2 mb-14">
                <li>
                  <a className="blog-category-item active">All Categories</a>
                </li>
                {allUniqueCategories &&
                  allUniqueCategories.map((category, i: number) => (
                    <li key={i}>
                      <a
                        className="blog-category-item "
                        href={"/categories/" + category}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
              </ul>

              <div className="grid md:grid-cols-2 gap-8">
                {sortedPosts.map((post, index) => {
                  const aosDelay = 100 * (index % 2);
                  return (
                    <BlogCard key={post.slug} data={post} aosDelay={aosDelay} />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Posts;
