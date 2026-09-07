"use client";

import { useEffect } from "react";

const components = [
  { name: "SignUp", status: "Operational" },
  { name: "Login", status: "Operational" },
  { name: "App", status: "Operational" },
  { name: "Card Processing", status: "Operational" },
  { name: "ECommerce Gateway", status: "Operational" },
  { name: "Emails", status: "Operational" },
  { name: "In-Store Payments", status: "Operational" },
  { name: "Partner API", status: "Operational" },
  { name: "Pay in 3", status: "Operational" },
  { name: "Pay in 12", status: "Operational" },
  { name: "Shopper Portal", status: "Operational" },
  { name: "SMSs", status: "Operational" },
  { name: "Subscriptions", status: "Operational" },
];

const uptimeDays = Array.from({ length: 90 }, () => "operational");

export default function StatusPage() {
  useEffect(() => {
    document.body.classList.add("status-page");
    return () => document.body.classList.remove("status-page");
  }, []);

  return (
    <div className="status-page">
      <div className="status-masthead">
        <div className="status-masthead-inner">
          <a href="#" className="status-logo">PayJustNow</a>
          <button type="button" className="status-subscribe-btn">Subscribe to Updates</button>
        </div>
      </div>

      <div className="status-container">
        <div className="status-banner status-none">
          <h2>All Systems Operational</h2>
        </div>

        <div className="status-section">
          <h2 className="status-section-title">About This Site</h2>
          <p className="status-section-text">
            Welcome to the PayJustNow Platform Status Page.
          </p>
        </div>

        <div className="status-section">
          <div className="status-uptime-header">
            <span className="status-uptime-text">Uptime over the past 90 days.</span>
            <a href="#" className="status-uptime-link">View historical uptime.</a>
          </div>

          <div className="status-components">
            {components.map((component) => (
              <div key={component.name} className="status-component">
                <div className="status-component-inner">
                  <span className="status-component-name">
                    <span className="status-dot status-dot-green" aria-hidden="true"></span>
                    {component.name}
                  </span>
                  <span className="status-component-status status-green">
                    Operational
                  </span>
                </div>
                <div className="status-uptime-bar">
                  <div className="status-uptime-days">
                    {uptimeDays.map((status, i) => (
                      <div
                        key={i}
                        className={`status-uptime-day status-${status}`}
                        title={`Day ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="status-uptime-legend">
                    <span className="status-legend-item">Today</span>
                    <span className="status-legend-item">90 days ago</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="status-section">
          <h2 className="status-section-title">Past Incidents</h2>
          <div className="status-no-incidents">
            <span>No incidents reported in the last 90 days.</span>
          </div>
        </div>
      </div>
    </div>
  );
}