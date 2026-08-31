"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  faqs: FaqItem[];
  showCta?: boolean;
}

export default function FaqSection({ title, faqs, showCta = true }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section section-light section-faqs">
      <div className="container-sm">
        <h1 className="s-title">
          {title.split(" ").length > 4 ? (
            <>
              {title.split(" ").slice(0, 3).join(" ")} <br />
              {title.split(" ").slice(3).join(" ")}
            </>
          ) : (
            title
          )}
        </h1>

        <div className="faqs">
          <div className="accordions">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`accordion${openIndex === index ? " active" : ""}`}
              >
                <div
                  className="accordion-header"
                  onClick={() => toggle(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggle(index);
                    }
                  }}
                >
                  <h6 className="accordion-title">{faq.question}</h6>
                  <span className="accordion-toggle" aria-hidden="true">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </div>
                <div className="accordion-body">
                  <div className="accordion-text">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="chatbot">
            <div className="chatbot-icon">
              <figure className="media-wrapper image-wrapper">
                <span className="media-inner image-inner">
                  <img
                    width="40"
                    height="40"
                    className="media image"
                    alt=""
                    src="https://payjustnow.com/wp-content/uploads/2025/10/Group-2.svg"
                  />
                </span>
              </figure>
            </div>
            <h6 className="chatbot-title">Have more questions?</h6>
            <p className="chatbot-text">
              No problem, we&apos;ve got answers! Use our chatbot for quick
              answers to our most common queries or contact us directly.
            </p>
            <a href="/support#faq" className="btn btn-outline-light btn-md btn-chatbot">
              <span className="btn-fill"></span>
              <span className="btn-text">Chatbot</span>
            </a>
          </div>
        </div>
      </div>

      {showCta && (
        <div className="container">
          <div className="cta">
            <div className="cta-bg" aria-hidden="true"></div>
            <h5 className="cta-title">
              Didn&apos;t find what you&apos;re looking for?
            </h5>
            <a
              href="https://community.payjustnow.com/support/solutions"
              className="btn btn-dark btn-md"
            >
              <span className="btn-fill"></span>
              <span className="btn-text">
                <span className="line line-normal">Visit our Knowledge Base</span>
                <span className="line line-hover">Visit our Knowledge Base</span>
              </span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
