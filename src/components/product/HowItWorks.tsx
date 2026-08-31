interface Step {
  icon: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: Step[];
  subtitle: string;
  columns?: 2 | 3;
}

export default function HowItWorks({
  steps,
  subtitle,
  columns = 3,
}: HowItWorksProps) {
  const gridClass =
    columns === 2
      ? "content-grid content-grid-light content-grid-two"
      : "content-grid content-grid-light content-grid-three";

  return (
    <section className="section section-light section-how-it-works">
      <div className="container-sm">
        <div className="s-inner">
          <div className="s-title-wrapper">
            <h2 className="s-title">How it Works</h2>
            <p className="s-text">{subtitle}</p>
          </div>
        </div>
        <div className="s-inner">
          <div className={gridClass}>
            <div className="cg-row">
              {steps.map((step, index) => (
                <div key={index} className="cg-item cg-item-content">
                  <div className="cg-icon">
                    <figure className="media-wrapper image-wrapper">
                      <span className="media-inner image-inner">
                        <img
                          width="40"
                          height="40"
                          className="media image"
                          alt=""
                          src={step.icon}
                        />
                      </span>
                    </figure>
                  </div>
                  <h6 className="cg-title">{step.title}</h6>
                  <p className="cg-text">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
