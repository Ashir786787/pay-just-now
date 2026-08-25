import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppFAB from "@/components/layout/AppFAB";
import ClientProviders from "@/components/layout/ClientProviders";

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
    <html lang="en">
      <body className="antialiased">
        <ClientProviders>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <AppFAB />
        </ClientProviders>
      </body>
    </html>
  );
}
