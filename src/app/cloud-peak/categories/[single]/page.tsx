import BlogCard from "@/layouts/components/BlogCard";
import config from "@/config/config.json";
import { getSinglePage } from "@/lib/contentParser";
import { getTaxonomy } from "@/lib/taxonomyParser";
import { sortByDate } from "@/lib/utils/sortFunctions";
import taxonomyFilter from "@/lib/utils/taxonomyFilter";
import { humanize } from "@/lib/utils/textConverter";
import PageHeader from "@/layouts/partials/PageHeader";
import SeoMeta from "@/layouts/partials/SeoMeta";
import { Post } from "@/types";
import Link from "next/link";

const { blog_folder } = config.settings;
type StaticParams = () => { single: string }[];

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: StaticParams = () => {
  const categories = getTaxonomy(blog_folder, "categories");

  const paths = categories.map((category) => ({
    single: category,
  }));

  return paths;
};

const CategorySingle = async (props: {
  params: Promise<{ single: string }>;
}) => {
  const params = await props.params;
  const posts: Post[] = getSinglePage(blog_folder);
  const filterByCategories = taxonomyFilter(posts, "categories", params.single);
  const sortedPosts = sortByDate(filterByCategories);
  const allUniqueCategories = await getTaxonomy(blog_folder, "categories");

  return (
    <>
      <SeoMeta title={humanize("Category - " + params.single)} />
      <PageHeader title={humanize(params.single)} />

      <section className="section">
        <div className="container">
          <div className="section-content">
            <ul className="px-10 flex flex-wrap justify-center items-center gap-2 mb-14">
              {allUniqueCategories &&
                allUniqueCategories.map((cat: string, i: number) => (
                  <li key={i}>
                    <Link
                      className={`blog-category-item ${params.single === cat ? "active" : ""}`}
                      key={i}
                      href={"/categories/" + cat}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
            </ul>

            <div className="grid grid-cols-2 gap-8">
              {sortedPosts.map((post, i: number) => (
                <BlogCard data={post} key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategorySingle;
