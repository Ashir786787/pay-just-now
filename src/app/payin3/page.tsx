import Link from "next/link";

export default function PayIn3Page() {
  return (
    <div className="pt-16">
      <section className="bg-black text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">
            Pay in <span className="text-primary">3</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Split any purchase into 3 interest-free instalments. It&apos;s that simple.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pay in 3 Page</h2>
          <p className="text-gray-500 mb-8">
            Full Pay in 3 content coming in Milestone 3
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
