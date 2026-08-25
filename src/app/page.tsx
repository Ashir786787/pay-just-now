import Link from "next/link";

export default function HomePage() {
  return (
    <div className="pt-16">
      <section className="bg-black text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">
            The clever way to <span className="text-primary">pay</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Shop now, pay later with PayJustNow. Split your purchase into 3
            interest-free instalments or pay in 12 months.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/payin3"
              className="px-8 py-3.5 bg-primary text-black font-semibold rounded-full hover:bg-primary-hover transition-colors"
            >
              Pay in 3
            </Link>
            <Link
              href="/payin12"
              className="px-8 py-3.5 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors"
            >
              Pay in 12
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Home Page</h2>
          <p className="text-gray-500">
            Full home page content coming in Milestone 2
          </p>
        </div>
      </section>
    </div>
  );
}
