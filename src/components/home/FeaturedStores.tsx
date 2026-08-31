interface Store {
  name: string;
  status: string;
  href: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  logo: string;
  logoWidth: number;
  logoHeight: number;
}

const stores: Store[] = [
  {
    name: "Superbalist",
    status: "Online only",
    href: "#",
    image: "https://payjustnow.com/wp-content/uploads/2026/02/compressed-image-2.jpg",
    imageWidth: 4758,
    imageHeight: 4758,
    logo: "https://payjustnow.com/wp-content/uploads/2025/03/Large.png",
    logoWidth: 281,
    logoHeight: 140,
  },
  {
    name: "Game",
    status: "In-store only",
    href: "#",
    image: "https://payjustnow.com/wp-content/uploads/2024/03/f78b84c0eb6d6f7c06e6fb60776af450-1.jpg",
    imageWidth: 800,
    imageHeight: 533,
    logo: "https://payjustnow.com/wp-content/uploads/2024/03/game.png",
    logoWidth: 462,
    logoHeight: 462,
  },
  {
    name: "Edgars",
    status: "Online & In-store",
    href: "#",
    image: "https://payjustnow.com/wp-content/uploads/2024/03/696c07ae54098fa73a05409c801bfe62-1.jpg",
    imageWidth: 800,
    imageHeight: 508,
    logo: "https://payjustnow.com/wp-content/uploads/2023/11/Large.png",
    logoWidth: 161,
    logoHeight: 86,
  },
  {
    name: "Adidas",
    status: "In-store only",
    href: "#",
    image: "https://payjustnow.com/wp-content/uploads/2025/04/PJN4.jpg",
    imageWidth: 511,
    imageHeight: 800,
    logo: "https://payjustnow.com/wp-content/uploads/2025/04/adidas2-1.png",
    logoWidth: 800,
    logoHeight: 800,
  },
];

export default function FeaturedStores() {
  return (
    <section className="section section-featured-stores">
      <div className="container">
        <div className="s-inner">
          <div className="s-content">
            <div className="s-title-wrapper">
              <h2 className="s-title">Featured Stores</h2>
              <a className="s-link" href="#">
                View All
              </a>
            </div>
          </div>
          <div className="featured-stores">
            {stores.map((store) => (
              <div className="featured-store" key={store.name}>
                <a className="featured-store-link" href={store.href} aria-label={store.name}></a>
                <div className="featured-store-inner">
                  <span className="featured-store-status">{store.status}</span>
                  <div className="featured-store-media">
                    <div className="featured-store-image">
                      <figure className="media-wrapper image-wrapper responsive">
                        <span className="media-inner image-inner">
                          <img width={store.imageWidth} height={store.imageHeight} className="media image" alt="" src={store.image} />
                        </span>
                      </figure>
                    </div>
                    <div className="featured-store-logo">
                      <figure className="media-wrapper image-wrapper">
                        <span className="media-inner image-inner">
                          <img width={store.logoWidth} height={store.logoHeight} className="media image" alt={store.name} src={store.logo} />
                        </span>
                      </figure>
                    </div>
                  </div>
                  <div className="featured-store-title-wrapper">
                    <div className="circle-fill"></div>
                    <h3 className="featured-store-title">
                      <span className="featured-store-title-text split-line">{store.name}</span>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
