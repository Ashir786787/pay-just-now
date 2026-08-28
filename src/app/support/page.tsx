import FaqSection from "@/components/product/FaqSection";

const faqs = [
  { question: "What is PayJustNow?", answer: "PayJustNow lets you shop now and pay later in three interest-free instalments, or spread larger purchases over 12 months with transparent interest." },
  { question: "How does Pay in 3 work?", answer: "Choose PayJustNow at checkout, pay one third immediately, and the remaining two instalments are collected on your selected salary date." },
  { question: "Where can I use PayJustNow?", answer: "You can shop online and in-store at participating retailers across South Africa. Look for PayJustNow at checkout or browse our store directory." },
  { question: "What do I need to sign up?", answer: "You need a valid South African ID, a South African cellphone number and email address, and a South African-issued Visa or Mastercard debit or credit card." },
  { question: "Are there any fees or interest?", answer: "Pay in 3 is interest-free with no fees when payments are made on time. Pay in 12 has a transparent interest rate shown before you confirm." },
  { question: "Why was I declined at checkout?", answer: "A decline can be caused by your available spending limit, card settings, or affordability results. You can update your details and try again later." },
  { question: "How do refunds work?", answer: "Return your item through the store as usual. Once the store approves the return, PayJustNow adjusts or refunds your instalments." },
  { question: "How do I manage my account?", answer: "Log in to view your purchases, upcoming payments, cards, spending limit, and account details in one place." },
];

export default function SupportPage() {
  return (
    <div className="pt-[146px] lg:pt-[152px]">
      <FaqSection title="Questions, answered." faqs={faqs} />
    </div>
  );
}