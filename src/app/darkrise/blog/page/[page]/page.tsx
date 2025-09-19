import Pagination from "@/darkrise-layouts/components/Pagination";
import config from "@/darkrise-config/config.json";
import { getListPage, getSinglePage } from "@/darkrise-lib/contentParser";
import { sortByDate } from "@/darkrise-lib/utils/sortFunctions";
import BlogSection from "@/darkrise-layouts/partials/BlogSection";
import CallToAction1 from "@/darkrise-layouts/partials/CallToAction1";
import SeoMeta from "@/darkrise-layouts/partials/SeoMeta";
import { Post, RegularPage } from "@/darkrise-types";

const { blog_folder, pagination } = config.settings;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams = () => {
  const allPost: Post[] = getSinglePage(blog_folder);
  const allSlug: string[] = allPost.map((item) => item.slug!);
  const totalPages = Math.ceil(allSlug.length / pagination);
  const paths: { page: string }[] = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      page: (i + 1).toString(),
    });
  }

  return paths;
};

// for all regular pages
const Posts = async (props: { params: Promise<{ page: number }> }) => {
  const params = await props.params;
  const postIndex: RegularPage = getListPage(`${blog_folder}/_index.md`);
  const { title, meta_title, description, image } = postIndex.frontmatter;
  const posts: Post[] = getSinglePage(blog_folder);
  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPage =
    params.page && !isNaN(Number(params.page)) ? Number(params.page) : 1;
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <BlogSection posts={currentPosts} />
      <Pagination
        section={blog_folder}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <CallToAction1 />
    </>
  );
};

export default Posts;
