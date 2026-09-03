import {
  AppStoreButton,
  GooglePlayButton,
  AppGalleryButton,
} from "@/components/icons/StoreBadges";
import {
  AppleIcon,
  AppGalleryIcon,
  GooglePlayIcon,
} from "@/components/icons/PjnBrandIcons";

interface DownloadSectionProps {
  variant?: "cool-blue" | "light";
}

export default function DownloadSection({ variant = "cool-blue" }: DownloadSectionProps) {
  const isLight = variant === "light";
  return (
    <section
      className={`section ${isLight ? "section-light" : "section-lightest"} section-download ${
        isLight ? "section-download-light" : "section-download-cool-blue"
      } section-pad-top`}
    >
      <div className="container">
        <div className="s-inner">
          <div className="s-content">
            <h2 className="s-title">Get the App</h2>
            <p className="s-text">
              Download the PayJustNow app to start shopping.
            </p>
            <div className="s-buttons">
              <a className="app-button" href="#">
                <AppStoreButton />
              </a>
              <a className="app-button" href="#">
                <AppGalleryButton />
              </a>
              <a className="app-button" href="#">
                <GooglePlayButton />
              </a>
            </div>
            <p className="disclaimer">
              Disclaimer: A PayJustNow profile must be created to activate the
              app.
            </p>
          </div>
          <div className="s-media">
            <figure className="media-wrapper image-wrapper responsive">
              <span className="media-inner image-inner">
                <img
                  width="783"
                  height="901"
                  className="media image"
                  alt=""
                  src="https://payjustnow.com/wp-content/uploads/2025/04/image-12-1.jpg"
                />
              </span>
            </figure>
            <div className="download-app">
              <div className="app-qr-wrapper desktop-only">
                <img
                  className="app-qr"
                  src="https://payjustnow.com/wp-content/uploads/2025/04/Group-13080-1.svg"
                  alt="app-qr"
                />
              </div>
              <div className="app-links-wrapper">
                <ul className="app-links-list">
                  <li className="app-link-item">
                    <a href="#" className="app-link">
                      <AppleIcon />
                    </a>
                  </li>
                  <li className="app-link-item">
                    <a href="#" className="app-link">
                      <AppGalleryIcon />
                    </a>
                  </li>
                  <li className="app-link-item">
                    <a href="#" className="app-link">
                      <GooglePlayIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <a
                href="#"
                className={`btn ${
                  isLight ? "btn-outline-dark" : "btn-light"
                } btn-lg desktop-only`}
              >
                <span className="btn-fill"></span>
                <span className="btn-text">Download</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
