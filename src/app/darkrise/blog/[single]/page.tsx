import config from "@/darkrise-config/config.json";
import { getSinglePage } from "@/darkrise-lib/contentParser";
import BlogSingle from "@/darkrise-layouts/partials/BlogSingle";
import SeoMeta from "@/darkrise-layouts/partials/SeoMeta";
import { Post } from "@/darkrise-types";

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

  const { frontmatter } = post;

  return (
    <>
      <SeoMeta
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        description={frontmatter.description}
        image={frontmatter.image}
      />
      <BlogSingle post={post} />
    </>
  );
};

export default PostSingle;
