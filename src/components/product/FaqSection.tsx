"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  faqs: FaqItem[];
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function FaqSection({ title, faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="font-['Outfit'] text-3xl font-bold text-gray-900 md:text-4xl">
            {title}
          </h2>
        </motion.div>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
              className="overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 text-base font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="shrink-0 text-gray-400">
                  <ChevronIcon open={openIndex === index} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="border-t border-gray-100 px-6 pb-5 pt-4 text-sm leading-relaxed text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 rounded-2xl bg-white p-8 text-center shadow-sm md:p-10"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://payjustnow.com/wp-content/uploads/2025/10/Group-2.svg"
            alt=""
            className="mx-auto mb-5 h-12 w-12"
          />
          <h3 className="font-['Outfit'] text-xl font-bold text-gray-900">
            Have more questions?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-500">
            No problem, we&apos;ve got answers! Use our chatbot for quick answers
            to our most common queries or contact us directly.
          </p>
          <a
            href="/support#faq"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#BDF500] px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Chatbot
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500">
            Didn&apos;t find what you&apos;re looking for?
          </p>
          <a
            href="mailto:hello@payjustnow.com"
            className="mt-3 inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400"
          >
            Visit our Knowledge Base
          </a>
        </motion.div>
      </div>
    </section>
  );
}
