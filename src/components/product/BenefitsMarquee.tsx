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
  const duplicated = [...benefits, ...benefits];

  return (
    <section className="section section-benefits">
      <div className="container">
        <h2 className="s-title s-title-alt">{title}</h2>
      </div>
      <div className="carousel carousel-benefits">
        <div className="carousel-track">
          {duplicated.map((benefit, index) => (
            <div className="carousel-item" key={index}>
              <figure className="media-wrapper image-wrapper">
                <span className="media-inner image-inner">
                  <img
                    width="24"
                    height="24"
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
