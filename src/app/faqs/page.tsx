"use client";

import { useState } from "react";
import Script from "next/script";
import DownloadSection from "@/components/product/DownloadSection";

const faqs = [
  {
    question: "How Do I Sign Up with PayJustNow?",
    answer: (
      <>
        <p>It's quick, it's simple and we'll have your shopping in no time.</p>
        <p><strong>What you'll need:</strong></p>
        <ul>
          <li>to be at least 18 years old</li>
          <li>an SA resident</li>
          <li>in possession of a valid debit or credit card (in good standing) and a valid email address and mobile number.</li>
        </ul>
      </>
    ),
  },
  {
    question: "And then?",
    answer: (
      <>
        <p>Visit <a href="https://payjustnow.com/" target="_blank" rel="noopener noreferrer">payjustnow.com</a> and follow the simple 6-step process to sign-up.</p>
        <p>The pay date you enter will be your instalment date going forward.</p>
        <p>NOTE: Should you do this on your mobile device you can easily store PayJustNow as an App during the process without having to visit an App store.</p>
      </>
    ),
  },
  {
    question: "Why do we need to confirm your details?",
    answer: (
      <p>We need to verify that you are legally allowed to enter into a contract with us. Remember, we're all about helping you spend (and save) more efficiently.</p>
    ),
  },
  {
    question: "Are my Payments really interest free?",
    answer: (
      <p>Yes. Have you seen our hashtag #zerointerest? We mean it! If you pay on time, you'll pay no extra fees.</p>
    ),
  },
  {
    question: "What is my spend limit?",
    answer: (
      <p>You'll be set a spend limit based on your profile at sign-up. This spend limit is customised to each shopper and may increase over time.</p>
    ),
  },
  {
    question: "Why do you need to know my location?",
    answer: (
      <p>In today's world, our privacy is increasingly under threat and there are associated risks to this. This is one of the reasons we request your location. Allowing us to know your location when transacting enables us to mitigate any risk of fraudulent activity on your account. The added benefit of a decreased risk profile is that your available spend with us is more likely to increase. Rest assured we will never share your data with third parties and will always adhere to the strictest of privacy protection policies. See our privacy policy here.</p>
    ),
  },
  {
    question: "Do I need a credit card?",
    answer: (
      <p>Not necessarily, though you can certainly use one. What you will you need is a Visa or MasterCard debit or a credit card issued in South Africa.</p>
    ),
  },
  {
    question: "How long will the approval process take?",
    answer: (
      <p>We'll have you checking out before you know it. We verify your contact details at sign-up and our worker-bees revert within minutes so you don't miss out on your shopping experience. We recommend that you sign-up before you go shopping though, just to ensure you're good to go!</p>
    ),
  },
  {
    question: "How do I begin shopping?",
    answer: (
      <>
        <p>Once you're all signed up and simply proceed to your online store's checkout and select PayJustNow from the payment options. Please note the instalment plan that is presented to you once you select PayJustNow. The pay date you entered when you signed up is your instalment date when payments will be deducted. We will send you a reminder before we deduct your upcoming instalment.</p>
        <p>If your favourite online store does not have PayJustNow please add your voice to why they should <a href="mailto:support@payjustnow.com" target="_blank" rel="noopener noreferrer">here</a>. We'll hear you loud and clear and sing along with you!</p>
      </>
    ),
  },
  {
    question: "Where can I shop?",
    answer: (
      <p>Check out our list of <a href="https://app.payjustnow.com/stores" target="_blank" rel="noopener noreferrer">Stores</a> for retailers using PayJustNow. We update this on a regular basis as new merchants come onboard.</p>
    ),
  },
  {
    question: "Can I pay an instalment early?",
    answer: (
      <p>Yes, simply go to the Website or App. Log-in to your account and make the payment. In fact, early payments may boost your spend limit.</p>
    ),
  },
  {
    question: "Is my information secure?",
    answer: (
      <p>PayJustNow has strict controls in place to ensure that what you share with us stays with us. PayJustNow <strong>NEVER</strong> stores your card details directly.</p>
    ),
  },
  {
    question: "What happens if I miss a payment?",
    answer: (
      <>
        <p>Your instalments will always be interest and fee free as long as you pay on time. If you miss a payment, you have 24 hours to manually make a payment by logging into your account and going to the My Orders tab. We will email you a day before your payment to keep you updated on when we will collect your instalments.</p>
        <p>If you do happen to miss a payment, we charge a late fee every time we reprocess this payment. We do this weekly, however the total of these reprocessing fees will never be more than 25% of the value of your transaction. Please refer to our Terms and Conditions for more information.</p>
        <p>Remember we don't make money when our shoppers don't pay and we reward good repayment behaviour over time, so keep your account up to date or even better, use a cash flow tool to get to the next pay day and settle early. If you are unable to meet your repayment commitment, please contact us on <a href="mailto:support@payjustnow.com" target="_blank" rel="noopener noreferrer">support@payjustnow.com</a></p>
      </>
    ),
  },
  {
    question: "How many transactions can I process at any one time?",
    answer: (
      <>
        <p className="faqs-paragraph">Upon sign-up you'll be able to make one transaction.</p>
        <p className="faqs-paragraph">Over time, as our relationship blossoms, you'll be able to run as many transactions as your available spend allows. i.e. multiple/ consolidating purchases.</p>
      </>
    ),
  },
  {
    question: "Do I get normal customer service?",
    answer: (
      <p>Of course, if not better! We like to think our online retail partners are the best in the business.</p>
    ),
  },
  {
    question: "How do I increase my spend limit?",
    answer: (
      <p>Establish a great track record we'll improve your spend limit and your life. We'll keep you up-to-date with increases in your spend so that you never feel you miss out!</p>
    ),
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: typeof faq.answer === "string" ? faq.answer : "",
    },
  })),
};

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="faqs">
      <section className="section section-light section-faqs-hero">
        <div className="container">
          <div className="s-inner">
            <div className="s-content">
              <h1 className="s-title">Frequently Asked Questions</h1>
              <p className="s-text"></p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-faqs-content">
        <div className="container">
          <div className="s-inner">
            <div className="faqs-wrapper">
              <div className="accordions">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion">
                    <button
                      className="accordion-header"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      aria-expanded={openIndex === index}
                    >
                      <h6 className="accordion-title">{faq.question}</h6>
                      <span className="accordion-toggle" aria-hidden="true"></span>
                    </button>
                    <div
                      className={`accordion-body ${openIndex === index ? "is-open" : ""}`}
                      style={{
                        maxHeight: openIndex === index ? "1000px" : "0",
                        opacity: openIndex === index ? 1 : 0,
                        transition: "max-height 0.4s ease, opacity 0.3s ease",
                        overflow: "hidden",
                      }}
                    >
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
                        width="34"
                        height="38"
                        alt=""
                        src="https://payjustnow.com/wp-content/uploads/2023/10/Group-2.svg"
                      />
                    </span>
                  </figure>
                </div>
                <h6 className="chatbot-title">Have more questions?</h6>
                <p className="chatbot-text">
                  No problem, we've got answers! Use our chatbot for quick answers to our most common queries or contact us directly.
                </p>
                <button
                  className="btn btn-outline-light btn-md btn-chatbot"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).chatbot) {
                      (window as any).chatbot.open();
                    }
                  }}
                  aria-label="Open chatbot"
                >
                  <span className="btn-fill"></span>
                  <span className="btn-text">Chatbot</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script
        id="faq-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <DownloadSection />
    </div>
  );
}