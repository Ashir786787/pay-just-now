import LegalLayout from "../LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - PayJustNow",
};

const SECTIONS = [
  { id: 0, label: "Disclaimer" },
  { id: 1, label: "Definitions" },
  { id: 2, label: "When Does The Agreement Apply?" },
  { id: 3, label: "Your Account And Information" },
  { id: 4, label: "Instalment Payments, Default Charges" },
  { id: 5, label: "Merchants and Goods" },
  { id: 6, label: "Refunds" },
  { id: 7, label: "PayJustNow Wallet" },
  { id: 8, label: "Cancellation and Suspension of the Agreement and/or Your Account" },
  { id: 9, label: "Acceptable Use Policy" },
  { id: 10, label: "Personal Information and Electronic Communications" },
  { id: 11, label: "Third Party Sites" },
  { id: 12, label: "Intellectual Property Rights" },
  { id: 13, label: "Warranties and Representations" },
  { id: 14, label: "Limited Liabilities" },
  { id: 15, label: "Force Majeure" },
  { id: 16, label: "General" },
  { id: 17, label: "THE PJN MOBILE SUBSCRIBER CODE OF CONDUCT" },
  { id: 18, label: "Additional information" },
  { id: 19, label: "Customer care and complaints" },
];

const CONTENT_HTML = `
<p class="wp-block-paragraph">Thank you for using PayJustNow&nbsp;</p>
<p class="wp-block-paragraph"><strong>Last updated: 11 May 2026</strong></p>
<p class="wp-block-paragraph">Each <strong>emboldened</strong> clause is a provision which limits risk or liability of PayJustNow and constitutes an assumption of risk or liability by you, imposes an obligation on you to indemnify PayJustNow or is an acknowledgement of a fact by you. Please read these clauses carefully before agreeing to it.</p>
<h2 class="heading wp-block-heading" data-index="0" class="wp-block-heading">Disclaimer</h2>
<p class="wp-block-paragraph"><strong>1.1</strong><strong>.All information available on the PayJustNow Platform and Payment Services is the intellectual property of PayJustNow and is subject to the Agreement and applicable laws.</strong></p>
<p class="wp-block-paragraph"><strong>1.2.Please read the Privacy Policy in detail as it forms part of your agreement with us and explains how we use your Personal Information and how we may share it with our Business Partners to prepare personalised offers to you.</strong></p>
<p class="wp-block-paragraph"><strong>1.3.To the maximum extent permitted by applicable law, you bear all risk arising out of your use of the PayJustNow Platform and Payment Services.</strong></p>
<h2 class="heading wp-block-heading" data-index="1" class="wp-block-heading">Definitions</h2>
<p class="wp-block-paragraph"><strong>2.1.&#8221;Account&#8221; means the account that a Customer creates on the PayJustNow Platform through which Customers access the Payment Services;</strong></p>
<p class="wp-block-paragraph"><strong>2.2.&#8221;Agreement&#8221; means these Terms, the Privacy Policy and any other policies indicated to form part of the agreement between you and us and regulates your use of PayJustNow&#8217;s Payment Services, the PayJustNow Platform and our relationship;</strong></p>
<p class="wp-block-paragraph"><strong>2.3.&#8221;Business Day&#8221; means any day or other than a Saturday, Sunday or official public holiday in South Africa;</strong></p>
<p class="wp-block-paragraph"><strong>2.4.“Business Partner(s)” means third parties who partner with us to provide you with products or services for legitimate business purposes;</strong></p>
<p class="wp-block-paragraph"><strong>2.5.&#8221;Card&#8221; means your valid debit, virtual, or credit card issued to you, in your name, by a South African bank;</strong></p>
<p class="wp-block-paragraph"><strong>2.6.&#8221;Customer&#8221;, &#8220;User&#8221;, &#8220;you&#8221; and &#8220;your&#8221; means the person who has created an Account to use the Services to purchase from a Merchant;</strong></p>
<p class="wp-block-paragraph"><strong>2.7.&#8221;Default Charge&#8221; means the fee PayJustNow will charge the Customer in situations more fully described in clause INSTALMENT PAYMENTS AND DEFAULT. The Default Charge at the time the Customer applies for an Account will be disclosed to the Customer in the application process. Thereafter the default charge may change from time to time by PayJustNow upon prior notice to the </strong><a href="https://support.payjustnow.com/support/solutions/articles/63000279708-late-fee-annex"><strong>Customer</strong></a></p>
<p class="wp-block-paragraph"><strong>2.8.&#8221;Goods&#8221; mean the products or services that you purchase from a Merchant and pay for through the Services;</strong></p>
<p class="wp-block-paragraph"><strong>2.9.&#8221;Instalment&#8221; means a periodic payment in respect of the Purchase Price as set out in the Payment Plan;</strong></p>
<p class="wp-block-paragraph"><strong>2.10.&#8221;Merchant&#8221; means the business that has partnered with us to offer Goods for payment through the PayJustNow Platform;</strong></p>
<p class="wp-block-paragraph"><strong>2.11.&#8221;NCA&#8221; means the National Credit Act 34 of 2005, as amended, and any regulations to the NCA;</strong></p>
<p class="wp-block-paragraph"><strong>2.12.&#8221;PayJustNow&#8221;, &#8220;us&#8221;, &#8220;we&#8221; and &#8220;our&#8221; means PayJustNow Proprietary Limited (company registration number 2019/164250/07), a private company incorporated in terms of the laws of the Republic of South Africa, with its physical address: 3rd Floor Sunclare Building, 21 Dreyer Street, Claremont, Western Cape, 7708, South Africa;</strong></p>
<p class="wp-block-paragraph"><strong>2.13.&#8221;PayJustNow Platform&#8221; means the Website and mobile application through which we provide the Payment Services;</strong></p>
<p class="wp-block-paragraph"><strong>2.14.&#8221;Payment Plan&#8221; means the periodic payment plan in terms of which you pay for the Purchase Price of Goods, which plan sets out the Instalment and the due dates for payment, as well as the Default Charges and when these will apply, accessible on the PayJustNow Platform;</strong></p>
<p class="wp-block-paragraph"><strong>2.15.&#8221;Payment Services&#8221; means the services that PayJustNow supplies and which allow Customers to pay the Purchase Price for Goods in Instalments in terms of a Payment Plan;</strong></p>
<p class="wp-block-paragraph"><strong>2.16.&#8221;PCI DSS Policy&#8221; means the PCI DSS policy of PayJustNow as amended from time to time, available on the Website;</strong></p>
<p class="wp-block-paragraph"><strong>2.17.&#8221;Personal Information&#8221; has the meaning as defined in POPIA;</strong></p>
<p class="wp-block-paragraph"><strong>2.18.&#8221;POPIA&#8221; means the Protection of Personal Information Act 4 of 2013, as amended from time to time, including any regulations and/or code of conduct made under the Act;</strong></p>
<p class="wp-block-paragraph"><strong>2.19.&#8221;Privacy Policy&#8221; means the privacy policy of PayJustNow as amended from time to time, available on the Website;</strong></p>
<p class="wp-block-paragraph"><strong>2.20.&#8221;Purchase Price&#8221; means the purchase price of the Goods that you purchase from the Merchant, including VAT and any other amounts or charges agreed with the Merchant;</strong></p>
<p class="wp-block-paragraph"><strong>2.21.&#8221;Refund&#8221; means a refund of the Purchase Price or any portion thereof, whichever applies;</strong></p>
<p class="wp-block-paragraph"><strong>2.22.&#8221;Services&#8221; means the Payment Services and/or Payment Platform;</strong></p>
<p class="wp-block-paragraph"><strong>2.23.&#8221;Terms&#8221; means these terms and conditions;</strong></p>
<p class="wp-block-paragraph"><strong>2.24.&#8221;VAT&#8221; means value added tax levied in terms of the Value Added Tax Act, 89 of 1991;</strong></p>
<p class="wp-block-paragraph"><strong>2.25.&#8221;Wallet” means the PayJustNow wallet facility connected to a Customer’s account;</strong></p>
<p class="wp-block-paragraph"><strong>2.26.&#8221;Website&#8221; means </strong><a href="https://payjustnow.com/"><strong>www.payjustnow.com</strong></a><strong>, including all sub-domains.</strong></p>
<h2 class="heading wp-block-heading" data-index="2" class="wp-block-heading">When Does The Agreement Apply?</h2>
<p class="wp-block-paragraph"><strong>3.1.This Agreement applies when you open an Account or use the Services, including the period between paying all Instalments, Default Charges and finalising any disputes between us.</strong></p>
<p class="wp-block-paragraph"><strong>3.2.You must accept the Agreement </strong><strong>in order to create an Account and use the Services.</strong></p>
<p class="wp-block-paragraph"><strong>3.3.We reserve the right to refuse any request for the Services without notice or reason.</strong></p>
<p class="wp-block-paragraph"><strong>3.4.If there is a conflict between these Terms, the Privacy Policy and the PCI DSS Policy, the following order of preference will apply:</strong></p>
<p class="wp-block-paragraph"><strong>3.4.1.Privacy Policy</strong></p>
<p class="wp-block-paragraph"><strong>3.4.2.PCI DSS Policy</strong></p>
<p class="wp-block-paragraph"><strong>3.4.3.these Terms.</strong></p>
<h2 class="heading wp-block-heading" data-index="3" class="wp-block-heading">Your Account And Information</h2>
<p class="wp-block-paragraph"><strong>4.1.In order to access and use the Services, you must create an Account, </strong><strong>and provide certain Personal Information.</strong></p>
<p class="wp-block-paragraph"><strong>4.2.You agree that when creating your Account, PayJustNow may run a credit check with a registered credit bureau or other third party source to obtain and confirm the information you have provided or obtain information that may be relevant to your application to open an Account.&nbsp;&nbsp;</strong></p>
<p class="wp-block-paragraph"><strong>4.3.By creating an Account, you acknowledge and agree that all information provided to PayJustNow, including the Personal Information, is your own and is correct and complete, and you agree to update that information if it changes.</strong></p>
<p class="wp-block-paragraph"><strong>4.4.You are solely responsible to keep your Account access credentials safe. This means that </strong><strong>should anyone access your Account credentials</strong><strong> (whether that be you, or anyone else), we assume that the person using the Services is you.</strong></p>
<p class="wp-block-paragraph"><strong>4.5.You may not share your Account with other Customers or third parties. Only you may use your Account to access or use the Services and you may only use your Account and the Services for your own personal purposes. You are strictly prohibited from sub-licensing or commercially exploiting your Account or the Services.</strong></p>
<p class="wp-block-paragraph"><strong>4.6.You must familiarise yourself with our security requirements, guidelines and procedures that we communicate from time to time and follow these carefully.</strong></p>
<p class="wp-block-paragraph"><strong>4.7.You must inform us immediately if there has been, or if you suspect, any breach of security or confidentiality in relation to your Account and update your Account access credentials by sending an email to </strong><strong>support@payjustnow.com</strong><strong>. Telephonic support on 0213002152 is available during the hours specified on the Website. We will update the Account within 12 hours of receiving your notification, but you will at all times remain liable for all transactions under your Account until we have updated it in terms of this </strong><strong>clause </strong><strong>We will update the Account within 12 hours of receiving your notification, but you will at all times remain liable for all transactions under your Account until we have updated it in terms of this clause 4.7.</strong></p>
<p class="wp-block-paragraph"><strong>THE PAYJUSTNOW PLATFORM AND PAYMENT SERVICES</strong></p>
<p class="wp-block-paragraph"><strong>5.1.We offer a Payment Plan that allows you to purchase Goods from a Merchant and pay for those Goods over an agreed period set out in each Payment Plan. PayJustNow makes payment of the full Purchase Price to the Merchant on your behalf, and you agree to pay PayJustNow the full Purchase Price in Instalments over the period as set out and in the Payment Plan.</strong></p>
<p class="wp-block-paragraph"><strong>5.2.Once you have created an Account, PayJustNow may assign a purchase limit to you, based on the financial information you provided and any checks that we have carried out. We indicate the purchase limit on the PayJustNow Platform, and each Payment Plan that you enter into and settle will reflect against your purchase limit. PayJustNow reserves the right to adjust your purchase limit from time to time.</strong></p>
<p class="wp-block-paragraph"><strong>5.3.PayJustNow may, at its discretion, limit how many active Payment Plans you have at the same time.</strong></p>
<p class="wp-block-paragraph"><strong>5.4.If you happen to miss a payment, we levy a default charge on your account weekly, however the total of these default charges will never be more than 25% of your transaction.</strong></p>
<p class="wp-block-paragraph"><strong>5.5.You will enter into a new Payment Plan each time you use the Payment Services to purchase Goods from a Merchant.</strong></p>
<p class="wp-block-paragraph"><strong>5.6.You may only use the Payment Services if you are 18 (eighteen) years and older. By agreeing to the Agreement and using the Services, you confirm that you:</strong></p>
<p class="wp-block-paragraph"><strong>5.6.1.have a valid bank Card issued in your name;</strong></p>
<p class="wp-block-paragraph"><strong>5.6.2.are a permanent resident of South Africa, or lawfully reside in South Africa;</strong></p>
<p class="wp-block-paragraph"><strong>5.6.3.are permanently employed or self-employed;</strong></p>
<p class="wp-block-paragraph"><strong>5.6.4.have not applied for or are not currently over-indebted, under debt counselling or subject to debt review;</strong></p>
<p class="wp-block-paragraph"><strong>5.6.5.have not been declared mentally unfit or ill by a court, or under administration or provisional or final sequestration.</strong></p>
<p class="wp-block-paragraph"><strong>5.7.By agreeing to these Terms, you unconditionally and irrevocably agree that PayJustNow is allowed to debit your Card with the Instalment amounts, and any Default Charges, as set out in the Payment Plan.</strong></p>
<p class="wp-block-paragraph"><strong>5.8.You are liable for any charges that your bank or Card issuer may charge you for using the Payment Services and any debits or credits raised against your Card as a result of using the Payment Services. PayJustNow will not be liable for any charges that you incur if an Instalment is unsuccessful.</strong></p>
<h2 class="heading wp-block-heading" data-index="4" class="wp-block-heading">Instalment Payments, Default Charges</h2>
<p class="wp-block-paragraph"><strong>6.1.The Payment Plan sets out the amounts due and owing by you and when each Instalment is due. If you pay all Instalments when they become due, you will not be liable for any default charges for using the Payment Services</strong>.</p>
<p class="wp-block-paragraph"><strong>6.2.You may pay any Instalment in advance manually through the Payment Platform, before the due date for the Instalment.</strong></p>
<p class="wp-block-paragraph"><strong>6.3.PayJustNow will charge a Default Charge automatically if we do not receive payment of an Instalment on the due date for payment.</strong></p>
<p class="wp-block-paragraph"><strong>6.4.Where PayJustNow is unsuccessful in debiting an Instalment from your Card on the due date, we may charge the Default Charge for payment and charge it again each time we attempt to effect payment as per the notice to you (normally on days 3 (three) and 7 (seven) after the due date for payment, but these may vary), and always subject to a maximum of 25% (twenty-five percent) of the purchase price of the Goods.</strong></p>
<p class="wp-block-paragraph"><strong>6.5</strong><strong>.If we are unsuccessful in debiting your Card with an Instalment as set out in clause where PayJustNow is unsuccessful in debiting an Instalment from your Card on the due date, we may charge the Default Fee for payment and charge it again each time we attempt to effect payment as per the notice to you (normally on days 3 (three) and 7 (seven) after the due date for payment, but these may vary), and always subject to a maximum of 25% (twenty-five percent) of the purchase price of the Goods.</strong><strong>, you may make a manual payment through the PayJustNow Platform within 24 (twenty-four) hours of the due date for the Instalment, in which case we will not charge a Default Fee to your Payment Plan.</strong></p>
<p class="wp-block-paragraph"><strong>6.6.PayJustNow may, without liability or prior notice, suspend your access to the Payment Services at any time if you are in default of any Payment Plans.</strong></p>
<p class="wp-block-paragraph"><strong>6.7.You must notify us immediately by sending an email to support@payjustnow.com if your Card or related bank account details change so that we can update your details on the PayJustNow Platform accordingly. You can also update your details through the PayJustNow Platform. You may not cancel or close the Card and/or related bank account from which we debit your Instalments unless you have provided details for an alternative Card / bank account and/or until all Payment Plans and any Default Charges have been paid in full.t have been paid in full.</strong></p>
<p class="wp-block-paragraph"><strong>6.9.If you have not paid the full Purchase Price and any Default Charges by the final due date for a Payment Plan, PayJustNow may inform you in writing that you are in default and propose that you refer the incidental credit agreement to a debt counsellor, alternative dispute resolution agent, consumer court or ombud with jurisdiction, to resolve any dispute under the agreement or agree on a plan to bring the payments up to date.</strong></p>
<p class="wp-block-paragraph"><strong>6.10.If you have been in default for at least 20 (twenty) Business Days and at least 10 (ten) Business Days have passed since we have sent you the written notice referred to in clause If you have not paid the full Purchase Price and any Default Charge by the final due date for a Payment Plan, PayJustNow may inform you in writing that you are in default and propose that you refer the incidental credit agreement to a debt counsellor, alternative dispute resolution agent, consumer court or ombud with jurisdiction, to resolve any dispute under the agreement or agree on a plan to bring the payments up to date., and you have not responded to the notice, or have responded by rejecting PayJustNow&#8217;s proposals, PayJustNow may cancel the Agreement or approach a court for an order to enforce the Agreement.</strong></p>
<p class="wp-block-paragraph"><strong>6.11.At any time after the notice in clause If you have not paid the full Purchase Price and any Default Charge by the final due date for a Payment Plan, PayJustNow may inform you in writing that you are in default and propose that you refer the incidental credit agreement to a debt counsellor, alternative dispute resolution agent, consumer court or ombud with jurisdiction, to resolve any dispute under the agreement or agree on a plan to bring the payments up to date.has been delivered to you, but before PayJustNow has cancelled the agreement in terms of clause If you have been in default for at least 20 (twenty) Business Days and at least 10 (ten) Business Days have passed since we have sent you the written notice referred to in clause If you have not paid the full Purchase Price and any Default Charge by the final due date for a Payment Plan, PayJustNow may inform you in writing that you are in default and propose that you refer the incidental credit agreement to a debt counsellor, alternative dispute resolution agent, consumer court or ombud with jurisdiction, to resolve any dispute under the agreement or agree on a plan to bring the payments up to date., and you have not responded to the notice, or have responded by rejecting PayJustNow&#8217;s proposals, PayJustNow may cancel the Agreement or approach a court for an order to enforce the Agreement, and at all times subject to the NCA, you may reinstatethe agreement by paying all overdue outstanding amounts (i.e. any unpaid Instalments), any Default Charges, and any charges and costs allowed for in the NCA to enforce the incidental credit agreement (such as default administration and collection costs) so that there are no outstanding amounts owing by you to PayJustNow.</strong></p>
<p class="wp-block-paragraph"><strong>6.12.Transaction records: We will make all transaction information relating to the Payment Plans available to you on the PayJustNow Platform.</strong></p>
<p class="wp-block-paragraph"><strong>6.13.Changes to Default Charges: PayJustNow will give 30 (thirty) calendar days&#8217; written notice of any change to the Default Charges, including an increase. If you continue to use the Service after the notice, you agree to pay the amended Default Charge applicable after expiry of the notice period</strong></p>
<p class="wp-block-paragraph"><strong>6.14.Default Charges are punitive in nature and are not charged in return for any goods or services supplied by PJN. Default Charges are not subject to VAT.</strong></p>
<p class="wp-block-paragraph"><strong>6.15.Additional charges: If you cancel an Instalment payment by giving instruction to your bank to return your funds, and they do so, or your billing details provided are no longer valid, you will be liable to us for any penalty which we incur to that bank for the failed payment.</strong></p>
<h2 class="heading wp-block-heading" data-index="5" class="wp-block-heading">Merchants and Goods</h2>
<p class="wp-block-paragraph"><strong>7.1.PayJustNow is not a party to the agreement between you and the Merchant in respect of the Goods, and PayJustNow will not be a party to any disputes between you and the Merchant and will not be liable if the Goods are defective or if the Merchant does not perform in terms of your agreement with the Merchant.</strong></p>
<p class="wp-block-paragraph"><strong>7.2.PayJustNow will not be liable if a Merchant refuses to accept the PayJustNow Payment Services for payment of the Goods. PayJustNow will also not be liable if the Goods you wish to purchase from a Merchant are no longer available for purchase or at the advertised price.</strong></p>
<p class="wp-block-paragraph"><strong>7.3.Any Goods purchased from a Merchant through the Payment Services will be subject to the Merchant&#8217;s terms and conditions and policies of the Merchant.</strong></p>
<p class="wp-block-paragraph"><strong>7.4.You irrevocably agree not to withhold or dispute payments of your Instalments in terms of a Payment Plan in the event that you have a dispute with the Merchant about the Goods that are subject to that Payment Plan. PayJustNow will not withhold any payments to a Merchant or reverse any payments made to a Merchant for Goods that you have purchased in the event of a dispute between you and the Merchant.</strong></p>
<h2 class="heading wp-block-heading" data-index="6" class="wp-block-heading">Refunds</h2>
<p class="wp-block-paragraph"><strong>8.1.If you return any Goods purchased from a Merchant through the Payment Services, the return of the Goods (whether a full or partial return of all the items in the order) will be between you and the Merchant, and will be subject to the Merchant&#8217;s returns policy and applicable laws.</strong></p>
<p class="wp-block-paragraph"><strong>8.2.PayJustNow will record a Refund against your Payment Plan on instruction from the Merchant only.</strong></p>
<p class="wp-block-paragraph"><strong>8.3.When we receive a Refund instruction from a Merchant, PayJustNow will proceed as follows:</strong></p>
<p class="wp-block-paragraph"><strong>8.3.1.if the value of the amount being Refunded from the Merchant is more than the balance of the Instalments still due for the relevant Payment Plan we will (a) settle the balance of the Payment Plan and (b) refund the remaining amount to your</strong><strong> Card</strong><strong>Wallet; or</strong></p>
<p class="wp-block-paragraph"><strong>8.3.2.if the value of the amount being Refunded is less than the balance of the Instalments still due for the relevant Payment Plan we will credit the full value of the Refund amount against the Instalments for the Payment Plan and your Payment Plan will reflect the amount that is still due by you.</strong></p>
<p class="wp-block-paragraph"><strong>8.4.We will apply the amount Refunded in terms of clause if the value of the amount being Refunded is less than the balance of the Instalments still due for the relevant Payment Plan</strong><strong>,</strong><strong> we will credit the full value of the Refund amount against the Instalments for the Payment Plan and your Payment Plan will reflect the amount that is still due by you</strong><strong>. Your Payment Plan will reflect as follows:</strong></p>
<p class="wp-block-paragraph"><strong>8.4.1.the Refunded amount will first be credited against the last Instalment of your Payment Plan; then</strong></p>
<p class="wp-block-paragraph"><strong>8.4.2.if the Refunded amount is more than the last Instalment, the balance of the Refunded amount will be credited against your second last Instalment,</strong></p>
<p class="wp-block-paragraph"><strong>8.4.3.and so on against each Instalment and will lastly be credited against your first Instalment depending on the amount of the Refund.</strong></p>
<p class="wp-block-paragraph"><strong>8.5.In the event that a Merchant Refunds you directly, whether in cash, store credit/vouchers, to your bank account, etc., you will still be liable to pay PayJustNow for all of the Instalments and any Default Charges, in terms of the Payment Plan.</strong></p>
<h2 class="heading wp-block-heading" data-index="7" class="wp-block-heading">PayJustNow Wallet</h2>
<p class="wp-block-paragraph"><strong>9.1.Each Customer will have a PJN Wallet connected to</strong><strong> their </strong><strong>PJN account.</strong></p>
<p class="wp-block-paragraph"><strong>9.2.The Customer agrees that PJN may allocate any credit in the Customer’s PJN wallet towards any amount due by the Customer to PJN or a Merchant.</strong></p>
<p class="wp-block-paragraph"><strong>9.3.Funds in a Customer PJN Wallet will only be credited to the Customer&#8217;s Card upon closure of the consumer’s PJN account and all funds due to PJN have been settled by the Customer.</strong></p>
<p class="wp-block-paragraph"><strong>9.4.If PJN suspects fraud on the Customer’s PJN account, then PJN can freeze the funds in the Customer’s wallet pending investigation into the suspected fraud.</strong></p>
<h2 class="heading wp-block-heading" data-index="8" class="wp-block-heading">Cancellation and Suspension of the Agreement and/or Your Account</h2>
<p class="wp-block-paragraph"><strong>10.1.At any time, and without cause, we may cancel or suspend your Account, access to the PayJustNow Platform, and/or use of the Payment Services in our sole discretion, without any liability if you are in breach of the Agreement.</strong></p>
<p class="wp-block-paragraph"><strong>10.2.In addition, PayJustNow may cancel or suspend your Account if:</strong></p>
<p class="wp-block-paragraph"><strong>10.2.1.we become aware of circumstances that lead us to believe that you will not perform your obligations required by the Agreement; or</strong></p>
<p class="wp-block-paragraph"><strong>10.2.2.you have not used your Account or the Payment Services for 3 (three) years and are therefore considered to be an inactive User.</strong></p>
<p class="wp-block-paragraph"><strong>10.3.Importantly, all our rights in respect of the confidentiality undertakings and our limitation of liability as set out below will survive the termination of the Agreement.</strong></p>
<p class="wp-block-paragraph"><strong>10.4.Upon termination of the Agreement:</strong></p>
<p class="wp-block-paragraph"><strong>10.4.1.you must immediately stop using the PayJustNow Platform and Payment Services;</strong></p>
<p class="wp-block-paragraph"><strong>10.4.2.you must immediately pay all amounts outstanding in terms of any Payment Plan;</strong></p>
<p class="wp-block-paragraph"><strong>10.4.3.we will delete your Account and you will no longer be able to access any portion of the PayJustNow Platform or Payment Services that requires an Account; and</strong></p>
<p class="wp-block-paragraph"><strong>10.4.4.once you have paid all amounts due, we will stop using your payment information but will retain your Personal Information for a reasonable period in line with our Privacy Policy and as required by law.</strong></p>
<h2 class="heading wp-block-heading" data-index="9" class="wp-block-heading">Acceptable Use Policy</h2>
<p class="wp-block-paragraph"><strong>11.1.Users may only use the Payment Services or the PayJustNow Platform for personal, non-commercial use and not for commercial purposes.</strong></p>
<p class="wp-block-paragraph"><strong>11.2.Some devices may not support the use of the PayJustNow Platform. It is your responsibility to keep your device(s) updated and/or in a condition for them to support the use of the PayJustNow Platform, including internet access capabilities.</strong></p>
<p class="wp-block-paragraph"><strong>11.3.We may restrict using the Payment Services and the PayJustNow Platform to certain geographical areas. It is your responsibility to determine whether your location is supported by our Payment Services and the PayJustNow Platform before incurring any liability to us as we will not be liable for any loss that you may incur because of our Payment Services and the PayJustNow Platform not being supported in your location.</strong></p>
<p class="wp-block-paragraph"><strong>11.4.You agree to respect our Payment Services and the PayJustNow Platform and our intellectual property in utmost good faith and use it only as we intend it to be used.</strong></p>
<p class="wp-block-paragraph"><strong>11.5.You agree not to copy, modify, circumvent, disable, damage, impede the operation of and/or tamper with any part of the Payment Services and the PayJustNow Platform, including our security features.</strong></p>
<h2 class="heading wp-block-heading" data-index="10" class="wp-block-heading">Personal Information and Electronic Communications</h2>
<p class="wp-block-paragraph"><strong>12.1.The right to privacy and the protection of your Personal Information is important to us and PayJustNow is committed to taking steps to protect your privacy when we process Personal Information, and we therefore implement business practices and process Personal Information in accordance with applicable data protection laws, including POPIA and process Personal Information in accordance with these Terms and our Privacy Policy.</strong></p>
<p class="wp-block-paragraph"><strong>12.2.By providing us with your Personal Information and using the Services, you consent to PayJustNow processing your Personal Information for the following purposes:</strong></p>
<p class="wp-block-paragraph"><strong>12.2.1.conducting credit checks with registered credit bureaus and submitting information to credit bureaus related to any agreement that may arise between you and us;</strong></p>
<p class="wp-block-paragraph"><strong>12.2.2.verifying the information that you have submitted to PayJustNow with relevant third party sources; and</strong></p>
<p class="wp-block-paragraph"><strong>12.2.3.direct marketing any products, benefits, or offers of the Merchants, Business Partners by us, including through electronic channels and in the PayJustNow Platform, social media accounts or other digital platforms, which consent you may withdraw at any time.</strong></p>
<p class="wp-block-paragraph"><strong>12.3.Your personal information will be processed in compliance with applicable laws and for various business purposes as set out in our Privacy Policy. You acknowledge that we will share your Personal Information with our Business Partners for legitimate business purposes, including to conduct credit checks and prepare personalised offers for you, also taking into account information obtained through your use of the PayJustNow Service. We have service level agreements with the parties we share information with to ensure that your information is protected and only used to provide those services and products to you.</strong></p>
<p class="wp-block-paragraph"><strong>12.4.We will primarily use email and electronic notices on the PayJustNow Platform to communicate with you.</strong></p>
<p class="wp-block-paragraph"><strong>12.5.You can always </strong><strong>opt out</strong><strong> from receiving further direct marketing messages at any point in time or withdraw your consent.</strong></p>
<h2 class="heading wp-block-heading" data-index="11" class="wp-block-heading">Third Party Sites</h2>
<p class="wp-block-paragraph"><strong>13.1.We may provide links to third party websites or apps only for your convenience, and if we include any links or any advertisement of any third party on the PayJustNow Platform, we do not endorse their websites or apps, their products, business or security practices or any association with its operators.</strong></p>
<p class="wp-block-paragraph"><strong>13.2.If you access and use any third-party websites, apps, products, services, and/or business, you do that solely at your own risk.</strong></p>
<h2 class="heading wp-block-heading" data-index="12" class="wp-block-heading">Intellectual Property Rights</h2>
<p class="wp-block-paragraph"><strong>14.1.You acknowledge and agree that all right, title and interest in, and to, any of our intellectual property (including but not limited to any copyright, trademark, design, logo, process, practice, or methodology which forms part of, or is displayed or used on the Payment Services including, without limitation, any graphics, logos, designs text, button icons, images, audio clips, digital downloads, data compilations, page headers and software) is proprietary to PayJustNow, our affiliates or the respective owner(s)&#8217; property and will remain our, our affiliates&#8217; or the owner&#8217;s property at all times.</strong></p>
<p class="wp-block-paragraph"><strong>14.2.You agree that you will not acquire any rights of any nature in respect of that intellectual property by using the Payment Services and the PayJustNow Platform.</strong></p>
<h2 class="heading wp-block-heading" data-index="13" class="wp-block-heading">Warranties and Representations</h2>
<p class="wp-block-paragraph"><strong>Subject to applicable laws:</strong></p>
<p class="wp-block-paragraph"><strong>15.1.we give no guarantee about the content or quality of the Payment Services and/or the PayJustNow Platform, and we also do not give any advice;</strong></p>
<p class="wp-block-paragraph"><strong>15.2.we do not give any warranty (express or implied) or make any representation that our Services will operate error free or without interruption or that we will correct any errors or that the content is complete, accurate, up to date, or fit for a particular purpose; and</strong></p>
<p class="wp-block-paragraph"><strong>15.3.we make no representations to you, either express or implied, and we will have no liability or responsibility for the proper performance of the Payment Services and the PayJustNow Platform and/or the information, images or audio contained on the PayJustNow Platform. </strong><strong>Our Services are used at your own risk</strong><strong>.</strong></p>
<p class="wp-block-paragraph"><strong>15.4.You warrant to and in favour of us that:</strong></p>
<p class="wp-block-paragraph"><strong>15.4.1.you have the legal capacity to agree to and be bound by the Agreement; and/or</strong></p>
<p class="wp-block-paragraph"><strong>15.4.2.the Agreement constitutes a valid and binding contract.</strong></p>
<p class="wp-block-paragraph"><strong>15.5.Each of the warranties given by you will:</strong></p>
<p class="wp-block-paragraph"><strong>15.5.1.be a separate warranty and will in no way be limited or restricted by inference from the terms of any other warranty or by any other words in the Agreement;</strong></p>
<p class="wp-block-paragraph"><strong>15.5.2.continue and remain in force irrespective of whether the Agreement has been cancelled; and</strong></p>
<p class="wp-block-paragraph"><strong>15.5.3.</strong><strong>deemed to be material.</strong></p>
<h2 class="heading wp-block-heading" data-index="14" class="wp-block-heading">Limited Liabilities</h2>
<p class="wp-block-paragraph"><strong>16.1.Subject to applicable laws:</strong></p>
<p class="wp-block-paragraph"><strong>16.1.1.we will not be liable for any loss arising when you use the Services or if you rely on the information presented on the PayJustNow Platform or in the Payment Services;</strong></p>
<p class="wp-block-paragraph"><strong>16.1.2.and other than as a result of PayJustNow&#8217;s gross negligence or gross misconduct, PayJustNow will not be liable to you for any loss caused by using the Payment Services or your liability to any third party arising from using the Payment Services. This includes but is not limited to:</strong></p>
<p class="wp-block-paragraph"><strong>16.1.2.1.any interruption, malfunction, downtime, off-line situation or other failure of the PayJustNow Platform, system, databases or any of its components;</strong></p>
<p class="wp-block-paragraph"><strong>16.1.2.2.any loss or damage regarding your data or other data directly or indirectly caused by malfunction of the PayJustNow Platform; and</strong></p>
<p class="wp-block-paragraph"><strong>16.1.2.3.any third-party systems whatsoever, power failures, unlawful access to or theft of data, computer viruses or destructive code on the PayJustNow Platform, or third-party systems or programming defects;</strong></p>
<p class="wp-block-paragraph"><strong>16.1.3.we will not be liable if any material available for downloading from the PayJustNow Platform is not free from infection, viruses and/or other code that has contaminating or destructive properties;</strong></p>
<p class="wp-block-paragraph"><strong>16.1.4.the PayJustNow Platform may include inaccuracies or typos – in such instances we can&#8217;t be held liable and can&#8217;t be forced to comply with offers that are genuinely (and/or negligently) erroneous;</strong></p>
<p class="wp-block-paragraph"><strong>16.1.5.we are not responsible for the proper and/or complete transmission of the information contained in any electronic communication or of the electronic communication itself nor for any delay in its delivery or receipt. We have implemented security measures to ensure the safety and integrity of our Payment Services and the PayJustNow Platform. However, despite this, information transmitted over the internet may be susceptible to unlawful access and monitoring; and</strong></p>
<p class="wp-block-paragraph"><strong>16.1.6.our limited liability applies to all and any kind of loss which we can possibly contract out of under law, including direct, indirect, consequential, special or other kinds of losses or claims which you may suffer.</strong></p>
<h2 class="heading wp-block-heading" data-index="15" class="wp-block-heading">Force Majeure</h2>
<p class="wp-block-paragraph"><strong>Except for the obligation to pay monies due and owing, PayJustNow will not be liable to perform in terms of the Agreement if reasons beyond our control prohibit us. This includes lightning, flooding, exceptionally severe weather, fire, explosion, war, civil disorder, industrial disputes, acts or omissions of persons for which we are not responsible, and acts of government or other competent authorities (including telecommunications and internet service providers).</strong></p>
<h2 class="heading wp-block-heading" data-index="16" class="wp-block-heading">General</h2>
<p class="wp-block-paragraph"><strong>18.1.Suspension of the PayJustNow Platform: we may temporarily suspend the PayJustNow Platform for any reason, including repairs or upgrades and will take reasonable efforts to notify Users in advance.</strong></p>
<p class="wp-block-paragraph"><strong>18.2.Entire agreement: the Agreement constitutes the whole agreement between the parties and supersedes any other discussions, agreements and/or understandings.</strong></p>
<p class="wp-block-paragraph"><strong>18.3.Law and jurisdiction: the Agreement and all obligations arising from it shall be governed and interpreted in terms of the laws of the Republic of South Africa.</strong></p>
<p class="wp-block-paragraph"><strong>18.4.Good faith: the parties shall in their dealings with each other display good faith.</strong></p>
<p class="wp-block-paragraph"><strong>18.5.No waiver: if PayJustNow does not insist or enforce strict performance of the Agreement, or does not exercise any right under the Agreement, it does not mean they waive their rights to enforce it in any other instance.</strong></p>
<p class="wp-block-paragraph"><strong>18.6.No assignment: you may not cede your rights or delegate your obligations in terms of the Agreement without PayJustNow expressly agreeing.</strong></p>
<p class="wp-block-paragraph"><strong>18.7.Relationship between the parties: the parties agree that neither party is a partner or agent of the other and will not have any right, power, or authority to enter into any agreement for, or on behalf of, or incur any obligation or bind the other party.</strong></p>
<p class="wp-block-paragraph"><strong>18.8.No representation: to the extent permissible by law, PayJustNow shall not be bound by any express or implied or tacit term, representation, warranty, promise or the like not recorded herein, whether it induced the contract and/or whether it was negligent or not.</strong></p>
<p class="wp-block-paragraph"><strong>18.9.Severability: any provision in the Agreement, which is or may become illegal, invalid or unenforceable shall be ineffective to the extent of such prohibition or unenforceability and shall be severed from the balance of the Agreement, without invalidating the remaining provisions of the Agreement.</strong></p>
<p class="wp-block-paragraph"><strong>18.10.No stipulation: no part of the Agreement shall constitute a stipulation in favour of any person who is not a party to these Terms unless the provision in question expressly provides that it does constitute such a stipulation.</strong></p>
<p class="wp-block-paragraph"><strong>18.11.Notices for the service of all formal notices and legal processes:</strong></p>
<p class="wp-block-paragraph"><strong>18.11.1.PayJustNow: 3rd Floor, Sunclare Building, Claremont, Cape Town, 7708 and </strong><strong>support@payjustnow.com</strong><strong> as its email address or as updated on 7days’ written notice.</strong></p>
<p class="wp-block-paragraph" style="font-style:normal;font-weight:700"><strong>18.11.2.Your address and email address specified in your Account.18.11.3.Service <em>via</em> email shall be accepted in all cases where notice is required unless alternative service is required by law. Service <em>via</em> email is deemed to be received at the time and day of sending.</strong></p>
<p class="wp-block-paragraph" style="font-style:normal;font-weight:700">18.11.3.Service <em>via</em> email shall be accepted in all cases where notice is required unless alternative service is required by law. Service <em>via</em> email is deemed to be received at the time and day of sending.</p>
<h2 class="heading wp-block-heading" data-index="17" class="wp-block-heading">THE PJN MOBILE SUBSCRIBER CODE OF CONDUCT</h2>
<p class="wp-block-paragraph"><strong>This Subscriber Code of Conduct is a set of commitments to you, which PJN Mobile strives to honour, and also sets out your rights as a customer.</strong></p>
<p class="wp-block-paragraph"><strong>PJN Mobile commits to:</strong></p>
<ul class="wp-block-list">
<li><strong>Act in a fair, reasonable, responsible and non-discriminatory way towards you at all times.</strong></li>
<li><strong>Display the ultimate professionalism, courtesy and care when dealing with you.</strong></li>
<li><strong>Make sure that our products and services meet all the requirements and specifications of all laws and licences.</strong></li>
<li><strong>Provide you with accurate and complete information regarding our services and pricing.</strong></li>
<li><strong>Guide you on your communication needs.</strong></li>
<li><strong>Process personal information in a fair and lawful manner and only with your consent.</strong></li>
<li><strong>Refer you to ICASA for your unresolved complaints.</strong></li>
</ul>
<p class="wp-block-paragraph"><strong>You have the following rights:</strong></p>
<ul class="wp-block-list">
<li><strong>To be provided with services in a non-discriminatory way and information in your preferred language.</strong></li>
<li><strong>To choose a service provider of your choice.</strong></li>
<li><strong>To access and query your information held by the service provider.</strong></li>
<li><strong>For your information to be kept confidential (unless indicated otherwise).</strong></li>
<li><strong>To choose to port your number.</strong></li>
<li><strong>The right to lodge a complaint with ICASA.</strong></li>
</ul>
<h2 class="heading wp-block-heading" data-index="18" class="wp-block-heading">Additional information</h2>
<p class="wp-block-paragraph"><strong>If you want more information, call 135 free from a PJN Mobile SIM, or 084 13734 from any other network or visit our free website at <a href="https://www.payjustnow.com">www.payjustnow.com</a> for</strong></p>
<ul class="wp-block-list">
<li><strong>Frequently asked questions</strong></li>
<li><strong>Product and rates related information</strong></li>
<li><strong>Technical information</strong></li>
<li><strong>Additional support numbers</strong></li>
</ul>
<h2 class="heading wp-block-heading" data-index="19" class="wp-block-heading">Customer care and complaints</h2>
<p class="wp-block-paragraph"><strong>To report a complaint, call 135 free from a PJN Mobile SIM or 084 13734 from any other network or send us an email on <a href="mailto:pjnmobile@payjustnow.com">pjnmobile@payjustnow.com</a></strong></p>
<p class="wp-block-paragraph"><strong>If your complaint is unresolved, you may refer it to:</strong></p>
<ul class="wp-block-list">
<li><strong>ICASA email: <a href="mailto:consumer@icasa.org.co.za">consumer@icasa.org.co.za</a>; phone: 011 566 3000</strong></li>
<li><strong>The National Consumer Commission by email: <a href="mailto:complaints@thencc.org.co.za">complaints@thencc.org.co.za</a>, or phone: 012 428 7000/012 428 7726)</strong></li>
</ul>
<p class="wp-block-paragraph"></p>
`;

export default function TermsPage() {
  return (
    <LegalLayout title="Terms and Conditions" sections={SECTIONS}>
      <div className="legal-content" dangerouslySetInnerHTML={{ __html: CONTENT_HTML }} />
    </LegalLayout>
  );
}
