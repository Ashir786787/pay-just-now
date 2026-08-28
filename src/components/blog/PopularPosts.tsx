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
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#f0f0f0] bg-white transition-shadow duration-300 hover:shadow-lg">
      {post.image && (
        <Link href={postHref(post.title)} className="relative block aspect-[4/3] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </Link>
      )}

      <div className="flex flex-1 flex-col items-start gap-4 p-6 md:p-8">
        <CategoryChips categories={post.categories} />
        <h3 id={postHref(post.title).slice(6)} className="font-['Outfit'] text-xl font-bold leading-snug text-black md:text-2xl">
          <Link href={postHref(post.title)} className="transition-colors hover:text-[#0C5765]">
            {post.title}
          </Link>
        </h3>
        <PostMetas
          author={post.author}
          date={post.date}
          readTime={post.readTime}
        />
        <Link
          href={postHref(post.title)}
          className="mt-2 inline-flex items-center rounded-full border border-black px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

function PopularPostItem({ post }: { post: BlogPost }) {
  return (
    <article className="flex items-start gap-5">
      {post.image ? (
        <Link
          href={postHref(post.title)}
          className="block h-20 w-20 shrink-0 overflow-hidden rounded-xl"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Link>
      ) : null}

      <div className="flex flex-col gap-2">
        <CategoryChips categories={post.categories} />
        <h3 id={postHref(post.title).slice(6)} className="font-['Outfit'] text-base font-bold leading-snug text-black">
          <Link href={postHref(post.title)} className="transition-colors hover:text-[#0C5765]">
            {post.title}
          </Link>
        </h3>
        <PostMetas
          author={post.author}
          date={post.date}
          readTime={post.readTime}
        />
      </div>
    </article>
  );
}

export default function PopularPosts() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FeaturedPost post={featuredPost} />

          <div className="flex flex-col gap-8">
            <h2 className="font-['Outfit'] text-3xl font-bold text-black md:text-4xl">
              Most Popular
            </h2>
            <ul className="flex flex-col">
              {mostPopularPosts.map((post, index) => (
                <li
                  key={post.title}
                  className={index > 0 ? "border-t border-[#f0f0f0] pt-8" : ""}
                  style={{ paddingBottom: index < mostPopularPosts.length - 1 ? "2rem" : "0" }}
                >
                  <PopularPostItem post={post} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}