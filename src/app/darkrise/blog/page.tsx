import Pagination from "@/darkrise-layouts/components/Pagination";
import config from "@/darkrise-config/config.json";
import { getListPage, getSinglePage } from "@/darkrise-lib/contentParser";
import BlogSection from "@/darkrise-layouts/partials/BlogSection";
import CallToAction1 from "@/darkrise-layouts/partials/CallToAction1";
import SeoMeta from "@/darkrise-layouts/partials/SeoMeta";
import { RegularPage } from "@/darkrise-types";
const { blog_folder } = config.settings;

// for all regular pages
const Posts = () => {
  const postIndex: RegularPage = getListPage(`${blog_folder}/_index.md`);

  const posts = getSinglePage(blog_folder);
  const totalPages: number = Math.ceil(
    posts.length / config.settings.pagination,
  );

  return (
    <>
      <SeoMeta
        title={postIndex.frontmatter.title}
        meta_title={postIndex.frontmatter.meta_title}
        description={postIndex.frontmatter.description}
        image={postIndex.frontmatter.image}
      />
      <BlogSection largeHeading />
      <Pagination
        section={blog_folder}
        currentPage={1}
        totalPages={totalPages}
      />
      <CallToAction1 />
    </>
  );
};

export default Posts;
