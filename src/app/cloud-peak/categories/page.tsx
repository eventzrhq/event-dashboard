import config from "@/config/config.json";
import { getAllTaxonomy, getTaxonomy } from "@/lib/taxonomyParser";
import { humanize } from "@/lib/utils/textConverter";
import PageHeader from "@/layouts/partials/PageHeader";
import SeoMeta from "@/layouts/partials/SeoMeta";

const Categories = () => {
  const { blog_folder } = config.settings;
  const categories = getTaxonomy(blog_folder, "categories");
  const allCategories = getAllTaxonomy(blog_folder, "categories");

  return (
    <>
      <SeoMeta title={"Categories"} />
      <PageHeader title={"Categories"} />
      <section className="section">
        <div className="container text-center">
          <ul>
            {categories.map((category: string, i: number) => {
              const count = allCategories.filter(
                (c) => c.toLowerCase() === category.toLowerCase(),
              ).length;
              return (
                <li
                  className="m-3 inline-block border border-border rounded-4xl px-5 blog-category-item"
                  key={i}
                >
                  <a
                    href={`/categories/${category}`}
                    className="block rounded card colorize-hover-card px-4 py-2 text-xl text-white  "
                  >
                    {humanize(category)}{" "}
                    <span className="ml-2 rounded bg-body px-2 ">{count}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Categories;
