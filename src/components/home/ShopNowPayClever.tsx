"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "pay-in-3",
    label: "Pay in 3",
    badge: "Pay in 3",
    title: "Worry-free. Interest-free.",
    text: "Keep it simple. Pay in 3 and split your spend into 3 equal payments. 0% interest. No hidden fees. No stress.",
    image: "https://payjustnow.com/wp-content/uploads/2025/10/Card-Expand-_-Payment-Breakdown.svg",
  },
  {
    id: "pay-in-12",
    label: "Pay in 12",
    badge: "Pay in 12",
    title: "Level up, pay down.",
    text: "Some things shouldn't wait. Shop today, Pay in 12 and spread payments over a full year. Zero rush. Fair interest.",
    image: "https://payjustnow.com/wp-content/uploads/2025/10/pay-in-12-card.svg",
  },
] as const;

export default function ShopNowPayClever() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#eff1f1] py-20 lg:py-28">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark mb-4">
            Shop now. Pay clever.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Why stretch yourself when you can stretch your spend? Pay in 3 and
            keep it easy, or Pay in 12 for the clever long game.
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === index
                  ? "bg-primary text-black shadow-md"
                  : "bg-white text-gray-500 hover:text-text-dark border border-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="order-1 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].title}
                  width={356}
                  height={355}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="order-2 lg:order-2">
              <span className="inline-block px-4 py-1.5 bg-primary text-black text-xs font-bold rounded-full uppercase tracking-wide mb-5">
                {tabs[activeTab].badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-dark mb-4">
                {tabs[activeTab].title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
                {tabs[activeTab].text}
              </p>
              <Link
                href="#"
                className="inline-block px-8 py-3.5 bg-primary text-black font-semibold rounded-full hover:bg-primary-hover transition-colors text-sm"
              >
                Learn more
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => setActiveTab((prev) => (prev === 0 ? tabs.length - 1 : prev - 1))}
            className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-text-dark hover:text-text-dark transition-colors text-gray-400"
            aria-label="Previous tab"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  activeTab === index ? "w-8 bg-primary" : "w-2.5 bg-gray-300"
                }`}
                aria-label={`Go to ${tab.label}`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveTab((prev) => (prev === tabs.length - 1 ? 0 : prev + 1))}
            className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-text-dark hover:text-text-dark transition-colors text-gray-400"
            aria-label="Next tab"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
