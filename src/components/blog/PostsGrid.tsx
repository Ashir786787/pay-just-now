"use client";

import { useState } from "react";
import {
  BlogPost,
  blogPosts,
  categories,
  sponsorAd,
} from "./blog-data";
import BlogPostCard from "./BlogPostCard";
import VideoModal from "./VideoModal";

interface PostsGridProps {
  posts?: BlogPost[];
  showAd?: boolean;
  showFilter?: boolean;
}

function PostsAd() {
  return (
    <article className="blog-card posts-ad">
      <div className="blog-card-media">
        <img src={sponsorAd.image} alt={sponsorAd.title} loading="lazy" />
      </div>
      <div className="blog-card-body">
        <span className="blog-card-category is-primary">Sponsored</span>
        <h4 className="blog-card-title">{sponsorAd.title}</h4>
        <p className="blog-card-meta">{sponsorAd.text}</p>
        <a
          href={sponsorAd.href}
          className="btn btn-dark btn-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="btn-fill"></span>
          <span className="btn-text">Get it Now</span>
        </a>
      </div>
    </article>
  );
}

export default function PostsGrid({
  posts = blogPosts,
  showAd = true,
  showFilter = true,
}: PostsGridProps) {
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [playing, setPlaying] = useState<BlogPost | null>(null);

  const handleFilterChange = (value: string) => {
    if (value === filter) return;
    setFilter(value);
    setVisibleCount(3);
    setLoading(true);
    window.setTimeout(() => setLoading(false), 450);
  };

  const handleLoadMore = () => {
    if (loading) return;
    setLoading(true);
    window.setTimeout(() => {
      setVisibleCount((count) => count + 3);
      setLoading(false);
    }, 600);
  };

  const visiblePosts: (BlogPost | "ad")[] =
    filter === "all"
      ? posts.reduce<(BlogPost | "ad")[]>((list, post, index) => {
          list.push(post);
          if (showAd && index === 1) list.push("ad");
          return list;
        }, [])
      : posts.filter((post) => post.categories.includes(filter));

  const hasMore = visibleCount < visiblePosts.length;

  return (
    <section className="section section-light section-posts" id="posts">
      <div className="container">
        <div className="blog-filter-bar">
          <h2 className="s-title">Explore by Category</h2>
          {showFilter && (
            <div className="blog-select-wrap">
              <label htmlFor="blog-filter" className="sr-only">
                Filter posts by category
              </label>
              <select
                id="blog-filter"
                value={filter}
                onChange={(event) => handleFilterChange(event.target.value)}
                aria-label="Filter posts by category"
                className="blog-select"
              >
                <option value="all">All</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>

        {loading ? (
          <div className="blog-grid">
            <div className="blog-empty" aria-label="Loading">
              Loading…
            </div>
          </div>
        ) : (
          <div className="blog-grid">
            {visiblePosts.slice(0, visibleCount).length > 0 ? (
              visiblePosts.slice(0, visibleCount).map((item, index) =>
                item === "ad" ? (
                  <PostsAd key="sponsored" />
                ) : (
                  <BlogPostCard
                    key={item.title}
                    post={item}
                    onPlay={showFilter || Boolean(item.youtubeId) ? setPlaying : undefined}
                  />
                )
              )
            ) : (
              <div className="blog-empty">
                No posts found in this category yet.
              </div>
            )}
          </div>
        )}

        {hasMore && (
          <div className="blog-load-more load-more">
            <button
              type="button"
              onClick={handleLoadMore}
              disabled={loading}
              className="btn btn-dark btn-md btn-load-more"
            >
              <span className="btn-fill"></span>
              <span className="btn-text">Load More</span>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  d="M11.5 13H5.5V11H11.5V5H13.5V11H19.5V13H13.5V19H11.5V13Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <VideoModal post={playing} onClose={() => setPlaying(null)} />
    </section>
  );
}
