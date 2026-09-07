interface OptionCard {
  title: string;
  description: string;
  image: string;
  desktopWidth?: number;
  desktopHeight?: number;
  mobileImage?: string;
  mobileWidth?: number;
  mobileHeight?: number;
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
          <div className="cg-row">
            {options.map((option, index) => (
              <div className="cg-col" key={index}>
                <div
                  className={`image-wrapper cg-item cg-item-content ${option.variant}`}
                >
                  <div className="s-media desktop-only">
                    <figure className="media-wrapper image-wrapper responsive">
                      <span className="media-inner image-inner">
                        <img
                          width={option.desktopWidth ?? 500}
                          height={option.desktopHeight ?? 264}
                          className="media image"
                          alt={option.title}
                          src={option.image}
                          loading="lazy"
                        />
                      </span>
                    </figure>
                  </div>
                  {option.mobileImage && (
                    <div className="s-media mobile-only">
                      <figure className="media-wrapper image-wrapper responsive">
                        <span className="media-inner image-inner">
                          <img
                            width={option.mobileWidth ?? 255}
                            height={option.mobileHeight ?? 254}
                            className="media image"
                            alt={option.title}
                            src={option.mobileImage}
                            loading="lazy"
                          />
                        </span>
                      </figure>
                    </div>
                  )}
                </div>
                <div className="cg-item cg-item-content">
                  <h4 className="cg-title">{option.title}</h4>
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
      </div>
    </section>
  );
}