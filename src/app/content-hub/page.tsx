import BlogHero from "@/components/blog/BlogHero";
import PopularPosts from "@/components/blog/PopularPosts";
import CategoryExplore from "@/components/blog/CategoryExplore";
import PostsGrid from "@/components/blog/PostsGrid";

export default function ContentHubPage() {
  return (
    <div id="blog">
      <BlogHero title="Clever Content" description="Tips, tricks and insights to help you shop smarter." />
      <PopularPosts />
      <CategoryExplore />
      <PostsGrid />
    </div>
  );
}