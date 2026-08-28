"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BlogPost,
  blogPosts,
  categories,
  sponsorAd,
} from "./blog-data";
import BlogPostCard from "./BlogPostCard";

function PostsAd() {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[#f0f0f0] bg-white transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={sponsorAd.image}
          alt={sponsorAd.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col items-start gap-3 p-5">
        <span className="rounded-full bg-[#F3F4F2] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
          Sponsored
        </span>
        <h4 className="font-['Outfit'] text-xl font-bold text-black">
          {sponsorAd.title}
        </h4>
        <p className="text-sm leading-relaxed text-gray-500">{sponsorAd.text}</p>
        <a
          href="https://www.edgars.co.za/"
          target="_blank"
          rel="noopener"
          className="mt-auto inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/80"
        >
          Get it Now
        </a>
      </div>
    </article>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center py-12" aria-label="Loading">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#BDF500] border-t-[#0C5765]" />
    </div>
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
    <section className="border-t border-[#eef0f1] bg-white py-16 md:py-20">
      <div className="site-container">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="font-['Outfit'] text-3xl font-bold text-black md:text-4xl">
            Explore by Category
          </h2>

          <div className="relative">
            <select
              value={filter}
              onChange={(event) => handleFilterChange(event.target.value)}
              aria-label="Filter posts by category"
              className="w-full cursor-pointer appearance-none rounded-full border border-[#f0f0f0] bg-[#F3F4F2] px-6 py-3 pr-12 text-sm font-medium text-black outline-none transition-colors hover:border-[#BDF500] focus:border-[#BDF500] md:w-auto"
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
              className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
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
          <LoadingSpinner />
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
            <AnimatePresence initial={false}>
              {visiblePosts.length > 0 ? (
                visiblePosts.map((item, index) =>
                  item === "ad" ? (
                    <motion.div
                      key="sponsored"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <PostsAd />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: (index % 3) * 0.08,
                      }}
                    >
                      <BlogPostCard post={item} />
                    </motion.div>
                  )
                )
              ) : (
                <p className="col-span-full py-12 text-center text-gray-500">
                  No posts found in this category yet.
                </p>
              )}
            </AnimatePresence>
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={handleLoadMore}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full bg-black px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-black/80 disabled:opacity-60"
          >
            Load More
            <svg
              width="18"
              height="18"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M11.5 13H5.5V11H11.5V5H13.5V11H19.5V13H13.5V19H11.5V13Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}