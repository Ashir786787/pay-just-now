import Link from "next/link";

interface Store {
  name: string;
  status: string;
  bgImage: string;
  logo: string;
}

const stores: Store[] = [
  {
    name: "Superbalist",
    status: "Online only",
    bgImage:
      "https://payjustnow.com/wp-content/uploads/2026/02/compressed-image-2.jpg",
    logo: "https://payjustnow.com/wp-content/uploads/2025/03/Large.png",
  },
  {
    name: "Game",
    status: "In-store only",
    bgImage:
      "https://payjustnow.com/wp-content/uploads/2024/03/f78b84c0eb6d6f7c06e6fb60776af450-1.jpg",
    logo: "https://payjustnow.com/wp-content/uploads/2024/03/game.png",
  },
  {
    name: "Edgars",
    status: "Online & In-store",
    bgImage:
      "https://payjustnow.com/wp-content/uploads/2024/03/696c07ae54098fa73a05409c801bfe62-1.jpg",
    logo: "https://payjustnow.com/wp-content/uploads/2023/11/Large.png",
  },
  {
    name: "Adidas",
    status: "In-store only",
    bgImage:
      "https://payjustnow.com/wp-content/uploads/2025/04/PJN4.jpg",
    logo: "https://payjustnow.com/wp-content/uploads/2025/04/adidas2-1.png",
  },
];

export default function FeaturedStores() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="site-container">
        {/* Heading row */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="font-['Outfit'] text-3xl font-bold text-black md:text-4xl">
            Featured Stores
          </h2>
          <Link
            href="#"
            className="text-sm font-semibold text-[#0C5765] underline-offset-4 hover:underline"
          >
            View All
          </Link>
        </div>

        {/* Store cards grid — responsive */}
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:overflow-visible md:pb-0 lg:grid lg:grid-cols-4 lg:gap-6">
          {stores.map((store) => (
            <Link
              key={store.name}
              href="#"
              className="group flex min-w-[260px] snap-start flex-col md:min-w-[280px] lg:min-w-0"
            >
              <div className="relative overflow-hidden rounded-2xl">
                {/* Background image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={store.bgImage}
                  alt={store.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Status badge */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black backdrop-blur-sm">
                  {store.status}
                </span>

                {/* Store logo */}
                <div className="absolute left-1/2 top-3/4 h-14 w-14 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-white p-1.5 shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={store.logo}
                    alt={`${store.name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* Title row with circle fill */}
              <div className="flex items-center gap-2.5 pt-4">
                <span className="h-3 w-3 rounded-full bg-[#BDF500]" />
                <h3 className="text-lg font-bold text-black">{store.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}