"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface Deal {
  title: string;
  storeName: string;
  image: string;
  logo: string;
  dealPrefix: string;
  dealValue: string;
  expiry: string;
  type: "Sale" | "Discount";
}

const deals: Deal[] = [
  {
    title: "Save Up To 35% on Selected Clothing",
    storeName: "Monosi Movements",
    image:
      "https://payjustnow.com/wp-content/uploads/2025/10/thumbnail_Thumbnail_1_10_e60d732d2c.png",
    logo: "https://payjustnow.com/wp-content/uploads/2025/10/thumbnail_LOGO_34_6a8ae014e1.png",
    dealPrefix: "Save up to",
    dealValue: "35%",
    expiry: "30/11/2025",
    type: "Sale",
  },
  {
    title: "Apple iPad 9.7 - Now R1099!",
    storeName: "Techmarkit",
    image:
      "https://payjustnow.com/wp-content/uploads/2026/02/SM-X133NZAAAFA-NEW_5000x.jpg",
    logo: "https://payjustnow.com/wp-content/uploads/2025/10/thumbnail_280282383_111196474922072_8576718013889758734_n_2_c38808dcee.jpg",
    dealPrefix: "Save",
    dealValue: "R300",
    expiry: "28/02/2026",
    type: "Discount",
  },
  {
    title: "R350 OFF Flights!",
    storeName: "Alternative Airlines",
    image:
      "https://payjustnow.com/wp-content/uploads/2025/10/Alternative-Airlines-background.png",
    logo: "https://payjustnow.com/wp-content/uploads/2025/10/Alternative-Airlines-logo-new.png",
    dealPrefix: "Get",
    dealValue: "R350 OFF",
    expiry: "30/11/2025",
    type: "Sale",
  },
  {
    title: "Sign Up & Get 25% Off Your First Purchase",
    storeName: "Jockey",
    image:
      "https://payjustnow.com/wp-content/uploads/2025/10/thumbnail_400x280_PX_3_3da52d6fec.jpg",
    logo: "https://payjustnow.com/wp-content/uploads/2025/10/thumbnail_500x500px_Jky_logo_b12234cf8e.png",
    dealPrefix: "Get",
    dealValue: "25% OFF",
    expiry: "30/11/2025",
    type: "Discount",
  },
];

function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function DealCard({ deal }: { deal: Deal }) {
  return (
    <Link
      href="#"
      className="group relative flex min-w-[280px] flex-col overflow-hidden rounded-2xl bg-gray-100 sm:min-w-[320px]"
    >
      <div className="relative h-[200px] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={deal.image}
          alt={deal.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Logo */}
        <div className="absolute left-3 top-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={deal.logo}
            alt={`${deal.storeName} logo`}
            className="h-10 w-10 rounded-lg bg-white/90 p-1 object-contain backdrop-blur-sm"
          />
        </div>

        {/* Deal text overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-xs font-medium text-white/80">{deal.dealPrefix}</p>
          <p className="text-3xl font-extrabold text-white leading-tight">
            {deal.dealValue}
          </p>
        </div>
      </div>

      {/* Bottom meta */}
      <div className="flex items-center justify-between bg-white p-4">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <CalendarIcon />
            {deal.expiry}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              deal.type === "Sale"
                ? "bg-[#BDF500] text-black"
                : "bg-[#0C5765] text-white"
            }`}
          >
            {deal.type}
          </span>
        </div>
      </div>

      <div className="border-t border-gray-100 px-4 py-3">
        <p className="text-sm font-semibold text-black">{deal.title}</p>
      </div>
    </Link>
  );
}

export default function FeaturedDeals() {
  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = 320 + 20;
    container.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = 320 + 20;
      const index = Math.round(container.scrollLeft / cardWidth);
      setActiveDot(Math.min(index, deals.length - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#eff1f1] py-16 md:py-24">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Heading */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-['Outfit'] text-3xl font-bold text-black md:text-4xl">
              Deals
            </h2>
            <Link
              href="#"
              className="text-sm font-semibold text-[#0C5765] underline-offset-4 hover:underline"
            >
              View All
            </Link>
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-none md:overflow-visible md:pb-0 lg:grid lg:grid-cols-4 lg:gap-6"
            style={{ scrollbarWidth: "none" }}
          >
            {deals.map((deal) => (
              <DealCard key={deal.title} deal={deal} />
            ))}
          </div>

          {/* Dot indicators */}
          <div className="mt-6 flex items-center justify-center gap-2 lg:hidden">
            {deals.map((deal, index) => (
              <button
                key={deal.title}
                onClick={() => scrollToIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  activeDot === index
                    ? "w-8 bg-[#BDF500]"
                    : "w-2.5 bg-gray-300"
                }`}
                aria-label={`Go to deal ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 overflow-hidden rounded-2xl bg-[#f6f8f2]"
        >
          <div className="flex flex-col items-center gap-6 p-8 md:flex-row md:justify-between md:p-10">
            <div className="text-center md:text-left">
              <h3 className="font-['Outfit'] text-2xl font-bold text-black md:text-3xl">
                Sign up for Exclusive Deals
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Be the first to know about our latest offers and discounts.
              </p>
              <Link
                href="#"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#BDF500] px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105"
              >
                Sign up
              </Link>
            </div>
            <div className="relative h-[200px] w-full max-w-[400px] shrink-0 overflow-hidden rounded-xl md:h-[240px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://payjustnow.com/wp-content/uploads/2025/04/Card-4-1.jpg"
                alt="Exclusive deals"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
