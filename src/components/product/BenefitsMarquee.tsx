interface Benefit {
  icon: string;
  iconWidth?: number;
  iconHeight?: number;
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
  const duplicated = [...benefits, ...benefits];

  return (
    <section className="section section-benefits">
      <div className="container">
        <div className="s-inner">
          <div className="s-content">
            <h2 className="s-title s-title-alt">{title}</h2>
          </div>
        </div>
      </div>
      <div className="carousel carousel-benefits">
        <div className="carousel-track">
          {duplicated.map((benefit, index) => (
            <div
              className={`carousel-item${
                (benefit.iconWidth ?? 24) > 24 ? " icon-lg" : ""
              }`}
              key={index}
            >
              <figure className="media-wrapper image-wrapper">
                <span className="media-inner image-inner">
                  <img
                    width={benefit.iconWidth ?? 24}
                    height={benefit.iconHeight ?? 24}
                    className="media image"
                    alt=""
                    src={benefit.icon}
                  />
                </span>
              </figure>
              <span className="carousel-item-text">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}