import type { Metadata } from "next";
import { Anton, Manrope, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import HeaderCta from "@/components/layout/HeaderCta";
import Footer from "@/components/layout/Footer";
import AppFAB from "@/components/layout/AppFAB";
import ClientProviders from "@/components/layout/ClientProviders";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PayJustNow | The Clever Way To Pay",
  description:
    "PayJustNow lets you split your purchase into 3 interest-free payments or pay in 12 months. Shop now, pay clever.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[anton.variable, manrope.variable, outfit.variable].join(" ")}
    >
      <body className="antialiased">
        <ClientProviders>
          <Header />
          <main className="min-h-screen">
            <HeaderCta />
            {children}
          </main>
          <Footer />
          <AppFAB />
        </ClientProviders>
      </body>
    </html>
  );
}
