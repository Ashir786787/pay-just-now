import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Anton, Manrope, Outfit } from "next/font/google";
import "./globals.css";
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[anton.variable, manrope.variable, outfit.variable].join(" ")}
    >
      <body className="antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}