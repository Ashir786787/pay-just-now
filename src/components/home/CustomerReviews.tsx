"use client";

import { motion } from "framer-motion";
import {
  AppStoreButton,
  GooglePlayButton,
} from "@/components/icons/StoreBadges";

interface Review {
  image: string;
  name: string;
  text: string;
}

const reviews: Review[] = [
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed-1.png",
    name: "Nadia Volschenk",
    text: "Molatedi was a great help to sort out my online ID verification. Quick and effortless! Great after sales service. Keep it up!",
  },
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed-2.png",
    name: "Thandazwa Nzubenzinga",
    text: "what a smart and easy way to pay! No paper work needed its a quick quick and safe process to pay whatever you need.",
  },
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed-4.png",
    name: "Hemiah Jr Khumalo",
    text: "Honestly just a great initiative - keeps you from having to use credit (store cards) and its associated interest and costs.",
  },
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed.png",
    name: "Latricia Andrews",
    text: "Being able to pay in installments with no interest is a game-changer! It allowed me to buy something I needed without breaking the bank.",
  },
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed-5.png",
    name: "Sulaiman Sathar",
    text: "Excellent services, always helpful, good provider, return policies are easy, tashreeq whom I've interacted with was awesome.",
  },
  {
    image: "https://payjustnow.com/wp-content/uploads/2025/10/unnamed-6.png",
    name: "Marian Rheinicke",
    text: "I've used PayJustNow for nearly 2 years, and have really appreciated the flexibility of making bigger purchases.",
  },
];

function ReviewIcon() {
  return (
    <svg
      width="30"
      height="32"
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M19.3301 14.6437L5.53633 0.8125L23.0863 10.8875L19.3301 14.6437ZM1.93633 0C1.12383 0.425 0.580078 1.2 0.580078 2.20625V29.7875C0.580078 30.7937 1.12383 31.5687 1.93633 31.9937L17.9738 15.9937L1.93633 0ZM28.5113 14.1L24.8301 11.9687L20.7238 16L24.8301 20.0312L28.5863 17.9C29.7113 17.0062 29.7113 14.9937 28.5113 14.1ZM5.53633 31.1875L23.0863 21.1125L19.3301 17.3562L5.53633 31.1875Z"
        fill="black"
      />
    </svg>
  );
}

function Star({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.825 19.5156L5.45 12.4906L0 7.76562L7.2 7.14062L10 0.515625L12.8 7.14062L20 7.76562L14.55 12.4906L16.175 19.5156L10 15.7906L3.825 19.5156Z"
        fill="#BDF500"
      />
    </svg>
  );
}

function ReviewRow({ review, index }: { review: Review; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center gap-8 md:flex-row md:gap-14 ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full max-w-[320px] shrink-0 md:max-w-[340px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={review.image}
          alt={review.name}
          className="aspect-square w-full rounded-[28px] object-cover"
        />
      </div>

      <div className="flex-1">
        <ReviewIcon />

        <div className="mt-4 flex items-center gap-2">
          <span className="font-['Outfit'] text-2xl font-bold text-black md:text-3xl">
            5/5
          </span>
          <span className="flex items-center gap-1">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </span>
        </div>

        <p className="font-['Outfit'] mt-5 text-base font-semibold text-black md:text-lg">
          {review.name}
        </p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600 md:text-base">
          {review.text}
        </p>
      </div>
    </motion.div>
  );
}

function StoreBadge({
  name,
  amount,
  badge,
}: {
  name: string;
  amount: string;
  badge: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-5">
      <div>
        <span className="font-['Outfit'] block text-center text-3xl font-bold text-black">
          5/5
        </span>
        <span className="mt-2 flex items-center gap-1">
          <Star className="h-4 w-4" />
          <Star className="h-4 w-4" />
          <Star className="h-4 w-4" />
          <Star className="h-4 w-4" />
          <Star className="h-4 w-4" />
        </span>
      </div>
      <div>
        <span className="block text-sm font-medium text-gray-500">
          {amount} on {name}
        </span>
        <a
          href="#"
          className="mt-3 inline-block overflow-hidden rounded-lg bg-black p-2 transition-transform hover:scale-[1.03]"
        >
          {badge}
        </a>
      </div>
    </div>
  );
}

export default function CustomerReviews() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-['Outfit'] text-3xl font-bold text-black md:text-4xl">
            What customers are saying
          </h2>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {reviews.map((review, index) => (
            <ReviewRow key={review.name} review={review} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-16"
        >
          <StoreBadge
            amount="187 reviews"
            name="the App Store"
            badge={<AppStoreButton className="block h-7 w-auto" />}
          />
          <StoreBadge
            amount="187 reviews"
            name="Google Play"
            badge={<GooglePlayButton className="block h-7 w-auto" />}
          />
        </motion.div>
      </div>
    </section>
  );
}