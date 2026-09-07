"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BlogPost,
  featuredPost,
  mostPopularPosts,
  postHref,
} from "./blog-data";
import { CategoryChips, PostMetas } from "./BlogPostCard";
import VideoModal from "./VideoModal";

interface PopularPostsProps {
  featured?: BlogPost;
  mostPopular?: BlogPost[];
}

function FeaturedPost({
  post,
  onPlay,
}: {
  post: BlogPost;
  onPlay: (post: BlogPost) => void;
}) {
  const isVideo = Boolean(post.youtubeId) && Boolean(post.image);
  const media = post.image ? (
    isVideo ? (
      <button
        type="button"
        className="blog-card-media-link blog-card-media blog-card-media-video"
        onClick={() => onPlay(post)}
        aria-label={`Play ${post.title}`}
      >
        <img src={post.videoThumb || post.image} alt={post.title} />
        <span className="blog-card-play" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6 4l10 6-10 6V4z" />
          </svg>
        </span>
      </button>
    ) : (
      <Link
        href={postHref(post.title)}
        className="blog-card-media-link blog-card-media"
      >
        <img src={post.image} alt={post.title} />
      </Link>
    )
  ) : null;

  return (
    <article className="blog-card">
      {media}
      <div className="blog-card-body">
        <CategoryChips categories={post.categories} />
        <h3 className="blog-card-title">
          <Link href={postHref(post.title)} className="blog-title-link">
            {post.title}
          </Link>
        </h3>
        <PostMetas author={post.author} date={post.date} readTime={post.readTime} />
        {!isVideo && (
          <Link
            href={postHref(post.title)}
            className="btn btn-outline-dark btn-sm"
          >
            <span className="btn-fill"></span>
            <span className="btn-text">Read More</span>
          </Link>
        )}
      </div>
    </article>
  );
}

function PopularPostItem({
  post,
  onPlay,
}: {
  post: BlogPost;
  onPlay: (post: BlogPost) => void;
}) {
  const isVideo = Boolean(post.youtubeId) && Boolean(post.image);
  return (
    <article className="blog-popular-item">
      {post.image ? (
        isVideo ? (
          <button
            type="button"
            className="blog-popular-thumb blog-popular-thumb-video"
            onClick={() => onPlay(post)}
            aria-label={`Play ${post.title}`}
          >
            <img src={post.videoThumb || post.image} alt={post.title} loading="lazy" />
            <span className="blog-card-play" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            </span>
          </button>
        ) : (
          <Link href={postHref(post.title)} className="blog-popular-thumb">
            <img src={post.image} alt={post.title} loading="lazy" />
          </Link>
        )
      ) : (
        <span className="blog-popular-thumb" aria-hidden="true"></span>
      )}
      <div className="blog-popular-content">
        <CategoryChips categories={post.categories} />
        <h3 className="blog-card-title">
          <Link href={postHref(post.title)} className="blog-title-link">
            {post.title}
          </Link>
        </h3>
        <PostMetas author={post.author} date={post.date} readTime={post.readTime} />
      </div>
    </article>
  );
}

export default function PopularPosts({
  featured = featuredPost,
  mostPopular = mostPopularPosts,
}: PopularPostsProps) {
  const [playing, setPlaying] = useState<BlogPost | null>(null);

  return (
    <section className="section section-light section-popular">
      <div className="container">
        <div className="blog-featured">
          <FeaturedPost post={featured} onPlay={setPlaying} />
          <div className="blog-popular">
            <h2 className="s-title blog-popular-title">Most Popular</h2>
            {mostPopular.map((post) => (
              <PopularPostItem key={post.title} post={post} onPlay={setPlaying} />
            ))}
          </div>
        </div>
      </div>
      <VideoModal post={playing} onClose={() => setPlaying(null)} />
    </section>
  );
}