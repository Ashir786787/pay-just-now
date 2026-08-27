"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface PaymentBreakdownProps {
  defaultTab: "payin3" | "payin12";
}

const payin3Items = [
  "3 payments.",
  "0% interest. No hidden fees.",
  "Pay 1/3 upfront at checkout.",
  "2 remaining payments, automatic on your salary date.",
  "Instant gratification, zero stress.",
  "Online or in-store with quick approval and QR scan.",
  "Perfect when you want it now but payday's still coming.",
];

const payin12Items = [
  "12 month payment period.",
  "Fair interest rate. Clear in-app breakdowns.",
  "First instalment paid on your next payday, then 11 monthly payments.",
  "11 remaining payments, spread evenly over the year. Payment goes off via debit order every month.",
  "Maximum flexibility for life's bigger moments.",
  "Online or in-store with instant approval and full in-app visibility.",
  "Perfect when you're making a big buy and want lighter monthly payments.",
];

export default function PaymentBreakdown({ defaultTab }: PaymentBreakdownProps) {
  const [activeTab, setActiveTab] = useState<"payin3" | "payin12">(defaultTab);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const items = activeTab === "payin3" ? payin3Items : payin12Items;

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="font-['Outfit'] text-3xl font-bold text-gray-900 md:text-4xl">
            Clever Payment Breakdown
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mt-10 flex justify-center gap-3"
        >
          <button
            onClick={() => setActiveTab("payin3")}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition-all ${
              activeTab === "payin3"
                ? "bg-[#BDF500] text-black shadow-sm"
                : "border border-gray-300 text-gray-600 hover:border-gray-400"
            }`}
          >
            Pay in 3
          </button>
          <button
            onClick={() => setActiveTab("payin12")}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition-all ${
              activeTab === "payin12"
                ? "bg-[#BDF500] text-black shadow-sm"
                : "border border-gray-300 text-gray-600 hover:border-gray-400"
            }`}
          >
            Pay in 12
          </button>
        </motion.div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col gap-5"
            >
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-4 rounded-xl bg-gray-50 px-6 py-5"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#BDF500]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-base leading-relaxed text-gray-700">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
