import FaqSection from "@/components/product/FaqSection";
import SupportHelpCard from "@/components/support/SupportHelpCard";

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

export default function SupportPage() {
  return (
    <div id="product">
      <FaqSection title="Questions, answered." faqs={faqs} showCta={false} />
      <SupportHelpCard />
    </div>
  );
}