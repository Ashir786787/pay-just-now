import BlogHero from "@/components/blog/BlogHero";
import PopularPosts from "@/components/blog/PopularPosts";
import CategoryExplore from "@/components/blog/CategoryExplore";
import PostsGrid from "@/components/blog/PostsGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press - PayJustNow",
};

export default function PressPage() {
  return (
    <div id="blog">
      <BlogHero />
      <PopularPosts />
      <CategoryExplore />
      <PostsGrid />
    </div>
  );
}