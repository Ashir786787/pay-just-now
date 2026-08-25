import Link from "next/link";

export default function PressPage() {
  return (
    <div className="pt-16">
      <section className="bg-black text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">
            <span className="text-primary">Press</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Stay up to date with the latest news and media from PayJustNow.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Press Page</h2>
          <p className="text-gray-500 mb-8">
            Full Press content coming in Milestone 4
          </p>
          <Link
            href="/"
            className="text-primary hover:underline font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
