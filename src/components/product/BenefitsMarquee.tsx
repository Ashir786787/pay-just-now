"use client";

interface Benefit {
  icon: string;
  text: string;
}

interface BenefitsMarqueeProps {
  title: string;
  benefits: Benefit[];
}

export default function BenefitsMarquee({
  title,
  benefits,
}: BenefitsMarqueeProps) {
  const duplicatedBenefits = [...benefits, ...benefits];

  return (
    <section className="bg-primary py-16 overflow-hidden">
      <div className="site-container text-center mb-10">
        <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-surface">
          {title}
        </h2>
      </div>

      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedBenefits.map((benefit, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 mx-3 shrink-0"
            >
              <img
                src={benefit.icon}
                alt=""
                className="w-6 h-6 object-contain"
              />
              <span className="text-surface font-medium text-sm whitespace-nowrap">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
