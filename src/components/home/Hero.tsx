"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function AppleIcon() {
  return (
    <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.3638 0.016014C19.2958 -0.059986 16.8458 0.0460141 14.7139 2.36001C12.5819 4.67201 12.9099 7.32401 12.9578 7.39201C13.0058 7.46001 15.9979 7.56601 17.9079 4.87601C19.8179 2.18601 19.4318 0.094014 19.3638 0.016014ZM25.9918 23.482C25.8958 23.29 21.3419 21.014 21.7659 16.638C22.1898 12.26 25.1158 11.06 25.1618 10.93C25.2078 10.8 23.9678 9.35001 22.6538 8.61601C21.6891 8.09852 20.6213 7.80203 19.5278 7.74801C19.3118 7.74201 18.5618 7.55801 17.0198 7.98001C16.0038 8.25801 13.7138 9.15801 13.0838 9.19401C12.4518 9.23001 10.5718 8.15001 8.54985 7.86401C7.25585 7.61401 5.88385 8.12601 4.90185 8.52001C3.92185 8.91201 2.05785 10.028 0.753852 12.994C-0.550148 15.958 0.131852 20.654 0.619852 22.114C1.10785 23.572 1.86985 25.962 3.16585 27.706C4.31785 29.674 5.84585 31.04 6.48385 31.504C7.12185 31.968 8.92185 32.276 10.1699 31.638C11.1739 31.022 12.9858 30.668 13.7018 30.694C14.4158 30.72 15.8238 31.002 17.2659 31.772C18.4079 32.166 19.4878 32.002 20.5698 31.562C21.6518 31.12 23.2178 29.444 25.0458 26.046C25.7398 24.466 26.0558 23.612 25.9918 23.482Z" fill="black"/>
    </svg>
  );
}

function HuaweiIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0548 26.697V29.6895C10.0548 30.5407 9.64067 30.9901 8.89004 30.9901C8.13424 30.9901 7.7201 30.5248 7.7201 29.6525V26.7023H6.68476V29.6895C6.68476 31.1593 7.48197 31.9999 8.87969 31.9999C10.2878 31.9999 11.0953 31.1434 11.0953 29.6419V26.6917L10.0548 26.697ZM13.8701 26.697L11.6182 31.9206H12.6794L13.1142 30.9108L13.1453 30.8367H15.4852L15.9459 31.9259H17.033L14.8019 26.734L14.7812 26.7023L13.8701 26.697ZM20.0407 26.697L18.8811 30.2922L17.7526 26.7023H16.6448L18.4256 31.9259H19.2849L20.4497 28.4946L21.6144 31.9259H22.4789L24.2546 26.7023H23.1778L22.0441 30.2922L20.8845 26.697H20.0407ZM30.1974 26.697V31.9153H31.2224V26.697H30.1974ZM0.824707 26.697V31.9206H1.86005V29.8005H4.20511V31.9206H5.24563V26.697H4.20511V28.8065H1.86005V26.697H0.824707ZM25.0932 26.7023V31.9206H28.955V30.9689H26.1182V29.6736H28.0077V28.7219H26.1182V27.654H28.8618V26.7023H25.0932ZM14.3101 28.0188L15.0503 29.7688H15.0452L15.0969 29.8904H13.5284L13.5802 29.7688L14.3101 28.0188Z" fill="black"/>
      <path d="M13.7465 0C13.3324 0.0370091 12.2246 0.296073 12.2246 0.296073C9.71903 0.956949 9.12371 3.28323 9.12371 3.28323C8.99947 3.67447 8.9477 4.07628 8.927 4.45166V4.9645C8.95806 5.75755 9.13406 6.3497 9.13406 6.3497C9.97269 10.1458 14.0882 16.3791 14.9734 17.685C15.0355 17.7485 15.0873 17.7273 15.0873 17.7273C15.1805 17.7009 15.1753 17.6057 15.1753 17.6057C16.542 3.69033 13.7465 0 13.7465 0ZM18.2503 0C18.2503 0 15.4445 3.69033 16.806 17.6163C16.8163 17.7062 16.8784 17.722 16.8784 17.722C16.9716 17.7591 17.0182 17.6692 17.0182 17.6692C17.9241 16.3263 22.0189 10.1299 22.8524 6.3497C22.8524 6.3497 23.3028 4.52039 22.8679 3.28323C22.8679 3.28323 22.2467 0.925227 19.736 0.30136C19.7412 0.30136 19.0216 0.111027 18.2503 0ZM5.30847 4.18202C5.30847 4.18202 2.91682 6.49773 2.80293 8.9509V9.321C2.80293 9.34743 2.80811 9.37915 2.80811 9.40559C2.91164 11.3829 4.37148 12.5566 4.37148 12.5566C6.71653 14.8988 12.4058 17.8489 13.7258 18.5204C13.7465 18.5257 13.8138 18.5521 13.8552 18.4992C13.8552 18.4992 13.8759 18.4834 13.8863 18.4517V18.3882C13.8863 18.3829 13.8811 18.3829 13.8811 18.3776C10.2626 10.3044 5.30847 4.17674 5.30847 4.18202ZM26.6832 4.18202C26.6832 4.18202 21.7446 10.2885 18.126 18.3512C18.126 18.3512 18.0846 18.4464 18.1519 18.5045C18.1519 18.5045 18.1726 18.5204 18.1985 18.5257H18.2503C18.2606 18.5204 18.271 18.5204 18.2762 18.5151C19.6325 17.8278 25.2803 14.8935 27.6201 12.5672C27.6201 12.5672 29.1007 11.3512 29.1783 9.4003C29.3543 6.68807 26.6832 4.17674 26.6832 4.18202ZM31.13 12.1971C31.13 12.1971 23.0802 16.6118 18.9181 19.4773C18.9181 19.4773 18.8404 19.5302 18.8715 19.6201C18.8715 19.6201 18.9129 19.6941 18.9698 19.6941C20.4607 19.6994 26.1034 19.7047 26.2431 19.6782C26.2431 19.6782 26.9731 19.6465 27.8738 19.2923C27.8738 19.2923 29.8824 18.642 30.9229 16.3157C30.9229 16.3157 31.3992 15.3429 31.4043 13.9736V13.9154C31.3992 13.392 31.3267 12.8051 31.13 12.1971ZM0.86166 12.2183C0.126565 14.534 1.11532 16.4003 1.11532 16.4003C2.14549 18.6208 4.10229 19.2976 4.10229 19.2976C9.64917 21.5073 13.21 23.396 13.21 23.396C13.21 23.396 13.21 23.396 13.2255 23.396C13.2255 23.396 13.2102 18.3999 13.2102 16.3634C10.5494 12.2022 0.86166 12.2183 0.86166 12.2183ZM16.806 16.3739C16.8163 16.4109 16.8163 18.857 16.8163 23.396C16.8163 23.396 16.8319 23.396 16.8319 23.396C16.8319 23.396 20.398 21.5178 25.9296 19.3078C25.9296 19.3078 27.9229 18.6044 28.9435 16.4207C28.9435 16.4207 31.2352 12.2183 19.2102 16.3634C19.2102 16.3634 18.0254 16.721 16.806 16.3739Z" fill="black"/>
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.3301 14.6437L5.53633 0.8125L23.0863 10.8875L19.3301 14.6437ZM1.93633 0C1.12383 0.425 0.580078 1.2 0.580078 2.20625V29.7875C0.580078 30.7937 1.12383 31.5687 1.93633 31.9937L17.9738 15.9937L1.93633 0ZM28.5113 14.1L24.8301 11.9687L20.7238 16L24.8301 20.0312L28.5863 17.9C29.7113 17.0062 29.7113 14.9937 28.5113 14.1ZM5.53633 31.1875L23.0863 21.1125L19.3301 17.3562L5.53633 31.1875Z" fill="black"/>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-[#eff1f1] overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-dark leading-[1.1] mb-6">
              The clever
              <br />
              way to pay
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
              South Africa&apos;s fastest-growing flexible payment provider. Pay in 3
              or 12 online and instore. Split your spend. Shop more. Stress less.
              Clever.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <Link
                href="#"
                className="px-8 py-3.5 bg-primary text-black font-semibold rounded-full hover:bg-primary-hover transition-colors text-sm"
              >
                Sign Up
              </Link>
              <Link
                href="#"
                className="px-8 py-3.5 border-2 border-text-dark text-text-dark font-semibold rounded-full hover:bg-text-dark hover:text-white transition-colors text-sm"
              >
                How it works
              </Link>
            </div>

            <div className="flex items-center gap-5">
              <Image
                src="https://payjustnow.com/wp-content/uploads/2025/04/Group-13080-1.svg"
                alt="PayJustNow QR Code"
                width={80}
                height={80}
                className="shrink-0"
              />
              <div className="flex items-center gap-4">
                <a href="#" aria-label="Download on the App Store" className="transition-transform hover:scale-105">
                  <AppleIcon />
                </a>
                <a href="#" aria-label="Download on Huawei AppGallery" className="transition-transform hover:scale-105">
                  <HuaweiIcon />
                </a>
                <a href="#" aria-label="Get it on Google Play" className="transition-transform hover:scale-105">
                  <GooglePlayIcon />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              <div className="relative rounded-[40px] overflow-hidden aspect-[4/5]">
                <Image
                  src="https://payjustnow.com/wp-content/uploads/2025/10/hero-pjn.jpg"
                  alt="Shop with PayJustNow"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-full opacity-30 blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cool-blue rounded-full opacity-20 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}