"use client";

import { useState } from "react";

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

export default function PaymentBreakdown({
  defaultTab,
}: PaymentBreakdownProps) {
  const [activeTab, setActiveTab] = useState<"payin3" | "payin12">(defaultTab);

  const tabs = [
    { id: "payin3", label: "Pay in 3" },
    { id: "payin12", label: "Pay in 12" },
  ] as const;

  const TabIcon = ({ tab }: { tab: (typeof tabs)[number] }) =>
    tab.id === "payin3" ? (
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden="true">
        <path d="M16.4 15.1999C15.4 15.1999 14.55 14.8499 13.85 14.1499C13.15 13.4499 12.8 12.5999 12.8 11.5999C12.8 10.5999 13.15 9.7499 13.85 9.0499C14.55 8.3499 15.4 7.9999 16.4 7.9999C17.4 7.9999 18.25 8.3499 18.9501 9.0499C19.65 9.7499 20 10.5999 20 11.5999C20 12.5999 19.65 13.4499 18.9501 14.1499C18.25 14.8499 17.4 15.1999 16.4 15.1999ZM5.60005 18.7999V4.3999H27.2001V18.7999H5.60005ZM10.4 16.3999H22.4C22.4 15.7399 22.635 15.1749 23.105 14.7049C23.5751 14.2349 24.14 13.9999 24.8 13.9999V9.1999C24.14 9.1999 23.5751 8.9649 23.105 8.4949C22.635 8.0249 22.4 7.4599 22.4 6.7999H10.4C10.4 7.4599 10.165 8.0249 9.69505 8.4949C9.22505 8.9649 8.66005 9.1999 8.00005 9.1999V13.9999C8.66005 13.9999 9.22505 14.2349 9.69505 14.7049C10.165 15.1749 10.4 15.7399 10.4 16.3999ZM0.800049 23.5999V7.9999H3.20005V21.1999H23.6V23.5999H0.800049Z" />
      </svg>
    ) : (
      <svg className="calendar" width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden="true">
        <path d="M3.2002 26V4.4H6.8002V2H9.2002V4.4H18.8002V2H21.2002V4.4H24.8002V26H3.2002ZM5.6002 23.6H22.4002V11.6H5.6002V23.6ZM5.6002 9.2H22.4002V6.8H5.6002V9.2Z" fill="currentColor" />
      </svg>
    );

  return (
    <section className="section section-payment-breakdown section-light">
      <div className="container-sm">
        <h2 className="s-title">Clever Payment Breakdown</h2>

        <div className="tabs payment-breakdown-tabs">
          <div className="tabs-nav">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tabs-nav-item ${tab.id}${activeTab === tab.id ? " active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <TabIcon tab={tab} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="tabs-content">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab${activeTab === tab.id ? " active" : ""}`}
              >
                <div className="payment-option">
                  <div className="payment-option-content">
                    <ul className="payment-features">
                      {(tab.id === "payin3" ? payin3Items : payin12Items).map(
                        (item, i) => (
                          <li key={i}>{item}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="payment-options-desktop desktop-only">
            <div className={`payment-card payin3-card${activeTab === "payin3" ? " active" : ""}`}>
              <div className="payment-card-header">
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden="true">
                  <path d="M16.4 15.1999C15.4 15.1999 14.55 14.8499 13.85 14.1499C13.15 13.4499 12.8 12.5999 12.8 11.5999C12.8 10.5999 13.15 9.7499 13.85 9.0499C14.55 8.3499 15.4 7.9999 16.4 7.9999C17.4 7.9999 18.25 8.3499 18.9501 9.0499C19.65 9.7499 20 10.5999 20 11.5999C20 12.5999 19.65 13.4499 18.9501 14.1499C18.25 14.8499 17.4 15.1999 16.4 15.1999ZM5.60005 18.7999V4.3999H27.2001V18.7999H5.60005ZM10.4 16.3999H22.4C22.4 15.7399 22.635 15.1749 23.105 14.7049C23.5751 14.2349 24.14 13.9999 24.8 13.9999V9.1999C24.14 9.1999 23.5751 8.9649 23.105 8.4949C22.635 8.0249 22.4 7.4599 22.4 6.7999H10.4C10.4 7.4599 10.165 8.0249 9.69505 8.4949C9.22505 8.9649 8.66005 9.1999 8.00005 9.1999V13.9999C8.66005 13.9999 9.22505 14.2349 9.69505 14.7049C10.165 15.1749 10.4 15.7399 10.4 16.3999ZM0.800049 23.5999V7.9999H3.20005V21.1999H23.6V23.5999H0.800049Z" />
                </svg>
                <span>Pay in 3</span>
              </div>
              <div className="payment-card-content">
                <ul className="payment-features">
                  {payin3Items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`payment-card payin12-card${activeTab === "payin12" ? " active" : ""}`}>
              <div className="payment-card-header">
                <svg className="calendar" width="29" height="29" viewBox="0 0 29 29" fill="none" aria-hidden="true">
                  <path d="M3.2002 26V4.4H6.8002V2H9.2002V4.4H18.8002V2H21.2002V4.4H24.8002V26H3.2002ZM5.6002 23.6H22.4002V11.6H5.6002V23.6ZM5.6002 9.2H22.4002V6.8H5.6002V9.2Z" fill="currentColor" />
                </svg>
                <span>Pay in 12</span>
              </div>
              <div className="payment-card-content">
                <ul className="payment-features">
                  {payin12Items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
