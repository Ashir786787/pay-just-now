import Link from "next/link";
import Image from "next/image";
import {
  AppStoreButton,
  GooglePlayButton,
  AppGalleryButton,
} from "@/components/icons/StoreBadges";

export default function GetTheApp() {
  return (
    <section className="bg-[#fafbfb] py-16 md:py-24">
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-['Outfit'] text-3xl font-bold text-black md:text-4xl lg:text-5xl">
              Get the app
            </h2>

            <p className="mt-4 max-w-md text-sm text-gray-600 md:text-base">
              Download the PayJustNow app to start shopping.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link
                href="#"
                className="inline-block overflow-hidden rounded-lg bg-black p-2 transition-transform hover:-translate-y-0.5"
              >
                <AppStoreButton className="block h-7 w-auto" />
              </Link>
              <Link
                href="#"
                className="inline-block overflow-hidden rounded-lg bg-black p-2 transition-transform hover:-translate-y-0.5"
              >
                <GooglePlayButton className="block h-7 w-auto" />
              </Link>
              <Link
                href="#"
                className="inline-block overflow-hidden rounded-lg bg-black p-2 transition-transform hover:-translate-y-0.5"
              >
                <AppGalleryButton className="block h-7 w-auto" />
              </Link>
            </div>

            <p className="mt-6 max-w-sm text-xs leading-relaxed text-gray-500">
              Disclaimer: A PayJustNow profile must be created to activate the
              app.
            </p>
          </div>

          {/* Right — image with QR code */}
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

              {/* QR code overlay */}
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