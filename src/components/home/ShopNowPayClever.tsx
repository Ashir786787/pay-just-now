"use client";

import { useState } from "react";

const budgetSlides = [
  {
    id: "pay-in-3",
    label: "Pay in 3",
    href: "/payin3",
    title: "Worry-free. Interest-free.",
    text: "Keep it simple. Pay in 3 and split your spend into 3 equal payments. 0% interest. No hidden fees. No stress.",
    image: "https://payjustnow.com/wp-content/uploads/2025/10/Card-Expand-_-Payment-Breakdown.svg",
  },
  {
    id: "pay-in-12",
    label: "Pay in 12",
    href: "/payin12",
    title: "Level up, pay down.",
    text: "Some things shouldn't wait. Shop today, Pay in 12 and spread payments over a full year. Zero rush. Fair interest.",
    image: "https://payjustnow.com/wp-content/uploads/2025/10/pay-in-12-card.svg",
  },
] as const;

export default function ShopNowPayClever() {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeSlide = (nextIndex: number) => {
    setActiveIndex((nextIndex + budgetSlides.length) % budgetSlides.length);
  };

  return (
    <section className="section section-light section-budget">
      <div className="container">
        <div className="s-inner">
          <div className="s-content">
            <h2 className="s-title">Shop now. Pay clever.</h2>
            <p className="s-text">
              Why stretch yourself when you can stretch your spend? Pay in 3 and keep it easy, or Pay in 12 for
              the clever long game.
            </p>
          </div>
        </div>
      </div>
      <div className="budget-carousel glide">
        <div className="budget-carousel-nav" data-glide-el="controls">
          <div className="budget-carousel-item-names">
            {budgetSlides.map((slide, index) => (
              <button key={slide.id} type="button" onClick={() => changeSlide(index)} className={`budget-carousel-item-name${index === activeIndex ? " active" : ""}`}>
                {slide.label}
              </button>
            ))}
          </div>
          <button
            aria-label="prev"
            className="budget-carousel-nav-item arrow-btn prev glide__arrow--disabled"
            data-glide-dir="&lt;"
            onClick={() => changeSlide(activeIndex - 1)}
            disabled={activeIndex === 0}
          >
            <span className="arrow-thin-left">
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="1" width="39" height="39" rx="19.5" stroke="black"></rect>
                <path d="M15.825 21.5L21.425 27.1L20 28.5L12 20.5L20 12.5L21.425 13.9L15.825 19.5H28V21.5H15.825Z" fill="black"></path>
              </svg>
            </span>
          </button>
          <button aria-label="next" className="budget-carousel-nav-item arrow-btn next" data-glide-dir="&gt;" onClick={() => changeSlide(activeIndex + 1)} disabled={activeIndex === budgetSlides.length - 1}>
            <span className="arrow-thin-right">
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="1" width="39" height="39" rx="19.5" stroke="black"></rect>
                <path d="M24.175 19.5L18.575 13.9L20 12.5L28 20.5L20 28.5L18.575 27.1L24.175 21.5L12 21.5L12 19.5L24.175 19.5Z" fill="black"></path>
              </svg>
            </span>
          </button>
          <div className="glide__bullets budget-carousel-dots" data-glide-el="controls[nav]">
            {budgetSlides.map((slide, index) => (
              <button
                key={slide.id}
                className={`glide__bullet budget-carousel-dot${index === activeIndex ? " glide__bullet--active" : ""}`}
                data-glide-dir={`=${index}`}
                onClick={() => changeSlide(index)}
              ></button>
            ))}
          </div>
        </div>
        <div className="budget-carousel-wrapper glide__track" data-glide-el="track">
          <div className="budget-carousel-inner glide__slides" style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)`, transition: "transform 0.8s var(--ease)" }}>
            {budgetSlides.map((slide, index) => (
              <div key={slide.id} className={`budget-item glide__slide ${slide.id}${index === 0 ? " glide__slide--active" : ""}`}>
                <div className="content-grid content-grid-light content-grid-four">
                  <div className="cg-row">
                    <div className="cg-item cg-item-content">
                      <span className="label label-primary">{slide.label}</span>
                      <h2 className="budget-item-title">{slide.title}</h2>
                      <p className="budget-item-text">{slide.text}</p>
                      <div className="s-buttons">
                        <a href={slide.href} className="btn btn-primary btn-md " target="_self">
                          <span className="btn-fill"></span>
                          <span className="btn-text">
                            <span className="line line-normal">Learn more</span>
                            <span className="line line-hover">Learn more</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="cg-item cg-item-media">
                      <figure className="media-wrapper image-wrapper responsive">
                        <span className="media-inner image-inner">
                          <img src={slide.image} alt="" width="356" height="355" />
                        </span>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}