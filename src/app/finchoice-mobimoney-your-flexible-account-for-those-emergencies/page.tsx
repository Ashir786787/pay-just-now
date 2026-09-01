import { blogPosts } from "@/components/blog/blog-data";

const article = {
  title: "Finchoice MobiMoney - your flexible account for those emergencies",
  category: "Misc",
  excerpt:
    "Get up to R10 000 and choose to repay over 1, 2 or 3 months. It's like a credit card on your phone. Activate today for free... for when you need it. Best part? Only start paying when you use it.",
  date: "March 2025",
  readTime: "1min",
  author: "Robyn Speelman",
  authorRole: "Financial Wellness Expert",
  authorImage:
    "https://payjustnow.com/wp-content/uploads/2025/02/image-7.jpg",
  image: "https://payjustnow.com/wp-content/uploads/2025/03/FC-MM.jpg",
  activateUrl: "https://finchoice.mobi/newloan?ref=PJNWebsiteMM",
};

const relatedPosts = blogPosts.slice(0, 3);

export default function MobiMoneyArticlePage() {
  return (
    <div id="post">
      <section className="section section-light section-post-hero">
        <div className="container">
          <div className="s-inner">
            <div className="s-content">
              <a href="/press" className="back-link">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 20V7.825L5.9 13.425L4.5 12L12.5 4L20.5 12L19.1 13.425L13.5 7.825V20H11.5Z"
                    fill="black"
                  />
                </svg>
                <span className="back-link-text">Back to Press</span>
              </a>
              <div className="categories">
                <span className="category misc">{article.category}</span>
              </div>
              <h1 className="s-title">{article.title}</h1>
              <p className="s-text">{article.excerpt}</p>
              <div className="metas">
                <span className="meta date">{article.date}</span>
                <span className="sep" aria-hidden="true">
                  •
                </span>
                <span className="meta read-time">{article.readTime}</span>
              </div>
              <div className="author">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img
                      width="182"
                      height="182"
                      alt={article.author}
                      src={article.authorImage}
                    />
                  </span>
                </figure>
                <div className="author-inner">
                  <h6 className="author-title">{article.author}</h6>
                  <span className="author-role">{article.authorRole}</span>
                </div>
              </div>
              <div className="s-media mobile-only">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img width="300" height="300" alt="" src={article.image} />
                  </span>
                </figure>
              </div>
              <div className="s-buttons actions">
                <a
                  className="btn btn-primary btn-md"
                  href={article.activateUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="btn-fill"></span>
                  <span className="btn-text">Activate MobiMoney</span>
                </a>
              </div>
            </div>
            <div className="s-media desktop-only">
              <figure className="media-wrapper image-wrapper responsive">
                <span className="media-inner image-inner">
                  <img
                    width="1000"
                    height="1000"
                    alt=""
                    src={article.image}
                  />
                </span>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light section-post-content">
        <div className="container">
          <div className="s-inner">
            <aside className="post-left">
              <nav className="post-nav desktop-only">
                <ul className="post-nav-list">
                  <li className="post-nav-item level-2">
                    <a href="#get-up-to-r10-000">
                      Get up to R10 000, for when you need it.
                    </a>
                  </li>
                  <li className="post-nav-item level-2">
                    <a href="#how-it-works">How it works</a>
                  </li>
                </ul>
              </nav>
            </aside>
            <div className="post-main">
              <div className="post-content">
                <h2
                  className="post-heading"
                  id="get-up-to-r10-000"
                >
                  Get up to R10 000, for when you need it.
                </h2>
                <p>
                  Get started for free and pay only for what you use! Enjoy
                  multiple monthly withdrawals, flexible repayment options over
                  1, 2, or 3 months, plus the convenience of buying airtime and
                  data. You can even pay for your purchases with scan to pay -
                  everything you need in one place!
                </p>
                <h2 className="post-heading" id="how-it-works">
                  How it works
                </h2>
                <ol>
                  <li>Open your MobiMoney account online in minutes.</li>
                  <li>
                    Accept DebiCheck mandate and upload required documents.
                  </li>
                  <li>Choose withdrawal amount and the repayment terms.</li>
                  <li>
                    Once approved, withdrawal payouts can take up to 12 hours.
                  </li>
                </ol>
                <a
                  className="btn btn-primary btn-md"
                  href={article.activateUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="btn-fill"></span>
                  <span className="btn-text">Activate MobiMoney</span>
                </a>
              </div>
              <div className="post-author">
                <h4 className="author-title">About the Author</h4>
                <div className="author-header">
                  <figure className="media-wrapper image-wrapper responsive">
                    <span className="media-inner image-inner">
                      <img
                        width="182"
                        height="182"
                        alt={article.author}
                        src={article.authorImage}
                      />
                    </span>
                  </figure>
                  <div className="author-header-inner">
                    <span className="author-name">{article.author}</span>
                    <span className="author-role">{article.authorRole}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light section-related-posts">
        <div className="container">
          <div className="s-inner">
            <div className="s-content">
              <h2 className="s-title">You might also like</h2>
              <a href="/press" className="btn btn-outline-dark btn-md">
                <span className="btn-fill"></span>
                <span className="btn-text">View Press</span>
              </a>
            </div>
            <div className="related-posts">
              {relatedPosts.map((post) => (
                <article className="post" key={post.title}>
                  {post.image && (
                    <a
                      href="/press"
                      className="media-wrapper image-wrapper responsive"
                    >
                      <span className="media-inner image-inner">
                        <img
                          width="300"
                          height="300"
                          alt=""
                          loading="lazy"
                          src={post.image}
                        />
                      </span>
                    </a>
                  )}
                  <div className="p-inner">
                    <div className="p-categories">
                      <span className="p-category misc">
                        {post.categories[0]}
                      </span>
                    </div>
                    <h3 className="p-title">
                      <a href="/press" className="p-title-link">
                        {post.title}
                      </a>
                    </h3>
                    <div className="p-metas">
                      <span className="p-meta p-author">{post.author}</span>
                      <span className="sep" aria-hidden="true">
                        •
                      </span>
                      <span className="p-meta p-date">{post.date}</span>
                      <span className="sep" aria-hidden="true">
                        •
                      </span>
                      <span className="p-meta p-read-time">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
