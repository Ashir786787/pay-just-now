import { AppleIcon, AppGalleryIcon, GooglePlayIcon } from "@/components/icons/PjnBrandIcons";

interface ProductHeroProps {
  title: string;
  subtitle: string;
  heroImage: string;
  variant?: string;
}

export default function ProductHero({
  title,
  subtitle,
  heroImage,
  variant = "",
}: ProductHeroProps) {
  return (
    <section className={`section section-light section-hero ${variant}`}>
      <div className="container">
        <div className="s-inner">
          <div className="s-content">
            <h1 className="s-title">{title}</h1>
            <p className="s-text">{subtitle}</p>
            <div className="hero-app">
              <div className="app-qr-wrapper">
                <img
                  className="app-qr"
                  src="https://payjustnow.com/wp-content/uploads/2025/04/Group-13080-1.svg"
                  alt="app-qr"
                />
              </div>
              <div className="app-links-wrapper">
                <ul className="app-links-list">
                  <li className="app-link-item">
                    <a
                      href="https://apps.apple.com/za/app/payjustnow/id1542974651"
                      className="app-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AppleIcon />
                    </a>
                  </li>
                  <li className="app-link-item">
                    <a
                      href="https://appgallery.huawei.com/app/C103873181"
                      className="app-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AppGalleryIcon />
                    </a>
                  </li>
                  <li className="app-link-item">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.payjustnow"
                      className="app-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GooglePlayIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="s-media">
            <figure className="media-wrapper image-wrapper responsive hero-image-wrapper">
              <span className="media-inner image-inner hero-image-inner">
                <img
                  width="383"
                  height="548"
                  className="media image hero-image"
                  src={heroImage}
                  alt=""
                />
              </span>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
