import BlogHero from "@/components/blog/BlogHero";
import PopularPosts from "@/components/blog/PopularPosts";
import CategoryExplore from "@/components/blog/CategoryExplore";
import PostsGrid from "@/components/blog/PostsGrid";

export default function ContentHubPage() {
  return (
    <div className="pt-[146px] lg:pt-[152px]">
      <BlogHero title="Content Hub" description="Tips, tricks and insights to help you shop smarter." />
      <PopularPosts />
      <CategoryExplore />
      <PostsGrid />
    </div>
  );
}