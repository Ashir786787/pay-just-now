import Image from "next/image";

const stores = [
  { name: "Superbalist", status: "Online only", href: "https://superbalist.com/", image: "https://payjustnow.com/wp-content/uploads/2026/02/compressed-image-2.jpg" },
  { name: "Game", status: "In-store only", href: "https://www.game.co.za/", image: "https://payjustnow.com/wp-content/uploads/2024/03/f78b84c0eb6d6f7c06e6fb60776af450-1.jpg" },
  { name: "Edgars", status: "Online & In-store", href: "https://www.edgars.co.za/", image: "https://payjustnow.com/wp-content/uploads/2024/03/696c07ae54098fa73a05409c801bfe62-1.jpg" },
  { name: "Adidas", status: "In-store only", href: "https://www.adidas.co.za/", image: "https://payjustnow.com/wp-content/uploads/2025/04/PJN4.jpg" },
];

export default function FeaturedStores() {
  return (
    <section className="stores-section">
      <div className="stores-section-inner">
        <div className="stores-heading"><h2>Featured Stores</h2><a href="https://app.payjustnow.com/stores" target="_blank" rel="noopener noreferrer">View All</a></div>
        <div className="stores-grid">
          {stores.map((store) => (
            <a key={store.name} className="store-card" href={store.href} target="_blank" rel="noopener noreferrer">
              <div className="store-card-image"><Image src={store.image} alt={store.name} width={800} height={800} /></div>
              <span className="store-card-status">{store.status}</span>
              <span className="store-card-name">{store.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
