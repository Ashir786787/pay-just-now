"use client";

import { useState } from "react";
import {
  BlogPost,
  blogPosts,
  categories,
  sponsorAd,
} from "./blog-data";
import BlogPostCard from "./BlogPostCard";

function PostsAd() {
  return (
    <article className="blog-card">
      <div className="blog-card-media">
        <img src={sponsorAd.image} alt={sponsorAd.title} loading="lazy" />
      </div>
      <div className="blog-card-body">
        <span className="blog-card-category is-primary">Sponsored</span>
        <h4 className="blog-card-title">{sponsorAd.title}</h4>
        <p className="blog-card-meta">{sponsorAd.text}</p>
        <a href="#" className="btn btn-dark btn-md">
          <span className="btn-fill"></span>
          <span className="btn-text">
            <span className="line line-normal">Get it Now</span>
            <span className="line line-hover">Get it Now</span>
          </span>
        </a>
      </div>
    </article>
  );
}

export default function PostsGrid() {
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);

  const handleFilterChange = (value: string) => {
    if (value === filter) return;
    setFilter(value);
    setLoading(true);
    window.setTimeout(() => setLoading(false), 450);
  };

  const handleLoadMore = () => {
    if (loading) return;
    setLoading(true);
    window.setTimeout(() => setLoading(false), 600);
  };

  const visiblePosts: (BlogPost | "ad")[] =
    filter === "all"
      ? blogPosts.reduce<(BlogPost | "ad")[]>(
          (list, post, index) => {
            list.push(post);
            if (index === 1) list.push("ad");
            return list;
          },
          []
        )
      : blogPosts.filter((post) => post.categories.includes(filter));

  return (
    <section className="section blog-section section-lightest" id="posts">
      <div className="container">
        <div className="blog-filter-bar">
          <h2 className="s-title">All Posts</h2>
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
        </div>

        {loading ? (
          <div className="blog-grid">
            <div className="blog-empty" aria-label="Loading">
              Loading…
            </div>
          </div>
        ) : (
          <div className="blog-grid">
            {visiblePosts.length > 0 ? (
              visiblePosts.map((item, index) =>
                item === "ad" ? (
                  <PostsAd key="sponsored" />
                ) : (
                  <BlogPostCard key={item.title} post={item} />
                )
              )
            ) : (
              <div className="blog-empty">
                No posts found in this category yet.
              </div>
            )}
          </div>
        )}

        <div className="blog-load-more">
          <button
            type="button"
            onClick={handleLoadMore}
            disabled={loading}
            className="btn btn-dark btn-md"
          >
            <span className="btn-fill"></span>
            <span className="btn-text">
              <span className="line line-normal">Load More</span>
              <span className="line line-hover">Load More</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
