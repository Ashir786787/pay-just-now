import LegalLayout from "../LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PCI DSS Policy - PayJustNow",
};

const SECTIONS = [
  { id: 0, label: "Consumer" },
  { id: 1, label: "Merchant" },
];

const CONTENT_HTML = `
<p class="wp-block-paragraph">PayJustNow makes use of a PCI DSS certified compliant Service Provider organisation. PCI DSS is a comprehensive set of requirements created by the Payment Card Industry Security Standards Council to enhance cardholder data security and to ensure the safe handling and storage of sensitive customer credit card information and data. Maintaining security of cardholder data is very important to PayJustNow. For further information please visit the official PCI org website&nbsp;<a href="https://payjustnow.com/www.pcisecuritystandards.org" target="_blank" rel="noreferrer noopener">www.pcisecuritystandards.org.</a></p>
<h2 class="heading wp-block-heading" data-index="0" class="wp-block-heading">Consumer</h2>
<p class="wp-block-paragraph">Upon Consumer agreement to PayJustNow Terms, PayJustNow secures and protects the cardholder data according to the current applicable PCI standard for the life of the data needing to be retained. PayJustNow acknowledge these responsibilities as being the organisation responsible for ensuring the safe handling and storage of sensitive customer credit card information and data for the PayJustNow services.</p>
<h2 class="heading wp-block-heading" data-index="1" class="wp-block-heading">Merchant</h2>
<p class="wp-block-paragraph">PayJustNow merchants must implement PayJustNow technologies according to PayJustNow approved configuration. PayJustNow merchants have effectively delegated their PCI DSS responsibilities for sensitive customer credit card information and data collected through the PayJustNow Merchant Agreement process and Customer Agreement. Merchant’s may have other PCI DSS responsibilities that are independent of the PayJustNow Merchant Agreement process. It is the Merchant’s sole responsibility to remain informed of their PCI obligations and compliance status. Merchant’s should always consult their own Information Security professionals to review the security of the merchant’s business where required. A Qualified Security Assessor should be consulted if the merchant manages other sensitive customer credit card information and data or the merchant’s implementation of PayJustNow technologies has deviated from the approved configuration.</p>
<p class="wp-block-paragraph">PayJustNow make use of Peach Payments&nbsp;<a href="https://www.peachpayments.com/" target="_blank" rel="noreferrer noopener">https://www.peachpayments.com</a>&nbsp;and/or Stripe&nbsp;<a href="https://stripe.com/" target="_blank" rel="noreferrer noopener">https://stripe.com/</a>&nbsp;as our credit card processor.</p>
<p class="wp-block-paragraph">PayJustNow Privacy Policy is available&nbsp;<a href="/legal/privacy">here.</a></p>
`;

export default function PciDssPage() {
  return (
    <LegalLayout title="PCI DSS Policy" sections={SECTIONS}>
      <div className="legal-content" dangerouslySetInnerHTML={{ __html: CONTENT_HTML }} />
    </LegalLayout>
  );
}
