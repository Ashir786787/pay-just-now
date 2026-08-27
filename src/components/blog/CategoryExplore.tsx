import Link from "next/link";
import { categories } from "./blog-data";

export default function CategoryExplore() {
  return (
    <section className="border-t border-[#eef0f1] bg-white py-16 md:py-20">
      <div className="site-container">
        <h2 className="mb-10 text-center font-['Outfit'] text-3xl font-bold text-black md:text-4xl">
          Explore by Category
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href="#posts"
              className="flex flex-col items-center gap-3 rounded-2xl border border-[#f0f0f0] bg-white px-4 py-6 text-center transition-colors duration-200 hover:border-[#BDF500] hover:bg-[#F7FAED]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={category.icon}
                alt=""
                width={25}
                height={24}
                className="h-6 w-auto"
              />
              <span className="text-sm font-medium text-gray-700">
                {category.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}