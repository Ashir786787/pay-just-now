import { blogPosts } from "@/components/blog/blog-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "5 Clever Ways to Shop Smarter with PayJustNow’s Pay in 3 - PayJustNow",
};

const article = {
  title: "5 Clever Ways to Shop Smarter with PayJustNow’s Pay in 3",
  category: "Misc",
  date: "August 2025",
  readTime: "3min",
  author: "Robyn Speelman",
  authorRole: "Financial Wellness Expert",
  authorImage:
    "https://payjustnow.com/wp-content/uploads/2025/02/image-7.jpg",
  image:
    "https://payjustnow.com/wp-content/uploads/2025/03/Frame-427319738-1.jpg",
};

const relatedPosts = blogPosts
  .filter((post) => post.title.includes("Lucky7") || post.title.includes("Takealot") || post.title.includes("Online Courses"))
  .slice(0, 3);

export default function CleverWaysArticlePage() {
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
                    <img width="300" height="225" alt="" src={article.image} />
                  </span>
                </figure>
              </div>
            </div>
            <div className="s-media desktop-only">
              <figure className="media-wrapper image-wrapper responsive">
                <span className="media-inner image-inner">
                  <img
                    width="1074"
                    height="804"
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
                    <a href="#1-set-a-goal-and-stay-intentional">
                      1: Set a goal and stay intentional
                    </a>
                  </li>
                  <li className="post-nav-item level-2">
                    <a href="#2-cover-the-must-haves-without-draining-your-account">
                      2: Cover the must-haves without draining your account
                    </a>
                  </li>
                  <li className="post-nav-item level-2">
                    <a href="#3-match-your-payments-to-your-payday">
                      3: Match your payments to your payday
                    </a>
                  </li>
                  <li className="post-nav-item level-2">
                    <a href="#4-grab-the-sale-dodge-the-splurge">
                      4: Grab the sale, dodge the splurge
                    </a>
                  </li>
                  <li className="post-nav-item level-2">
                    <a href="#5-budget-better-with-visibility">
                      5. Budget better with visibility
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>
            <div className="post-main">
              <div className="post-content">
                <p>
                  Is it just us, or is it getting expensive out there? With
                  rising food costs, everyday essentials, and trying to enjoy
                  life without going broke, keeping your budget in check can
                  be a full-time hustle. Luckily, you don’t have to do it all
                  on your own.
                </p>
                <p>
                  That’s right bestie — PayJustNow has your back! We’re all
                  about giving you the flexibility to plan better and stay in
                  control of your finances. Cos let’s face it girl, those
                  boots might be cute, but saving for a down payment on that
                  flat is cuter.
                </p>
                <p>
                  In the spirit of financial freedom, here are our top five
                  ways to make BNPL work harder for your budget.
                </p>
                <h2
                  className="post-heading"
                  id="1-set-a-goal-and-stay-intentional"
                >
                  1: Set a goal and stay intentional
                </h2>
                <p>
                  Impulse buying is tempting, especially when payday’s just
                  hit. But before you check out, ask yourself: is this serving
                  your big goal? Maybe yours is an emergency fund or saving up
                  for something meaningful. <br />
                  <br />
                  Stay on track by spreading costs in a way that keeps your
                  monthly budget balanced, so that you can get that home
                  refresh or hot, new tech without compromising on your
                  long-term goals.
                </p>
                <h2
                  className="post-heading"
                  id="2-cover-the-must-haves-without-draining-your-account"
                >
                  2: Cover the must-haves without draining your account
                </h2>
                <p>
                  Let’s face it, life doesn’t wait for your budget to catch
                  up. Groceries, school supplies or the inevitable car
                  emergency — there are times you need to act fast.
                </p>
                <p>
                  That’s where PayJustNow SHINES. Don’t worry about emptying
                  your account over that tyre — split the payments and soften
                  the blow.
                </p>
                <h2
                  className="post-heading"
                  id="3-match-your-payments-to-your-payday"
                >
                  3: Match your payments to your payday
                </h2>
                <p>
                  Ever had the sweats when that massive payment goes off at
                  once? Yeah, us too. Here’s the hack = set your instalment
                  date to after payday. That way, you control exactly how much
                  is going off, and when.
                </p>
                <p>
                  With Pay in 3, your instalments are equal and will be spaced
                  apart in a way that is predictable. No hidden fees, no
                  curveballs.
                </p>
                <h2
                  className="post-heading"
                  id="4-grab-the-sale-dodge-the-splurge"
                >
                  4: Grab the sale, dodge the splurge
                </h2>
                <p>
                  Caught a deal you don’t want to miss? Sales are great, but
                  big one-off spends can mess with your cashflow. Instead of
                  skipping it or maxing your card, use BNPL to lock it in and
                  pay over time.
                </p>
                <p>
                  That way, you still get the discount without putting strain
                  on your budget. Give yourself permission to get the goods
                  and save at the same time.
                </p>
                <h2
                  className="post-heading"
                  id="5-budget-better-with-visibility"
                >
                  5. Budget better with visibility
                </h2>
                <p>
                  One of the most underrated benefits of using BNPL? Clarity.
                  With PayJustNow, you know exactly what you owe and when.
                  It’s all laid out upfront — no surprises.
                </p>
                <p>
                  This helps you make better decisions, stick to your budget,
                  avoid last-minute stress, and manage your money confidently.
                </p>
                <h3 className="post-heading" id="the-final-verdict">
                  The final verdict?
                </h3>
                <p>
                  BNPL isn’t just about delaying payments. It’s about having
                  options, creating space between cash flow moments, and
                  building habits that help you get ahead. With PayJustNow,
                  you get the freedom to choose what works for your lifestyle
                  and your wallet. <br />
                  <br />
                  Ready to take control of your budget?{" "}
                  <a href="/register/overview">
                    Sign up today and download the PayJustNow
                  </a>{" "}
                  app to get started.
                </p>
              </div>

              <div className="post-sharing">
                <div className="sharing-content">
                  <h2 className="s-title">Share This Content</h2>
                  <div className="s-text"></div>
                </div>
                <div className="sharing">
                  <a className="social-btn" href="#">
                    <span className="social-btn-fill"></span>
                    <svg
                      className="icon"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.06526 5.92432H0.303711V17.9185H4.06526V5.92432Z"
                        fill="black"
                      />
                      <path
                        d="M14.2404 5.65859C14.1017 5.64126 13.9544 5.63259 13.807 5.62392C11.7009 5.53726 10.5135 6.78521 10.0975 7.32252C9.98481 7.46985 9.9328 7.55651 9.9328 7.55651V5.95324H6.33594V17.9474H9.9328H10.0975C10.0975 16.7255 10.0975 15.5122 10.0975 14.2902C10.0975 13.6316 10.0975 12.973 10.0975 12.3143C10.0975 11.4997 10.0368 10.6331 10.4442 9.88775C10.7909 9.26377 11.4149 8.95179 12.1169 8.95179C14.197 8.95179 14.2404 10.8324 14.2404 11.0057C14.2404 11.0144 14.2404 11.023 14.2404 11.023V17.9994H18.0019V10.1737C18.0019 7.49585 16.6412 5.91858 14.2404 5.65859Z"
                        fill="black"
                      />
                      <path
                        d="M2.18314 4.36831C3.3894 4.36831 4.36727 3.39054 4.36727 2.1844C4.36727 0.978258 3.3894 0.000488281 2.18314 0.000488281C0.976884 0.000488281 -0.000976562 0.978258 -0.000976562 2.1844C-0.000976562 3.39054 0.976884 4.36831 2.18314 4.36831Z"
                        fill="black"
                      />
                    </svg>
                    <span className="social-btn-text">LinkedIn</span>
                  </a>
                  <a className="social-btn" href="#">
                    <span className="social-btn-fill"></span>
                    <svg
                      className="icon"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.92683 10.465V18.0005H6.5524V10.465H3.74902V7.40951H6.5524V6.29782C6.5524 2.17061 8.23312 0.000488281 11.7893 0.000488281C12.8795 0.000488281 13.152 0.180222 13.749 0.326672V3.34886C13.0806 3.22904 12.8924 3.16247 12.1981 3.16247C11.3739 3.16247 10.9327 3.40212 10.5303 3.87475C10.128 4.34738 9.92683 5.16617 9.92683 6.33777V7.41617H13.749L12.7237 10.4716H9.92683V10.465Z"
                        fill="black"
                      />
                    </svg>
                    <span className="social-btn-text">Facebook</span>
                  </a>
                </div>
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