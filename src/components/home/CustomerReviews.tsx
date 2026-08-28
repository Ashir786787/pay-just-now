import Image from "next/image";
import { AppStoreButton, GooglePlayButton } from "@/components/icons/StoreBadges";

const reviews = [
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed-1.png",
    name: "Nadia Volschenk",
    text: "Molatedi was a great help to sort out my online ID verification. Quick and effortless! Great after sales service. Keep it up!",
  },
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed-2.png",
    name: "Thandazwa Nzubenzinga",
    text: "What a smart and easy way to pay! No paperwork needed, it is a quick and safe process to pay for whatever you need.",
  },
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed-4.png",
    name: "Hemiah Jr Khumalo",
    text: "Honestly just a great initiative. It keeps you from having to use credit and its associated interest and costs.",
  },
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed.png",
    name: "Latricia Andrews",
    text: "Being able to pay in instalments with no interest is a game-changer. It allowed me to buy something I needed without breaking the bank.",
  },
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed-5.png",
    name: "Sulaiman Sathar",
    text: "Excellent services, always helpful, good provider, return policies are easy. Tashreeq was awesome.",
  },
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed-6.png",
    name: "Marian Rheinicke",
    text: "I've used PayJustNow for nearly 2 years, and have really appreciated the flexibility of making bigger purchases.",
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="review-marquee-review">
      <span className="review-store-mark" aria-hidden="true">▶</span>
      <div className="review-marquee-rating"><strong>5/5</strong><span>★★★★★</span></div>
      <h3>{review.name}</h3>
      <p>{review.text}</p>
    </article>
  );
}

function ReviewSet() {
  return (
    <div className="review-marquee-set">
      {reviews.map((review) => (
        <div className="review-marquee-pair" key={review.name}>
          <div className="review-marquee-image"><Image src={review.image} alt={review.name} width={500} height={500} /></div>
          <ReviewCard review={review} />
        </div>
      ))}
    </div>
  );
}

function StoreRating({ href, badge, store }: { href: string; badge: React.ReactNode; store: string }) {
  return (
    <a className="review-store-rating" href={href} target="_blank" rel="noopener noreferrer">
      <div><strong>5/5</strong><span>★★★★★</span></div>
      <div className="review-store-rating-badge"><small>187 reviews on</small>{badge}</div>
      <span className="sr-only">Open {store}</span>
    </a>
  );
}

export default function CustomerReviews() {
  return (
    <section className="reviews-section">
      <div className="reviews-section-inner">
        <h2>What customers are saying</h2>
        <div className="reviews-marquee">
          <div className="reviews-marquee-track"><ReviewSet /><ReviewSet /></div>
        </div>
        <div className="reviews-store-ratings">
          <StoreRating href="https://apps.apple.com/za/app/payjustnow/id1542974651" store="the App Store" badge={<AppStoreButton />} />
          <StoreRating href="https://play.google.com/store/apps/details?id=com.payjustnow" store="Google Play" badge={<GooglePlayButton />} />
        </div>
      </div>
    </section>
  );
}
