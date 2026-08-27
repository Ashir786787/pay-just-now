"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/03/24px.svg",
    title: "Flexible payments",
    text: "Spread your spend over 3 or 12 months. Pay in 3 is interest-free. Pay in 12 gives extra time with a little interest.",
  },
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/instant-refund.svg",
    title: "Instant-refund Wallet",
    text: "Returns go straight into your PayJustNow Wallet…no waiting, no hassle - ready to spend again.",
  },
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/03/24px-2.svg",
    title: "Clever shopping, every time",
    text: "Fast approvals, secure QR checkout, exclusive offers, and in-app support.",
  },
];

export default function WhyChooseClever() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="site-container">
        <div className="grid items-start gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          {/* Left column — featured content */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-8 lg:sticky lg:top-28"
          >
            <div className="flex flex-col gap-5">
              <h2 className="font-['Outfit'] text-4xl font-bold leading-tight text-black md:text-5xl">
                Why choose Clever?
              </h2>
              <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                Over clunky checkouts, delayed refunds, and the brands you love
                being off-limits? Say hello to The Clever Way.
              </p>
            </div>

            <div>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[#BDF500] px-10 py-4 text-sm font-semibold text-black transition-transform hover:scale-105"
              >
                Sign Up
              </Link>
            </div>
          </motion.div>

          {/* Right column — video + feature cards, 2-col grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <video
                src="https://payjustnow.com/wp-content/uploads/2023/12/home.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.12,
                  ease: "easeOut",
                }}
                className="flex flex-col gap-4 rounded-2xl bg-[#f6f8f2] p-6"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={feature.icon}
                  alt=""
                  className="h-8 w-8"
                />
                <h3 className="font-['Outfit'] text-lg font-bold text-black">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
