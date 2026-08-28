import { BlogPost, postHref } from "./blog-data";

export function CategoryChips({ categories }: { categories: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <span
          key={category}
          className={
            category === "Fashion"
              ? "rounded-full bg-[#0C5765] px-3 py-1 text-xs font-semibold text-white"
              : "rounded-full bg-[#BDF500] px-3 py-1 text-xs font-semibold text-black"
          }
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
    <p className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
      <span className="font-medium text-gray-600">{author}</span>
      <span aria-hidden="true">•</span>
      <span>{date}</span>
      <span aria-hidden="true">•</span>
      <span>{readTime}</span>
    </p>
  );
}

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#f0f0f0] bg-white transition-shadow duration-300 hover:shadow-lg">
      {post.image && (
        <a href={postHref(post.title)} className="relative block aspect-[4/3] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </a>
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        <CategoryChips categories={post.categories} />
        <h3 id={postHref(post.title).slice(6)} className="font-['Outfit'] text-lg font-bold leading-snug text-black">
          <a href={postHref(post.title)} className="transition-colors hover:text-[#0C5765]">
            {post.title}
          </a>
        </h3>
        <div className="mt-auto pt-2">
          <PostMetas
            author={post.author}
            date={post.date}
            readTime={post.readTime}
          />
        </div>
      </div>
    </article>
  );
}