import Link from "next/link";
import Image from "next/image";

export default function DownloadSection() {
  return (
    <section className="bg-[#f6f8f2] py-16 md:py-24">
      <div className="site-container">
        <h2 className="font-['Outfit'] text-3xl font-bold text-black md:text-4xl lg:text-5xl text-center">
          Get the App
        </h2>
        <p className="mt-4 text-center text-gray-500 md:text-lg">
          Download the PayJustNow app to start shopping.
        </p>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] text-gray-300">
                    Download on the
                  </span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </Link>

              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M3.18 23.04c.95.67 2.13.22 2.13-.68V1.64c0-.9-1.18-1.35-2.13-.68C1.82 1.75.55 5.87.55 12s1.27 10.25 2.63 11.04zM17.33 12l-4.25-2.45v4.9L17.33 12zM23.45 11.18l-3.72-2.05-4.6 2.65 4.6 2.65 3.72-2.05c1.04-.58 1.04-2.02 0-2.6zM6.43 1.27l10.65 6.15-4.25 2.45L6.43 1.27z" />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] text-gray-300">
                    GET IT ON
                  </span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </Link>

              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] text-gray-300">
                    Explore it on
                  </span>
                  <span className="text-sm font-semibold">AppGallery</span>
                </div>
              </Link>
            </div>

            <p className="mt-6 max-w-sm text-xs leading-relaxed text-gray-500">
              Disclaimer: A PayJustNow profile must be created to activate the
              app.
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative overflow-hidden rounded-[32px]">
                <Image
                  src="https://payjustnow.com/wp-content/uploads/2025/04/image-12-1.jpg"
                  alt="Get the PayJustNow app"
                  width={440}
                  height={520}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-3 shadow-lg md:-bottom-6 md:-left-6 md:p-4">
                <Image
                  src="https://payjustnow.com/wp-content/uploads/2025/04/Group-13080-1.svg"
                  alt="Scan to download PayJustNow"
                  width={96}
                  height={96}
                  className="h-16 w-16 md:h-24 md:w-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
