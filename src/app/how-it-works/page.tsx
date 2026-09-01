import ProductHero from "@/components/product/ProductHero";
import HowItWorks from "@/components/product/HowItWorks";
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

export default function HowItWorksPage() {
  return (
    <div id="product">
      <ProductHero
        title="How It Works"
        subtitle="Control without the crunch. That's the Clever Way to Pay."
        heroImage="https://payjustnow.com/wp-content/uploads/2025/10/3-Payments-Hero.svg"
        variant="payin3"
      />
      <HowItWorks
        steps={howItWorksSteps}
        subtitle="Control without the crunch. That's the Clever Way to Pay."
        columns={3}
      />
      <DownloadSection />
    </div>
  );
}