import Link from "next/link";
import { categories } from "./blog-data";

export default function CategoryExplore() {
  return (
    <section className="section section-light section-categories">
      <div className="container">
        <div className="blog-header">
          <h2 className="s-title">Explore by Category</h2>
          <Link className="s-link" href="#posts">
            View All
          </Link>
        </div>
        <div className="blog-categories">
          {categories.map((category) => (
            <Link
              key={category.id}
              href="#posts"
              className="blog-category"
            >
              <img
                src={category.icon}
                alt=""
                width={25}
                height={24}
                className="blog-category-icon"
              />
              <span className="blog-category-label">{category.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
