import { BlogPost, postHref } from "./blog-data";

export function CategoryChips({ categories }: { categories: string[] }) {
  return (
    <div className="blog-card-categories">
      {categories.map((category, index) => (
        <span
          key={category}
          className={`blog-card-category${index === 0 ? " is-primary" : ""}`}
        >
          {category}
        </span>
      ))}
    </div>
  );
}

export function PostMetas({
  author,
  date,
  readTime,
}: {
  author: string;
  date: string;
  readTime: string;
}) {
  return (
    <p className="blog-card-meta">
      <span className="blog-card-author">{author}</span>
      <span className="blog-card-meta-sep" aria-hidden="true">
        •
      </span>
      <span>{date}</span>
      <span className="blog-card-meta-sep" aria-hidden="true">
        •
      </span>
      <span>{readTime}</span>
    </p>
  );
}

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="blog-card">
      {post.image ? (
        <a href={postHref(post.title)} className="blog-card-media-link blog-card-media">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
          />
        </a>
      ) : (
        <div className="blog-card-media" aria-hidden="true"></div>
      )}
      <div className="blog-card-body">
        <CategoryChips categories={post.categories} />
        <h3 className="blog-card-title">
          <a href={postHref(post.title)} className="blog-title-link">
            {post.title}
          </a>
        </h3>
        <PostMetas author={post.author} date={post.date} readTime={post.readTime} />
      </div>
    </article>
  );
}
