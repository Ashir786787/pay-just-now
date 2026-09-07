import BlogHero from "@/components/blog/BlogHero";
import PopularPosts from "@/components/blog/PopularPosts";
import CategoryExplore from "@/components/blog/CategoryExplore";
import PostsGrid from "@/components/blog/PostsGrid";
import {
  contentHubCategories,
  contentHubFeatured,
  contentHubPopularPosts,
  contentHubPosts,
} from "@/components/blog/blog-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Hub - PayJustNow",
};

export default function ContentHubPage() {
  return (
    <div id="blog">
      <BlogHero title="Clever Content" description="Tips, tricks and insights to help you shop smarter." />
      <PopularPosts featured={contentHubFeatured} mostPopular={contentHubPopularPosts} />
      <CategoryExplore categories={contentHubCategories} />
      <PostsGrid posts={contentHubPosts} showAd={false} showFilter={false} />
    </div>
  );
}