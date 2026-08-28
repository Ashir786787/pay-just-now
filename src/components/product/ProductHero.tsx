"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  AppStoreButton,
  GooglePlayButton,
  AppGalleryButton,
} from "@/components/icons/StoreBadges";

interface ProductHeroProps {
  title: string;
  titleHighlight?: string;
  subtitle: string;
  heroImage: string;
  showCta?: boolean;
}

export default function ProductHero({
  title,
  titleHighlight,
  subtitle,
  heroImage,
  showCta = true,
}: ProductHeroProps) {
  return (
    <section className="bg-[#0A0A0A] text-white overflow-hidden">
      <div className="site-container py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title}
              {titleHighlight && (
                <span className="text-primary block">{titleHighlight}</span>
              )}
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              {subtitle}
            </p>

            {showCta && (
              <div className="flex flex-wrap gap-4 mt-4">
                <Link
                  href="https://app.payjustnow.com/login"
                  target="_blank"
                  rel="noopener"
                  className="px-8 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  Log In
                </Link>
                <Link
                  href="https://app.payjustnow.com/register/overview"
                  target="_blank"
                  rel="noopener"
                  className="px-8 py-3 rounded-full bg-primary text-surface font-semibold hover:bg-primary/90 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <img
              src={heroImage}
              alt="Product preview"
              className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
            />

            <img
              src="https://payjustnow.com/wp-content/uploads/2025/04/Group-13080-1.svg"
              alt="QR Code"
              className="absolute bottom-4 left-4 w-20 h-20 bg-white rounded-xl p-2"
            />

            <div className="absolute bottom-4 right-4 flex flex-col gap-2">
              <a href="https://apps.apple.com/za/app/payjustnow/id1542974651" target="_blank" rel="noopener" className="block overflow-hidden rounded-md bg-black p-1.5">
                <AppStoreButton className="block h-7 w-auto" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.payjustnow" target="_blank" rel="noopener" className="block overflow-hidden rounded-md bg-black p-1.5">
                <GooglePlayButton className="block h-7 w-auto" />
              </a>
              <a href="https://appgallery.huawei.com/app/C103873181" target="_blank" rel="noopener" className="block overflow-hidden rounded-md bg-black p-1.5">
                <AppGalleryButton className="block h-7 w-auto" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
