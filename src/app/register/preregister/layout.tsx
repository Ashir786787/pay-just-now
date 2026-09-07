import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PayJustNow",
};

export default function PreregisterLayout({ children }: { children: ReactNode }) {
  return children;
}