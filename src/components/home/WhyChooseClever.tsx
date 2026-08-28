const features = [
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/03/24px.svg",
    title: "Flexible payments",
    text: "Spread your spend over 3 or 12 months. Pay in 3 is interest-free. Pay in 12 gives extra time with a little interest.",
  },
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/instant-refund.svg",
    title: "Instant-refund Wallet",
    text: "Returns go straight into your PayJustNow Wallet\u2026no waiting, no hassle - ready to spend again.",
  },
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/03/24px-2.svg",
    title: "Clever shopping, every time",
    text: "Fast approvals, secure QR checkout, exclusive offers, and in-app support.",
  },
];

export default function WhyChooseClever() {
  return (
    <section className="section section-light section-offer">
      <div className="container-sm">
        <div className="s-inner">
          <div className="content-grid content-grid-light content-grid-three">
            <div className="cg-row">
              <div className="cg-item cg-item-featured">
                <h2 className="cg-title">Why choose Clever?</h2>
                <p className="cg-text">
                  Over clunky checkouts, delayed refunds, and the brands you love being off-limits?  Say hello to
                  The Clever Way.
                </p>
                <a href="https://app.payjustnow.com/register/overview" className="btn btn-primary btn-lg " target="_blank">
                  <span className="btn-fill"></span>
                  <span className="btn-text">
                    <span className="line line-normal">Sign Up</span>
                    <span className="line line-hover">Sign Up</span>
                  </span>
                </a>
              </div>
              <div className="cg-col">
                <div className="cg-row">
                  <div className="cg-item cg-item-media">
                    <div className="media-wrapper video-wrapper responsive">
                      <div className="media-inner video-inner">
                        <video className="media video" autoPlay loop muted playsInline>
                          <source src="https://payjustnow.com/wp-content/uploads/2023/12/home.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                  <div className="cg-item cg-item-content">
                    <div className="cg-icon">
                      <figure className="media-wrapper image-wrapper">
                        <span className="media-inner image-inner">
                          <img width="40" height="40" className="media image" alt="" src="https://payjustnow.com/wp-content/uploads/2025/03/24px.svg" />
                        </span>
                      </figure>
                    </div>
                    <h6 className="cg-title">Flexible payments</h6>
                    <p className="cg-text">{features[0].text}</p>
                  </div>
                </div>
                <div className="cg-row">
                  <div className="cg-item cg-item-content">
                    <div className="cg-icon">
                      <figure className="media-wrapper image-wrapper">
                        <span className="media-inner image-inner">
                          <img width="40" height="40" className="media image" alt="" src="https://payjustnow.com/wp-content/uploads/2025/10/instant-refund.svg" />
                        </span>
                      </figure>
                    </div>
                    <h6 className="cg-title">Instant-refund Wallet</h6>
                    <p className="cg-text">{features[1].text}</p>
                  </div>
                  <div className="cg-item cg-item-content">
                    <div className="cg-icon">
                      <figure className="media-wrapper image-wrapper">
                        <span className="media-inner image-inner">
                          <img width="40" height="40" className="media image" alt="" src="https://payjustnow.com/wp-content/uploads/2025/03/24px-2.svg" />
                        </span>
                      </figure>
                    </div>
                    <h6 className="cg-title">Clever shopping, every time</h6>
                    <p className="cg-text">{features[2].text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}