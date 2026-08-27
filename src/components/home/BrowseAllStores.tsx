import Link from "next/link";

export default function BrowseAllStores() {
  return (
    <section className="bg-[#eff1f1] py-16 md:py-24">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-3xl bg-[#f6f8f2] px-6 py-16 text-center md:px-16 md:py-20">
          {/* Decorative circle */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#BDF500]/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#BDF500]/10 blur-3xl" />

          <h2 className="relative font-['Outfit'] text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            Browse all stores
            <br className="hidden sm:block" /> and products
          </h2>

          <div className="relative mt-8">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
