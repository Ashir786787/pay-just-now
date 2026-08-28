import ProductHero from "@/components/product/ProductHero";
import HowItWorks from "@/components/product/HowItWorks";
import BenefitsMarquee from "@/components/product/BenefitsMarquee";
import VideoSection from "@/components/product/VideoSection";
import PaymentBreakdown from "@/components/product/PaymentBreakdown";
import FaqSection from "@/components/product/FaqSection";
import AboutOptions from "@/components/product/AboutOptions";
import DownloadSection from "@/components/product/DownloadSection";

const howItWorksSteps = [
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/checkout-icon.svg",
    title: "Online",
    description:
      'Shop and choose PayJustNow at checkout & select "Pay in 12." Sign up & get approval. First payment upfront; 11 monthly payments follow, all tracked in-app.',
  },
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/24px.svg",
    title: "Instore",
    description:
      "Open your PayJustNow app & scan the QR code at the counter. Sign up & get approval. First payment right away; the rest (11 monthly payments) via debit order.",
  },
];

const benefits = [
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/finance-category-icon.svg",
    text: "Easy Budgeting",
  },
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/24px-4-1.svg",
    text: "Fair Interest",
  },
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/24px-3.svg",
    text: "More Time",
  },
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/12.svg",
    text: "Flexible Plan",
  },
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/24px-11.svg",
    text: "Smaller Payments",
  },
];

const videos = [
  {
    title: "Affordability 101",
    thumbnail:
      "https://payjustnow.com/wp-content/uploads/2025/12/Screenshot-2025-12-09-at-08.49.jpg",
    embedUrl: "https://www.youtube.com/embed/WwMPyuUGv9Y",
  },
  {
    title: "PayJustNow. The Clever Way",
    thumbnail:
      "https://payjustnow.com/wp-content/uploads/2025/10/PayJustNow.-The-Clever-Way.png",
    embedUrl: "https://www.youtube.com/embed/8ka1HemFuaQ",
    duration: "1min",
  },
  {
    title: "How To Sign Up",
    thumbnail:
      "https://payjustnow.com/wp-content/uploads/2025/10/how-to-sign-up.jpg",
    embedUrl: "https://www.youtube.com/embed/fHDb1xdEW3g",
    duration: "2min",
  },
];

