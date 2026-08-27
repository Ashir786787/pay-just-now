import Link from "next/link";

interface OptionCard {
  title: string;
  description: string;
  image: string;
  mobileImage?: string;
  link: string;
  bgColor: string;
}

interface AboutOptionsProps {
  options: OptionCard[];
}

export default function AboutOptions({ options }: AboutOptionsProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="site-container">
        <h2 className="font-['Outfit'] text-3xl font-bold text-gray-900 md:text-4xl text-center">
          Clever is about options
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl"
              style={{ backgroundColor: option.bgColor }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                {option.mobileImage ? (
                  <picture>
                    <source
                      media="(max-width: 768px)"
                      srcSet={option.mobileImage}
                    />
                    <img
                      src={option.image}
                      alt={option.title}
                      className="h-full w-full object-cover"
                    />
                  </picture>
                ) : (
                  <img
                    src={option.image}
                    alt={option.title}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              <div className="flex flex-col gap-4 p-6 md:p-8">
                <h3 className="font-['Outfit'] text-xl font-bold text-white md:text-2xl">
                  {option.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/80 md:text-base">
                  {option.description}
                </p>
                <div>
                  <Link
                    href={option.link}
                    className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    More Information
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
