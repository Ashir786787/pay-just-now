import Link from "next/link";
import {
  BlogPost,
  featuredPost,
  mostPopularPosts,
  postHref,
} from "./blog-data";
import { CategoryChips, PostMetas } from "./BlogPostCard";

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <article className="blog-card">
      {post.image && (
        <Link href={postHref(post.title)} className="blog-card-media-link blog-card-media">
          <img src={post.image} alt={post.title} />
        </Link>
      )}
      <div className="blog-card-body">
        <CategoryChips categories={post.categories} />
        <h3 className="blog-card-title">
          <Link href={postHref(post.title)} className="blog-title-link">
            {post.title}
          </Link>
        </h3>
        <PostMetas author={post.author} date={post.date} readTime={post.readTime} />
        <Link href={postHref(post.title)} className="btn btn-primary btn-md">
          <span className="btn-fill"></span>
          <span className="btn-text">
            <span className="line line-normal">Read More</span>
            <span className="line line-hover">Read More</span>
          </span>
        </Link>
      </div>
    </article>
  );
}

function PopularPostItem({ post }: { post: BlogPost }) {
  return (
    <article className="blog-popular-item">
      {post.image ? (
        <Link href={postHref(post.title)} className="blog-popular-thumb">
          <img src={post.image} alt={post.title} loading="lazy" />
        </Link>
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

export default function PopularPosts() {
  return (
    <section className="section blog-section section-lightest">
      <div className="container">
        <div className="blog-header">
          <h2 className="s-title">Most Popular</h2>
          <Link className="s-link" href="#posts">
            View All
          </Link>
        </div>
        <div className="blog-featured">
          <FeaturedPost post={featuredPost} />
          <div className="blog-popular">
            {mostPopularPosts.map((post) => (
              <PopularPostItem key={post.title} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
