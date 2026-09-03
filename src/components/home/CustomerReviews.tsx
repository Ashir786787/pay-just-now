import { Fragment } from "react";
import {
  AppStoreRatingBadge,
  GooglePlayRatingBadge,
} from "@/components/icons/StoreRatingBadges";

const reviewList = [
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed-1.png",
    name: "Nadia Volschenk",
    text: "Molatedi was a great help to sort out my online ID verification. Quick and effortless! Great after sales service. Keep it up!",
    iconWide: false,
  },
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed-2.png",
    name: "Thandazwa Nzubenzinga",
    text: "what a smart and easy way to pay! No paper work needed its a quick quick and safe process to pay whatever you need.",
    iconWide: true,
  },
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed-4.png",
    name: "Hemiah Jr Khumalo",
    text: "Honestly just a great initiative - keeps you from having to use credit (store cards) and its associated interest and costs.",
    iconWide: false,
  },
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed.png",
    name: "Latricia Andrews",
    text: "Being able to pay in installments with no interest is a game-changer! It allowed me to buy something I needed without breaking the bank.",
    iconWide: false,
  },
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed-5.png",
    name: "Sulaiman Sathar",
    text: "Excellent services, always helpful, good provider, return policies are easy, tashreeq whom I've interacted with was awesome.",
    iconWide: true,
  },
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed-6.png",
    name: "Marian Rheinicke",
    text: "I've used PayJustNow for nearly 2 years, and have really appreciated the flexibility of making bigger purchases.",
    iconWide: true,
  },
];

const STAR_PATH =
  "M3.825 19.5156L5.45 12.4906L0 7.76562L7.2 7.14062L10 0.515625L12.8 7.14062L20 7.76562L14.55 12.4906L16.175 19.5156L10 15.7906L3.825 19.5156Z";

const QUOTE_ICON_NARROW =
  "M19.3638 0.016014C19.2958 -0.059986 16.8458 0.0460141 14.7139 2.36001C12.5819 4.67201 12.9099 7.32401 12.9578 7.39201C13.0058 7.46001 15.9979 7.56601 17.9079 4.87601C19.8179 2.18601 19.4318 0.094014 19.3638 0.016014ZM25.9918 23.482C25.8958 23.29 21.3419 21.014 21.7659 16.638C22.1898 12.26 25.1158 11.06 25.1618 10.93C25.2078 10.8 23.9678 9.35001 22.6538 8.61601C21.6891 8.09852 20.6213 7.80203 19.5278 7.74801C19.3118 7.74201 18.5618 7.55801 17.0198 7.98001C16.0038 8.25801 13.7138 9.15801 13.0838 9.19401C12.4518 9.23001 10.5718 8.15001 8.54985 7.86401C7.25585 7.61401 5.88385 8.12601 4.90185 8.52001C3.92185 8.91201 2.05785 10.028 0.753852 12.994C-0.550148 15.958 0.131852 20.654 0.619852 22.114C1.10785 23.572 1.86985 25.962 3.16585 27.706C4.31785 29.674 5.84585 31.04 6.48385 31.504C7.12185 31.968 8.92185 32.276 10.1699 31.638C11.1739 31.022 12.9858 30.668 13.7018 30.694C14.4158 30.72 15.8238 31.002 17.2659 31.772C18.4079 32.166 19.4878 32.002 20.5698 31.562C21.6518 31.12 23.2178 29.444 25.0458 26.046C25.7398 24.466 26.0558 23.612 25.9918 23.482Z";

const QUOTE_ICON_WIDE =
  "M19.3301 14.6437L5.53633 0.8125L23.0863 10.8875L19.3301 14.6437ZM1.93633 0C1.12383 0.425 0.580078 1.2 0.580078 2.20625V29.7875C0.580078 30.7937 1.12383 31.5687 1.93633 31.9937L17.9738 15.9937L1.93633 0ZM28.5113 14.1L24.8301 11.9687L20.7238 16L24.8301 20.0312L28.5863 17.9C29.7113 17.0062 29.7113 14.9937 28.5113 14.1ZM5.53633 31.1875L23.0863 21.1125L19.3301 17.3562L5.53633 31.1875Z";

function ReviewIcon({ wide }: { wide: boolean }) {
  return (
    <svg
      width={wide ? 30 : 26}
      height="32"
      viewBox={wide ? "0 0 30 32" : "0 0 26 32"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={wide ? QUOTE_ICON_WIDE : QUOTE_ICON_NARROW} fill="black" />
    </svg>
  );
}

function Stars() {
  return (
    <span className="review-rating-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={STAR_PATH} fill="#BDF500" />
        </svg>
      ))}
    </span>
  );
}

function ReviewImage({ review }: { review: (typeof reviewList)[number] }) {
  return (
    <div className="review review-image">
      <div className="review-inner">
        <figure className="media-wrapper image-wrapper responsive">
          <span className="media-inner image-inner">
            <img width="500" height="500" className="media image" alt="" src={review.image} />
          </span>
        </figure>
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviewList)[number] }) {
  return (
    <div className="review review-content">
      <div className="review-inner">
        <div className="review-icon">
          <ReviewIcon wide={review.iconWide} />
        </div>
        <div className="review-rating">
          <span className="review-rating-text">5/5</span>
          <Stars />
        </div>
        <span className="review-name">{review.name}</span>
        <p className="review-text">{review.text}</p>
      </div>
    </div>
  );
}

function BadgeStars() {
  return (
    <span className="badge-rating-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={STAR_PATH} fill="#BDF500" />
        </svg>
      ))}
    </span>
  );
}

export default function CustomerReviews() {
  return (
    <section className="section section-pad-top section-feedback">
      <div className="container">
        <div className="s-inner">
          <div className="s-content">
            <h2 className="s-title">What customers are saying</h2>
          </div>
          <div className="reviews">
            <div className="reviews-row reviews-row-top">
              {reviewList.map((review, index) => (
                <Fragment key={review.name}>
                  <ReviewImage review={review} />
                  <ReviewCard review={review} />
                </Fragment>
              ))}
            </div>
            <div className="badges">
              <div className="badge">
                <div className="badge-rating">
                  <span className="badge-rating-text">5/5</span>
                  <BadgeStars />
                </div>
                <div className="badge-reviews">
                  <span className="badge-amount">187 reviews on </span>
                  <a className="badge-button" href="#">
                    <AppStoreRatingBadge />
                  </a>
                </div>
              </div>
              <div className="badge">
                <div className="badge-rating">
                  <span className="badge-rating-text">5/5</span>
                  <BadgeStars />
                </div>
                <div className="badge-reviews">
                  <span className="badge-amount">187 reviews on </span>
                  <a className="badge-button" href="#">
                    <GooglePlayRatingBadge />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
