import Link from "next/link";

export default function ContentHubPage() {
  return (
    <div className="pt-16">
      <section className="bg-black text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">
            <span className="text-primary">Content Hub</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Tips, tricks, and insights to help you shop smarter.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Content Hub Page</h2>
          <p className="text-gray-500 mb-8">
            Full Content Hub content coming in Milestone 4
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
