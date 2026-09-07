import { BlogCategory, categories } from "./blog-data";

export default function CategoryExplore({
  categories: items = categories,
}: {
  categories?: BlogCategory[];
}) {
  return (
    <section className="section section-light section-categories">
      <div className="container">
        <div className="s-inner">
          <div className="s-content">
            <h2 className="s-title">Explore by Category</h2>
          </div>
          <div className="categories">
            {items.map((category) => (
              <div className="category" data-category={category.id} key={category.id}>
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img
                      width="24"
                      height="24"
                      className="media image"
                      alt=""
                      src={category.icon}
                    />
                  </span>
                </figure>
                <span className="category-text">{category.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}