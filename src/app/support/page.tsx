import DownloadSection from "@/components/product/DownloadSection";

const knowledgeCategories = [
  {
    title: "Stores",
    description: "Discover new stores and tips for your next purchase",
    icon: "https://payjustnow.com/wp-content/uploads/2025/03/Icons.svg",
    posts: [
      "How do I PayJustNow in store?",
      "Can I use PayJustNow for discounts and sale items?",
      "Is there a fee for using PayJustNow?",
    ],
  },
  {
    title: "Payments",
    description: "Checkout and receive your order without any hiccups",
    icon: "https://payjustnow.com/wp-content/uploads/2025/03/Icons-1.svg",
    posts: [
      "How do I calculate my instalments?",
      "How can I get a refund?",
      "How do I settle payments early?",
    ],
  },
  {
    title: "Extra Funds",
    description: "Find out how to increase the amount of spend allocated to your profile",
    icon: "https://payjustnow.com/wp-content/uploads/2025/03/Icons-2.svg",
    posts: [
      "Can I transfer my facility-spend to my bank account?",
      "How long does a limit increase take?",
      "Can I add cash to my facility-spend amount?",
    ],
  },
];

const arrowSvg = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.7834 7.33325L7.05004 3.59992L8.00004 2.66658L13.3334 7.99992L8.00004 13.3333L7.05004 12.3999L10.7834 8.66658L2.66671 8.66658L2.66671 7.33325L10.7834 7.33325Z" fill="black" />
  </svg>
);

export default function SupportPage() {
  return (
    <div id="support">
      <section className="section section-light section-hero section-support-hero">
        <div className="container">
          <div className="s-inner">
            <div className="s-content">
              <h1 className="s-title">Need some help?</h1>
              <p className="s-text">
                Get fast answers about PayJustNow products when you reach out to us directly. We&apos;re here to help.
              </p>
            </div>
            <div className="content-grid content-grid-light content-grid-one">
              <div className="cg-row">
                <div className="cg-item cg-item-content">
                  <div className="cg-icon">
                    <figure className="media-wrapper image-wrapper">
                      <span className="media-inner image-inner">
                        <img width="42" height="50" className="media image" alt="" src="https://payjustnow.com/wp-content/uploads/2023/11/Vector-17.svg" />
                      </span>
                    </figure>
                  </div>
                  <h3 className="cg-title">Reach out during office hours</h3>
                  <div className="cg-row">
                    <div className="cg-item cg-item-content">
                      <span className="cg-title">Email and Webchat</span>
                      <div className="cg-text"><p>Monday to Friday: 07h30 – 17h00</p></div>
                    </div>
                    <div className="cg-item cg-item-content">
                      <span className="cg-title">Telephone</span>
                      <div className="cg-text"><p>Monday – Friday 10H00 to 17H00</p></div>
                    </div>
                  </div>
                </div>
                <div className="cg-item cg-item-content">
                  <div className="cg-icon">
                    <figure className="media-wrapper image-wrapper">
                      <span className="media-inner image-inner">
                        <img width="42" height="50" className="media image" alt="" src="https://payjustnow.com/wp-content/uploads/2023/11/Vector-18.svg" />
                      </span>
                    </figure>
                  </div>
                  <h3 className="cg-title">Chat to us on weekends</h3>
                  <div className="cg-row">
                    <div className="cg-item cg-item-content">
                      <span className="cg-title">Contact</span>
                      <div className="cg-text">
                        <p>Get support to any query via Web Chat on Saturdays from 8:30 – 17:00 and Sundays from 10:30 to 17:00.</p>
                        <p>*Responses may be delayed on weekends and public holidays as we attend to high volumes of requests. Your patience is always appreciated.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light section-pad-top section-pad-bottom section-image-stack section-contact">
        <div className="container-sm">
          <div className="s-inner">
            <div className="s-content">
              <h2 className="s-title">Email Us</h2>
              <div className="s-text">
                <p>Get fast answers from us online via Web Chat or email.</p>
              </div>
              <div className="address">
                <h6 className="address-title">Physical Address</h6>
                <div className="address-text">
                  <p>3rd Floor, Sunclare Building 21 Dreyer St, Claremont 7708</p>
                </div>
              </div>
              <div className="s-buttons">
                <button type="button" className="btn btn-primary btn-md btn-chatbot">
                  <span className="btn-fill"></span>
                  <span className="btn-text">Chat</span>
                </button>
                <a href="mailto:hello@payjustnow.com" className="btn btn-outline-dark btn-md">
                  <span className="btn-fill"></span>
                  <span className="btn-text">Email</span>
                </a>
              </div>
            </div>
            <div className="image-stack">
              <div className="image-stack-inner">
                <div className="image-stack-item image-stack-item-0">
                  <figure className="media-wrapper image-wrapper responsive">
                    <span className="media-inner image-inner">
                      <img width="1244" height="933" className="media image" alt="" src="https://payjustnow.com/wp-content/uploads/2025/03/image-11-1.jpg" />
                    </span>
                  </figure>
                </div>
                <div className="image-stack-item image-stack-item-1">
                  <figure className="media-wrapper image-wrapper responsive">
                    <span className="media-inner image-inner">
                      <img width="1244" height="933" className="media image" alt="" src="https://payjustnow.com/wp-content/uploads/2025/03/image-11-1.jpg" />
                    </span>
                  </figure>
                </div>
                <div className="image-stack-item image-stack-item-2">
                  <figure className="media-wrapper image-wrapper responsive">
                    <span className="media-inner image-inner">
                      <img width="1244" height="933" className="media image" alt="" src="https://payjustnow.com/wp-content/uploads/2025/03/image-11-1.jpg" />
                    </span>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-pad-top section-assistance">
        <div className="container-sm">
          <div className="s-inner">
            <div className="s-content">
              <div className="s-title-wrapper">
                <h2 className="s-title">Your Questions answered</h2>
                <a href="https://community.payjustnow.com/support/solutions" className="btn btn-light btn-md">
                  <span className="btn-fill"></span>
                  <span className="btn-text">Visit our Knowledge Base</span>
                </a>
              </div>
              <h3 className="s-subtitle">Search by category</h3>
            </div>
            <div className="support-categories">
              {knowledgeCategories.map((cat) => (
                <div key={cat.title} className="support-category">
                  <div className="sc-content">
                    <div className="sc-icon">
                      <figure className="media-wrapper image-wrapper">
                        <span className="media-inner image-inner">
                          <img width="32" height="32" className="media image" alt="" src={cat.icon} />
                        </span>
                      </figure>
                    </div>
                    <div className="sc-content-inner">
                      <h6 className="sc-title">{cat.title}</h6>
                      <p className="sc-description desktop-only">{cat.description}</p>
                    </div>
                  </div>
                  <div className="sc-posts">
                    {cat.posts.map((post) => (
                      <div key={post} className="sc-post">
                        <h6 className="sc-post-title">{post}</h6>
                        <span className="sc-post-btn">{arrowSvg}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="cta">
              <div className="cta-bg"></div>
              <h5 className="cta-title">Your Questions answered</h5>
              <a href="https://community.payjustnow.com/support/solutions" className="btn btn-dark btn-md">
                <span className="btn-fill"></span>
                <span className="btn-text">Visit our Knowledge Base</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <DownloadSection variant="light" />
    </div>
  );
}