const faqs = [
  {
    question: "What is PayJustNow?",
    answer:
      "PayJustNow is South Africa's flexible payment solution that lets you shop now and pay over time. With Pay in 12, you can spread your purchase over 12 smaller monthly payments — with a transparent interest rate. It's the clever way to make bigger buys more manageable.",
  },
  {
    question: "What is Pay in 12?",
    answer:
      "Pay in 12, powered by FinChoice, is a flexible payment option from PayJustNow that lets you spread your purchase over 12 smaller monthly payments — with a transparent interest rate. It's designed to make bigger buys more manageable, responsibly.",
  },
  {
    question: "How does it work?",
    answer:
      'When you shop online and choose PayJustNow at checkout, select Pay in 12. You\'ll make your first payment immediately, and the remaining 11 payments will be deducted monthly via DebiCheck Debit Order by FinChoice.',
  },
  {
    question: "Who is FinChoice?",
    answer:
      "FinChoice is a registered credit provider and PayJustNow's partner for Pay in 12. They handle the credit approval, payment collections, and account management.",
  },
  {
    question: "Where can I use Pay in 12?",
    answer:
      "You can use Pay in 12 for online purchases at participating PayJustNow partner stores across South Africa.",
  },
  {
    question: "Do I need to register first?",
    answer:
      "Yes. You'll need to open a Pay in 12 account on the PayJustNow app. Once approved, it will appear as an option when you shop.",
  },
  {
    question: "How long does approval take?",
    answer:
      "Approval can happen in as little as 5 minutes. If extra income documents are needed, it may take up to 24 hours.",
  },
  {
    question: "Why don't I see Pay in 12 at checkout?",
    answer:
      "As a responsible lender, FinChoice checks your credit history and affordability. Continue to pay your accounts on time — this helps you qualify for Pay in 12 in future.",
  },
  {
    question: "How much interest do I pay?",
    answer:
      "Your personalised interest rate will be shared with you when you open your Pay in 12 account. Rates are charged according to the National Credit Act and FinChoice Terms & Conditions.",
  },
  {
    question: "How are payments made?",
    answer:
      "FinChoice collects your payments using a DebiCheck Debit Order — this is different from PayJustNow's Pay in 3 option, which uses your bank card.",
  },
  {
    question: "How do I view my account, balance, or next payment?",
    answer:
      "You can: (a) Log into the PayJustNow app and swipe to view your Pay in 12 account; or (b) Visit finchoice.mobi for detailed statements, balances, and payment history.",
  },
  {
    question: "How do I get a statement?",
    answer:
      "You'll get a Pay in 12 statement every 3 months, or you can log in to finchoice.mobi anytime to view it.",
  },
  {
    question: "When are instalments deducted?",
    answer:
      "Your first payment is made at checkout. The remaining 11 are automatically deducted monthly on the same date until your plan is complete.",
  },
  {
    question: "Can I pay early?",
    answer:
      "Of course. You can request a settlement quote on finchoice.mobi or call the FinChoice team to make an early or additional payment.",
  },
  {
    question: "What happens if I miss a payment?",
    answer:
      "If you miss a payment, you can: (a) Log in to finchoice.mobi and create a promise to pay, or (b) Call the FinChoice collections team on 086 134 6770 for help. Missed payments may incur a late fee and be reported to the Credit Bureau.",
  },
  {
    question: "How do I manage my account?",
    answer:
      "Log in to your PayJustNow profile to view your Pay in 12 plans, upcoming payments, balances, and personal details — all in one place.",
  },
  {
    question: "Are there fees or interest?",
    answer:
      "Yes, Pay in 12 comes with a small, transparent interest rate — clearly shown before you confirm your plan. There are no hidden fees.",
  },
  {
    question: "Is PayJustNow secure?",
    answer:
      "Absolutely. We use bank-level encryption and secure payment systems to keep your information and transactions protected.",
  },
  {
    question: "Can I change my card details?",
    answer:
      "Yes. You can add or update your card anytime from your account dashboard.",
  },
  {
    question: "Why was I declined at checkout?",
    answer:
      "It could be because of your spending limit, card settings, or affordability results. You can update your details or try again later.",
  },
  {
    question: "Do I get my order straight away?",
    answer:
      "Yes — once your first instalment is paid, your order is processed and delivered as normal.",
  },
  {
    question: "How do refunds work?",
    answer:
      "If you return your item, the store handles the approval. Once confirmed, we'll adjust your payment plan or refund the amount you've already paid.",
  },
  {
    question: "Can I have more than one Pay in 12 plan at a time?",
    answer:
      "Yes, as long as your account is in good standing and you have available spend limit.",
  },
];

const aboutOptions = [
  {
    title: "Pay in 3",
    description:
      "3 payments. 0% interest. 100% clever. No fuss or fees, just a simple way to get what you need now and (of course) PayJustNow.",
    image: "https://payjustnow.com/wp-content/uploads/2025/10/Pay-in-3-1.svg",
    mobileImage:
      "https://payjustnow.com/wp-content/uploads/2025/10/Pay-in-3-mobile-1.svg",
    link: "#",
    bgColor: "#273500",
  },
  {
    title: "MobiMoney",
    description:
      "Instant access to cash when life throws you a curveball. A flexible loan of up to R10 000. Backed by FinChoice.",
    image: "https://payjustnow.com/wp-content/uploads/2025/10/FC-mobimoney.svg",
    mobileImage:
      "https://payjustnow.com/wp-content/uploads/2025/10/FC-mobimoney-mobile.svg",
    link: "#",
    bgColor: "#0C5765",
  },
];

export default function PayIn12Page() {
  return (
    <div className="pt-[146px] lg:pt-[152px]">
      <ProductHero
        title="Pay in"
        titleHighlight="12"
        subtitle="Smaller payments. More time. A little interest. Perfect for furniture, appliances, or that dream upgrade - without the one-off wallop."
        heroImage="https://payjustnow.com/wp-content/uploads/2025/10/12-Payments-Hero.svg"
        showCta
      />
      <HowItWorks
        steps={howItWorksSteps}
        subtitle="Own it now. Pay it over time (with a little interest). That's one clever flex."
      />
      <BenefitsMarquee title="Your Pay in 12 Perks" benefits={benefits} />
      <VideoSection videos={videos} />
      <PaymentBreakdown defaultTab="payin12" />
      <FaqSection
        title="Pay in 12 questions Answered. Easy."
        faqs={faqs}
      />
      <AboutOptions options={aboutOptions} />
      <DownloadSection />
    </div>
  );
}
