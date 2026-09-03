import FaqSection from "@/components/product/FaqSection";

const faqs = [
  {
    question: "How Do I Sign Up with PayJustNow?",
    answer: "It's quick, it's simple and we'll have your shopping in no time. What you'll need: to be at least 18 years old, an SA resident, in possession of a valid debit or credit card (in good standing) and a valid email address and mobile number. And then? Visit payjustnow.com and follow the simple 6-step process to sign-up. The pay date you enter will be your instalment date going forward. Note: Should you do this on your mobile device you can easily store PayJustNow as an App during the process without having to visit an App store.",
  },
  {
    question: "Why do we need to confirm your details?",
    answer: "We confirm your details at sign-up to verify your identity, keep your account secure and protect you against fraudulent activity.",
  },
  {
    question: "Are my Payments really interest free?",
    answer: "Yes. When you pay your instalments on time, your payments are always interest and fee free.",
  },
  {
    question: "What is my spend limit?",
    answer: "You'll be set a spend limit based on your profile at sign-up. This spend limit is customised to each shopper and may increase over time.",
  },
  {
    question: "Why do you need to know my location?",
    answer: "In today's world, our privacy is increasingly under threat and there are associated risks to this. This is one of the reasons we request your location. Allowing us to know your location when transacting enables us to mitigate any risk of fraudulent activity on your account. The added benefit of a decreased risk profile is that your available spend with us is more likely to increase. Rest assured we will never share your data with third parties and will always adhere to the strictest of privacy protection policies.",
  },
  {
    question: "Do I need a credit card?",
    answer: "Not necessarily, though you can certainly use one. What you will need is a Visa or MasterCard debit or a credit card issued in South Africa.",
  },
  {
    question: "How long will the approval process take?",
    answer: "We'll have you checking out before you know it. We verify your contact details at sign-up and our worker-bees revert within minutes so you don't miss out on your shopping experience. We recommend that you sign up before you go shopping though, just to ensure you're good to go!",
  },
  {
    question: "How do I begin shopping?",
    answer: "Once you're all signed up, simply proceed to your online store's checkout and select PayJustNow from the payment options. Please note the instalment plan that is presented to you once you select PayJustNow. The pay date you entered when you signed up is your instalment date when payments will be deducted. We will send you a reminder before we deduct your upcoming instalment.",
  },
  {
    question: "Where can I shop?",
    answer: "Check out our list of Stores for retailers using PayJustNow. We update this on a regular basis as new merchants come on board.",
  },
  {
    question: "Can I pay an instalment early?",
    answer: "Yes, simply go to the Website or App. Log in to your account and make the payment. In fact, early payments may boost your spend limit.",
  },
  {
    question: "Is my information secure?",
    answer: "PayJustNow has strict controls in place to ensure that what you share with us stays with us. PayJustNow NEVER stores your card details directly.",
  },
  {
    question: "What happens if I miss a payment?",
    answer: "Your instalments will always be interest and fee free as long as you pay on time. If you miss a payment, you have 24 hours to manually make a payment by logging into your account and going to the My Orders tab. We will email you a day before your payment to keep you updated on when we will collect your instalments. If you do happen to miss a payment, we charge a late fee every time we reprocess this payment. We do this weekly, however the total of these reprocessing fees will never be more than 25% of the value of your transaction. Remember we don't make money when our shoppers don't pay and we reward good repayment behaviour over time, so keep your account up to date or even better, settle early. If you are unable to meet your repayment commitment, please contact us on support@payjustnow.com.",
  },
  {
    question: "How many transactions can I process at any one time?",
    answer: "Upon sign-up you'll be able to make one transaction. Over time, as our relationship blossoms, you'll be able to run as many transactions as your available spend allows, i.e. multiple or consolidating purchases.",
  },
  {
    question: "Do I get normal customer service?",
    answer: "Of course, if not better! We like to think our shoppers are the best in the business.",
  },
  {
    question: "How do I increase my spend limit?",
    answer: "Establish a great track record and we'll improve your spend limit and your life. We'll keep you up-to-date with increases in your spend so that you never feel you miss out!",
  },
];

const knowledgeCategories = [
  {
    title: "Stores",
    description: "Discover new stores and tips for your next purchase",
    posts: [
      "How do I PayJustNow in store?",
      "Can I use PayJustNow for discounts and sale items?",
      "Is there a fee for using PayJustNow?",
    ],
  },
  {
    title: "Payments",
    description: "Checkout and receive your order without any hiccups",
    posts: [
      "How do I calculate my instalments?",
      "How can I get a refund?",
      "How do I settle payments early?",
    ],
  },
  {
    title: "Extra Funds",
    description: "Find out how to increase the amount of spend allocated to your profile",
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

      <FaqSection title="Questions, answered." faqs={faqs} showCta={false} />

      <section className="section section-download section-light section-download-light">
        <div className="container">
          <div className="s-inner">
            <div className="s-content">
              <h2 className="s-title">Get the App</h2>
              <p className="s-text">Download the PayJustNow app to start shopping.</p>
              <div className="s-buttons">
                <a className="app-button" href="#">
                  <span className="btn-fill"></span>
                  <span className="btn-text">App Store</span>
                </a>
                <a className="app-button" href="#">
                  <span className="btn-fill"></span>
                  <span className="btn-text">AppGallery</span>
                </a>
                <a className="app-button" href="#">
                  <span className="btn-fill"></span>
                  <span className="btn-text">Google Play</span>
                </a>
              </div>
              <p className="disclaimer">Disclaimer: A PayJustNow profile must be created to activate the app.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
