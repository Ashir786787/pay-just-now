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
    <section className="section section-light section-hero">
      <div className="container">
        <div className="s-inner">
          <div className="s-content">
            <h1 className="s-title">{title}</h1>
            <p className="s-text">{description}</p>
            <form onSubmit={handleSearch} role="search" className="blog-search">
              <label htmlFor="blog-search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="s"
                id="blog-search"
                placeholder="Search"
                className="blog-search-input"
              />
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
