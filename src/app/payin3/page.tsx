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
      "Shop and choose PayJustNow at checkout. Approval is instant. You pay 1/3 now; the next 2 payments come off on your salary date.",
  },
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/24px.svg",
    title: "Instore",
    description:
      "Open your PayJustNow app & scan the QR code at the counter. Approve and pay 1/3 upfront. The next 2 come off on your selected salary date.",
  },
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/24px-5.svg",
    title: "No fees, no fuss.",
    description:
      "We're talking completely interest-free and fee free as long as the payments are made on time.",
  },
];

const benefits = [
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/24px-11.svg",
    text: "Flexible Spending",
  },
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/24px-5.svg",
    text: "No Hidden Fees",
  },
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/24px-4-1.svg",
    text: "0% Interest",
  },
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/12.svg",
    text: "Split Payments",
  },
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/24px-3.svg",
    text: "Quick Approval",
  },
  {
    icon: "https://payjustnow.com/wp-content/uploads/2025/10/easy-checkout-1.svg",
    text: "Easy Checkout",
  },
];

const videos = [
  {
    title: "Affordability 101",
    thumbnail:
      "https://payjustnow.com/wp-content/uploads/2025/12/Screenshot-2025-12-09-at-08.49.jpg",
    embedUrl: "https://www.youtube.com/embed/WwMPyuUGv9Y",
    categories: ["Misc"],
  },
  {
    title: "PayJustNow. The Clever Way",
    thumbnail:
      "https://payjustnow.com/wp-content/uploads/2025/10/PayJustNow.-The-Clever-Way.png",
    embedUrl: "https://www.youtube.com/embed/8ka1HemFuaQ",
    duration: "1min",
    categories: ["How it works", "Misc"],
  },
  {
    title: "How To Sign Up",
    thumbnail:
      "https://payjustnow.com/wp-content/uploads/2025/10/how-to-sign-up.jpg",
    embedUrl: "https://www.youtube.com/embed/fHDb1xdEW3g",
    duration: "2min",
    categories: ["Finance", "How it works"],
  },
];

const faqs = [
  {
    question: "What is PayJustNow?",
    answer:
      "PayJustNow is South Africa's flexible payment solution that lets you shop now and pay later — in three, interest-free instalments. No fees, no fuss, just a clever way to manage your cash flow.",
  },
  {
    question: "How does Pay in 3 work?",
    answer:
      "At checkout, choose PayJustNow as your payment method. You'll make your first payment immediately, and the next two will be automatically deducted on your salary date. That's it.",
  },
  {
    question: "Where can I use Pay in 3?",
    answer:
      "At hundreds of online and in-store retailers across South Africa. Look for the PayJustNow logo at checkout or explore our list of partner stores on our website.",
  },
  {
    question: "Do I need to register first?",
    answer:
      "If it's your first time using PayJustNow, you'll create an account during checkout — it only takes a few minutes.",
  },
  {
    question: "What do I need to sign up?",
    answer:
      "You'll need: (1) A valid South African ID, (2) A South African cellphone number and email address, (3) A Visa or MasterCard debit or credit card.",
  },
  {
    question: "Is there a credit check?",
    answer:
      "We'll do a quick affordability and ID check — it's soft and won't affect your credit score.",
  },
  {
    question: "Do I need a credit card?",
    answer:
      "You can use a credit or debit card, as long as it's a South African-issued Visa or MasterCard.",
  },
  {
    question: "When are my instalments deducted?",
    answer:
      "Your first payment happens at checkout. The next two are automatically deducted on the same date in the following months.",
  },
  {
    question: "Can I pay early?",
    answer:
      "Absolutely. Log in to your PayJustNow account on our website or app and settle any instalments early — it might even increase your future spending limit.",
  },
  {
    question: "What happens if I miss a payment?",
    answer:
      "If a payment fails, we'll let you know and retry. Late or missed payments may result in a small penalty fee, so it's best to keep your card details up to date.",
  },
  {
    question: "How do I manage my account?",
    answer:
      "Simply log in to your PayJustNow profile to view your purchases, upcoming payments, and account details — all in one place.",
  },
  {
    question: "Are there any fees or interest?",
    answer:
      "Nope. Pay in 3 is 100% interest-free with no fees when payments are made on time.",
  },
  {
    question: "Is PayJustNow secure?",
    answer:
      "Absolutely — we use bank-level encryption and secure payment processing to protect your personal and payment information. Your security comes first.",
  },
  {
    question: "Can I change my card details?",
    answer:
      "Yes! You can add or update your cards anytime from your account dashboard.",
  },
  {
    question: "Why was I declined at checkout?",
    answer:
      "It could be due to your spending limit, card settings, or an affordability check. You can try again later or update your details to increase your chances next time.",
  },
  {
    question: "Do I get my order straight away?",
    answer:
      "Yes. Once you've made your first instalment, your order is processed and delivered as normal.",
  },
  {
    question: "How do refunds work?",
    answer:
      "Return your item through the store as usual. Once the store approves the return, we'll adjust or refund your instalments accordingly.",
  },
  {
    question:
      "Can I have more than one Pay in 3 plan at a time?",
    answer:
      "Yes, as long as you stay within your spending limit and have no overdue payments.",
  },
];

const aboutOptions = [
  {
    title: "Pay in 12",
    description:
      "Spread your spend over 12 months. Extra flexibility with a little interest - no hidden surprises.",
    image: "https://payjustnow.com/wp-content/uploads/2025/10/Pay-in-12.svg",
    mobileImage:
      "https://payjustnow.com/wp-content/uploads/2025/10/Pay-in-12-mobile.svg",
    link: "/payin12",
    variant: "surface_green",
  },
  {
    title: "MobiMoney",
    description:
      "Instant access to cash when life throws you a curveball. A flexible loan of up to R10 000. Backed by FinChoice.",
    image: "https://payjustnow.com/wp-content/uploads/2025/10/FC-mobimoney.svg",
    mobileImage:
      "https://payjustnow.com/wp-content/uploads/2025/10/FC-mobimoney-mobile.svg",
    link: "/finchoice-mobimoney-your-flexible-account-for-those-emergencies",
    variant: "cool_blue",
  },
];

export default function PayIn3Page() {
  return (
    <div id="product">
      <ProductHero
        title="Pay in 3"
        subtitle="0% interest. 3 payments. Tap into all your favourite brands - easy. Get instant approval and own your checkout."
        heroImage="https://payjustnow.com/wp-content/uploads/2025/10/3-Payments-Hero.svg"
        variant="payin3"
      />
      <HowItWorks
        steps={howItWorksSteps}
        subtitle="Control without the crunch. That's the Clever Way to Pay."
        columns={3}
      />
      <BenefitsMarquee title="Your Pay in 3 Perks" benefits={benefits} />
      <VideoSection videos={videos} />
      <PaymentBreakdown defaultTab="payin3" />
      <FaqSection
        title="Pay in 3 questions Answered. Easy."
        faqs={faqs}
      />
      <AboutOptions options={aboutOptions} />
      <DownloadSection />
    </div>
  );
}
