const systems = [
  {
    name: "Pay in 3 Checkout",
    status: "Operational",
    description: "Split your purchase into 3 interest-free payments at checkout.",
  },
  {
    name: "Pay in 12",
    status: "Operational",
    description: "Spread bigger purchases over 12 smaller monthly payments.",
  },
  {
    name: "PayJustNow App",
    status: "Operational",
    description: "Mobile app sign-up, account management and QR instore payments.",
  },
  {
    name: "Shopper Portal",
    status: "Operational",
    description: "Order history, upcoming instalments and payment management.",
  },
  {
    name: "Customer Support",
    status: "Operational",
    description: "Email, chatbot and phone support channels.",
  },
  {
    name: "Payments & Card Processing",
    status: "Major",
    description:
      "Minor delays may be experienced on debit cards between 02:00 and 04:00 SAST during scheduled maintenance.",
  },
];

export default function StatusPage() {
  return (
    <div id="status">
      <section className="section section-light section-status-hero">
        <div className="container">
          <div className="s-inner">
            <div className="s-content">
              <div className="status-tag is-major">Major</div>
              <h1 className="s-title">Systems Status</h1>
              <p className="s-text">
                Check the real-time status of PayJustNow services. We keep this
                page updated as soon as we detect any impact on our systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-status-overview">
        <div className="container">
          <div className="s-inner">
            <div className="status-banner is-major">
              <div className="status-banner-icon" aria-hidden="true"></div>
              <div>
                <h2 className="status-banner-title">Minor service disruption</h2>
                <p className="status-banner-text">
                  Payments &amp; Card Processing is currently undergoing planned
                  maintenance, with minor delays possible between 02:00 and
                  04:00 SAST. All other services are fully operational.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-status-components">
        <div className="container">
          <div className="s-inner">
            <h2 className="s-title">Systems</h2>
            <ul className="status-list">
              {systems.map((system) => (
                <li key={system.name} className="status-item">
                  <div className="status-item-name">
                    <span
                      className={`status-dot is-${system.status
                        .toLowerCase()
                        .replace(/[^a-z]+/g, "-")}`}
                      aria-hidden="true"
                    ></span>
                    <span className="status-item-title">{system.name}</span>
                  </div>
                  <div className="status-item-detail">
                    <p className="status-item-desc">{system.description}</p>
                    <span
                      className={`status-item-badge is-${system.status
                        .toLowerCase()
                        .replace(/[^a-z]+/g, "-")}`}
                    >
                      {system.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-light section-status-history">
        <div className="container">
          <div className="s-inner">
            <h2 className="s-title">Recent incidents</h2>
            <ul className="status-history-list">
              <li className="status-history-item">
                <strong>No incidents reported</strong>
                <span>
                  Systems have been fully operational over the last 90 days.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
