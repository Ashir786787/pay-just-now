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
  const parts = [author, date, readTime].filter((part) => part.trim());
  let index = -1;
  return (
    <p className="blog-card-meta">
      {parts.map((part) => {
        index += 1;
        return (
          <span key={part}>
            {index > 0 && (
              <span className="blog-card-meta-sep" aria-hidden="true">
                •
              </span>
            )}
            {part}
          </span>
        );
      })}
    </p>
  );
}

export default function BlogPostCard({
  post,
  onPlay,
}: {
  post: BlogPost;
  onPlay?: (post: BlogPost) => void;
}) {
  const isVideo = Boolean(post.youtubeId);
  return (
    <article className="blog-card">
      {post.image ? (
        isVideo && onPlay ? (
          <button
            type="button"
            className={`blog-card-media-link blog-card-media${
              isVideo ? " blog-card-media-video" : ""
            }`}
            onClick={() => onPlay(post)}
            aria-label={`Play ${post.title}`}
          >
            <img
              src={post.videoThumb || post.image}
              alt={post.title}
              loading="lazy"
            />
            {isVideo && (
              <span className="blog-card-play" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </span>
            )}
          </button>
        ) : (
          <a
            href={postHref(post.title)}
            className={`blog-card-media-link blog-card-media${
              isVideo ? " blog-card-media-video" : ""
            }`}
          >
            <img
              src={post.videoThumb || post.image}
              alt={post.title}
              loading="lazy"
            />
            {isVideo && (
              <span className="blog-card-play" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </span>
            )}
          </a>
        )
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
