"use client";

import { useState } from "react";

interface Deal {
  title: string;
  href: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  logo: string;
  dealPrefix: string;
  dealValue: string;
  expiry: string;
  type: "sale" | "discount";
  typeLabel: "Sale" | "Discount";
}

const deals: Deal[] = [
  {
    title: "Save Up To 35% on Selected Clothing",
    href: "https://monosimovements.co.za/collections/new-arrivals/new?utm_medium=app&utm_source=pjn&utm_campaign=monosiaug2024",
    image: "https://payjustnow.com/wp-content/uploads/2025/10/thumbnail_Thumbnail_1_10_e60d732d2c.png",
    imageWidth: 223,
    imageHeight: 156,
    logo: "https://payjustnow.com/wp-content/uploads/2025/10/thumbnail_LOGO_34_6a8ae014e1.png",
    dealPrefix: "Save up to",
    dealValue: "35%",
    expiry: "30/11/2025",
    type: "sale",
    typeLabel: "Sale",
  },
  {
    title: "Apple iPad 9.7 - Now R1099!",
    href: "https://techmarkit.co.za/collections/on-promo/products/apple-ipad-9-7-5th-gen-wifi-cell-32gb-space-grey-5?variant=46412917276925",
    image: "https://payjustnow.com/wp-content/uploads/2026/02/SM-X133NZAAAFA-NEW_5000x.jpg",
    imageWidth: 800,
    imageHeight: 800,
    logo: "https://payjustnow.com/wp-content/uploads/2025/10/thumbnail_280282383_111196474922072_8576718013889758734_n_2_c38808dcee.jpg",
    dealPrefix: "Save",
    dealValue: "R300",
    expiry: "28/02/2026",
    type: "discount",
    typeLabel: "Discount",
  },
  {
    title: "R350 OFF Flights! Choose from 600+Airlines. T&C's apply",
    href: "https://www.alternativeairlines.com/payjustnow?utm_medium=referral&utm_source=payjustnow&utm_campaign=deals",
    image: "https://payjustnow.com/wp-content/uploads/2025/10/Alternative-Airlines-background.png",
    imageWidth: 156,
    imageHeight: 156,
    logo: "https://payjustnow.com/wp-content/uploads/2025/10/Alternative-Airlines-logo-new.png",
    dealPrefix: "Get",
    dealValue: "R350 OFF",
    expiry: "30/11/2025",
    type: "sale",
    typeLabel: "Sale",
  },
  {
    title: "Sign Up & Get 25% Off Your First Purchase",
    href: "https://jockey.co.za/#footer-signup",
    image: "https://payjustnow.com/wp-content/uploads/2025/10/thumbnail_400x280_PX_3_3da52d6fec.jpg",
    imageWidth: 223,
    imageHeight: 156,
    logo: "https://payjustnow.com/wp-content/uploads/2025/10/thumbnail_500x500px_Jky_logo_b12234cf8e.png",
    dealPrefix: "Get",
    dealValue: "25% OFF",
    expiry: "30/11/2025",
    type: "discount",
    typeLabel: "Discount",
  },
];

function DealExpiryIcon() {
  return (
    <svg className="deal-expiry-date-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.50516 5.44791C4.76551 5.70825 5.18762 5.70825 5.44797 5.44791C5.70832 5.18756 5.70832 4.76545 5.44797 4.5051C5.18762 4.24475 4.76551 4.24475 4.50516 4.5051C4.24481 4.76545 4.24481 5.18756 4.50516 5.44791Z" fill="#394D00"></path>
      <path d="M2.61874 7.33359L2.61874 2.61954L7.33279 2.61954L14.4039 9.69061L9.68981 14.4047L2.61874 7.33359Z" stroke="#394D00" strokeWidth="1.25" strokeLinejoin="round"></path>
    </svg>
  );
}

export default function FeaturedDeals() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section section-light section-featured-deals">
      <div className="container">
        <div className="s-inner">
          <div className="s-content">
            <div className="s-title-wrapper">
              <h2 className="s-title">Deals</h2>
              <a className="s-link" href="#">
                View All
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-deals-wrapper">
        <div className="featured-deals glide">
          <div data-glide-el="track" className="glide__track">
            <div className="deals glide__slides" style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)`, transition: "transform 0.8s var(--ease)" }}>
              {deals.map((deal) => (
                <div key={deal.title} className="deal glide__slide">
                  <a className="deal-link" href={deal.href} aria-label={deal.title} target="_blank"></a>
                  <div className="deal-inner">
                    <div className="deal-media">
                      <div className="deal-image">
                        <figure className="media-wrapper image-wrapper responsive">
                          <span className="media-inner image-inner">
                            <img width={deal.imageWidth} height={deal.imageHeight} className="media image" alt={deal.title} src={deal.image} />
                          </span>
                        </figure>
                      </div>
                      <div className="deal-logo">
                        <figure className="media-wrapper image-wrapper">
                          <span className="media-inner image-inner">
                            <img width="156" height="156" className="media image" alt={deal.title} src={deal.logo} />
                          </span>
                        </figure>
                      </div>
                      <div className="deal-text">
                        <span className="deal-text-small">{deal.dealPrefix}</span>
                        <span className="deal-text-large">{deal.dealValue}</span>
                      </div>
                    </div>
                    <div className="deal-meta">
                      <div className="deal-expiry-date">
                        <DealExpiryIcon />
                        <span className="deal-expiry-date-text">{deal.expiry}</span>
                      </div>
                      <span className={`deal-type ${deal.type}`}>{deal.typeLabel}</span>
                    </div>
                    <h6 className="deal-title">{deal.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glide__bullets" data-glide-el="controls[nav]">
            {deals.map((deal, index) => (
              <button key={deal.title} className={`glide__bullet${index === activeIndex ? " glide__bullet--active" : ""}`} data-glide-dir={`=${index}`} onClick={() => setActiveIndex(index)} aria-label={`Show deal ${index + 1}`}></button>
            ))}
          </div>
          <div className="deals-cta">
            <a className="deals-cta-link" href="#"></a>
            <div className="deals-cta-inner">
              <div className="deals-cta-media">
                <div className="deals-cta-text">
                  <span className="deals-cta-text-small">Sign up for</span>
                  <span className="deals-cta-text-large">Exclusive Deals</span>
                </div>
                <div className="deals-cta-image">
                  <figure className="media-wrapper image-wrapper responsive">
                    <span className="media-inner image-inner">
                      <img width="667" height="559" className="media image" alt="" src="https://payjustnow.com/wp-content/uploads/2025/04/Card-4-1.jpg" />
                    </span>
                  </figure>
                </div>
              </div>
              <div className="deals-cta-title-wrapper">
                <div className="circle-fill"></div>
                <h4 className="deals-cta-title">
                  <span className="deals-cta-title-text split-line">
                    <span className="line line-normal">Sign up</span>
                    <span className="line line-hover">Sign up</span>
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}