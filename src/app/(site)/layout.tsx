import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import HeaderCta from "@/components/layout/HeaderCta";
import Footer from "@/components/layout/Footer";
import AppFAB from "@/components/layout/AppFAB";

export default function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeaderCta />
        {children}
      </main>
      <Footer />
      <AppFAB />
    </>
  );
}