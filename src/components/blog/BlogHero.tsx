"use client";

import { FormEvent } from "react";

export default function BlogHero({
  title = "Our Press",
  description = "Tips, advice, news and more to run and grow your business.",
}: {
  title?: string;
  description?: string;
}) {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="section section-light section-blog-hero">
      <div className="container">
        <div className="s-inner">
          <div className="s-content">
            <h1 className="s-title">{title}</h1>
            <p className="s-text">{description}</p>
          </div>
          <div className="search">
            <form onSubmit={handleSearch} role="search" className="search-form">
              <div className="field">
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    d="M27.6 29L21.3 22.7C20.8 23.1 20.225 23.4167 19.575 23.65C18.925 23.8833 18.2333 24 17.5 24C15.6833 24 14.1458 23.3708 12.8875 22.1125C11.6292 20.8542 11 19.3167 11 17.5C11 15.6833 11.6292 14.1458 12.8875 12.8875C14.1458 11.6292 15.6833 11 17.5 11C19.3167 11 20.8542 11.6292 22.1125 12.8875C23.3708 14.1458 24 15.6833 24 17.5C24 18.2333 23.8833 18.925 23.65 19.575C23.4167 20.225 23.1 20.8 22.7 21.3L29 27.6L27.6 29ZM17.5 22C18.75 22 19.8125 21.5625 20.6875 20.6875C21.5625 19.8125 22 18.75 22 17.5C22 16.25 21.5625 15.1875 20.6875 14.3125C19.8125 13.4375 18.75 13 17.5 13C16.25 13 15.1875 13.4375 14.3125 14.3125C13.4375 15.1875 13 16.25 13 17.5C13 18.75 13.4375 19.8125 14.3125 20.6875C15.1875 21.5625 16.25 22 17.5 22Z"
                    fill="black"
                  />
                </svg>
                <label htmlFor="blog-search" className="field-label sr-only">
                  <span className="field-label-inner">Search</span>
                </label>
                <input type="text" name="s" id="blog-search" className="field-input" />
              </div>
              <button type="submit" className="btn btn-dark">
                <span className="btn-fill"></span>
                <span className="btn-text">
                  <span className="line line-normal">Search</span>
                  <span className="line line-hover">Search</span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
