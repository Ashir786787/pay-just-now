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

function TabIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4z" />
    </svg>
  );
}

export default function PaymentBreakdown({
  defaultTab,
}: PaymentBreakdownProps) {
  const [activeTab, setActiveTab] = useState<"payin3" | "payin12">(defaultTab);

  const tabs: { id: "payin3" | "payin12"; label: string }[] = [
    { id: "payin3", label: "Pay in 3" },
    { id: "payin12", label: "Pay in 12" },
  ];

  return (
    <section className="section section-payment-breakdown section-light">
      <div className="container-sm">
        <h2 className="s-title">Clever Payment Breakdown</h2>

        <div className="tabs payment-breakdown-tabs">
          <div className="tabs-nav mobile-only">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tabs-nav-item${activeTab === tab.id ? " active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <TabIcon />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="tabs-content mobile-only">
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
                Pay in 3
              </div>
              <div className="payment-card-content">
                <ul>
                  {payin3Items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`payment-card payin12-card${activeTab === "payin12" ? " active" : ""}`}>
              <div className="payment-card-header">
                Pay in 12
              </div>
              <div className="payment-card-content">
                <ul>
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
