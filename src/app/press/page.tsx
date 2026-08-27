import BlogHero from "@/components/blog/BlogHero";
import PopularPosts from "@/components/blog/PopularPosts";
import CategoryExplore from "@/components/blog/CategoryExplore";
import PostsGrid from "@/components/blog/PostsGrid";

export default function PressPage() {
  return (
    <div className="lg:pt-[132px]">
      <BlogHero />
      <PopularPosts />
      <CategoryExplore />
      <PostsGrid />
    </div>
  );
}