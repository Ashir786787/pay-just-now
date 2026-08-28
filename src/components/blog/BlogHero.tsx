"use client";

import { motion } from "framer-motion";
import { FormEvent } from "react";

export default function BlogHero({ title = "Our Press", description = "Tips, advice, news and more to run and grow your business." }: { title?: string; description?: string }) {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="border-b border-[#eef0f1] bg-white">
      <div className="site-container py-16 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h1 className="font-['Outfit'] text-4xl font-bold leading-tight text-black md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-500 md:text-xl">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="w-full max-w-xl"
          >
            <form
              onSubmit={handleSearch}
              role="search"
              className="flex items-center gap-3 rounded-full bg-[#F3F4F2] p-2 pl-5"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M27.6 29L21.3 22.7C20.8 23.1 20.225 23.4167 19.575 23.65C18.925 23.8833 18.2333 24 17.5 24C15.6833 24 14.1458 23.3708 12.8875 22.1125C11.6292 20.8542 11 19.3167 11 17.5C11 15.6833 11.6292 14.1458 12.8875 12.8875C14.1458 11.6292 15.6833 11 17.5 11C19.3167 11 20.8542 11.6292 22.1125 12.8875C23.3708 14.1458 24 15.6833 24 17.5C24 18.2333 23.8833 18.925 23.65 19.575C23.4167 20.8 23.1 21.3 22.7L29 27.6L27.6 29ZM17.5 22C18.75 22 19.8125 21.5625 20.6875 20.6875C21.5625 19.8125 22 18.75 22 17.5C22 16.25 21.5625 15.1875 20.6875 14.3125C19.8125 13.4375 18.75 13 17.5 13C16.25 13 15.1875 13.4375 14.3125 14.3125C13.4375 15.1875 13 16.25 13 17.5C13 18.75 13.4375 19.8125 14.3125 20.6875C15.1875 21.5625 16.25 22 17.5 22Z"
                  fill="black"
                />
              </svg>
              <label htmlFor="s" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="s"
                id="s"
                placeholder="Search"
                className="h-full flex-1 border-none bg-transparent text-base text-black outline-none placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-black/80"
              >
                Search
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}