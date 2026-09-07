import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "FAQs - PayJustNow",
};

export default function FaqsLayout({ children }: { children: ReactNode }) {
  return children;
}