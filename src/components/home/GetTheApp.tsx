import Image from "next/image";
import {
  AppStoreButton,
  GooglePlayButton,
  AppGalleryButton,
} from "@/components/icons/StoreBadges";

const appLinks = [
  { href: "https://apps.apple.com/za/app/payjustnow/id1542974651", label: "App Store", Icon: AppStoreButton },
  { href: "https://appgallery.huawei.com/app/C103873181", label: "AppGallery", Icon: AppGalleryButton },
  { href: "https://play.google.com/store/apps/details?id=com.payjustnow", label: "Google Play", Icon: GooglePlayButton },
];

export default function GetTheApp() {
  return (
    <section className="app-download-section">
      <div className="app-download-panel">
        <div className="app-download-copy">
          <h2>Get the app</h2>
          <p>Download the PayJustNow app to start shopping.</p>
          <div className="app-download-badges">
            {appLinks.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Download on ${label}`}>
                <Icon />
              </a>
            ))}
          </div>
          <small>Disclaimer: A PayJustNow profile must be created to activate the app.</small>
        </div>
        <div className="app-download-image">
          <Image src="https://payjustnow.com/wp-content/uploads/2025/04/image-12-1.jpg" alt="PayJustNow shopping app" width={440} height={520} priority />
        </div>
        <div className="app-download-tools">
          <Image className="app-download-qr" src="https://payjustnow.com/wp-content/uploads/2025/04/Group-13080-1.svg" alt="Scan to download PayJustNow" width={220} height={220} />
          <div className="app-download-icons">
            {appLinks.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${label}`}><Icon /></a>
            ))}
          </div>
          <a className="app-download-button" href="#">Download</a>
        </div>
      </div>
    </section>
  );
}
