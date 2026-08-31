interface OptionCard {
  title: string;
  description: string;
  image: string;
  mobileImage?: string;
  link: string;
  variant: string;
}

interface AboutOptionsProps {
  options: OptionCard[];
}

export default function AboutOptions({ options }: AboutOptionsProps) {
  return (
    <section className="section section-lightest section-about-options">
      <div className="container">
        <div className="s-inner">
          <div className="s-title-wrapper">
            <h2 className="s-title">Clever is about options</h2>
          </div>
        </div>
        <div className="content-grid content-grid-light content-grid-two">
          {options.map((option, index) => (
            <div className="cg-col" key={index}>
              <div
                className={`image-wrapper cg-item cg-item-content ${option.variant}`}
              >
                <div className="s-media desktop-only">
                  <figure className="media-wrapper image-wrapper">
                    <span className="media-inner image-inner">
                      <img
                        width="600"
                        height="400"
                        className="media image"
                        alt={option.title}
                        src={option.image}
                      />
                    </span>
                  </figure>
                </div>
                {option.mobileImage && (
                  <div className="s-media mobile-only">
                    <figure className="media-wrapper image-wrapper">
                      <span className="media-inner image-inner">
                        <img
                          width="600"
                          height="700"
                          className="media image"
                          alt={option.title}
                          src={option.mobileImage}
                        />
                      </span>
                    </figure>
                  </div>
                )}
              </div>
              <div className="cg-item cg-item-content">
                <h3 className="cg-title">{option.title}</h3>
                <p className="cg-text">{option.description}</p>
                <div className="s-buttons">
                  <a href={option.link} className="btn btn-primary btn-md">
                    <span className="btn-fill"></span>
                    <span className="btn-text">
                      <span className="line line-normal">More Information</span>
                      <span className="line line-hover">More Information</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
