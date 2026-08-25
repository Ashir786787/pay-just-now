"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon } from "@/components/icons/Icons";

export default function AppFAB() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3">
        <button
          onClick={() => setDrawerOpen(true)}
          className="group cursor-pointer"
          aria-label="Get the PayJustNow App"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-3 flex flex-col items-center gap-2 border border-gray-100 hover:shadow-3xl transition-shadow">
            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center border border-gray-100 overflow-hidden">
              <img
                src="https://payjustnow.com/wp-content/uploads/2024/09/PJN-QR-1.webp"
                alt="Scan to get the app"
                className="w-full h-full object-contain"
                width={96}
                height={96}
              />
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <img
                src="https://payjustnow.com/wp-content/uploads/2024/08/Frame-427319286.webp"
                alt="Download on App Store"
                className="w-full h-auto"
                width={96}
                height={28}
              />
              <img
                src="https://payjustnow.com/wp-content/uploads/2024/08/Frame-427319285.webp"
                alt="Get it on Google Play"
                className="w-full h-auto"
                width={96}
                height={28}
              />
              <img
                src="https://payjustnow.com/wp-content/uploads/2024/08/Frame-427319284.webp"
                alt="Explore it on AppGallery"
                className="w-full h-auto"
                width={96}
                height={28}
              />
            </div>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold">Get the App</h3>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Close"
                  >
                    <CloseIcon className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col items-center gap-6">
                  <div className="w-48 h-48 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      src="https://payjustnow.com/wp-content/uploads/2024/09/PJN-QR-1.webp"
                      alt="Scan to get the app"
                      className="w-full h-full object-contain"
                      width={192}
                      height={192}
                    />
                  </div>

                  <p className="text-sm text-gray-500 text-center">
                    Scan the QR code with your phone camera to download the app
                  </p>

                  <div className="flex flex-col gap-3 w-full max-w-[200px]">
                    <a
                      href="#"
                      className="block"
                    >
                      <img
                        src="https://payjustnow.com/wp-content/uploads/2024/08/Frame-427319286.webp"
                        alt="Download on App Store"
                        className="w-full h-auto"
                        width={200}
                        height={60}
                      />
                    </a>
                    <a
                      href="#"
                      className="block"
                    >
                      <img
                        src="https://payjustnow.com/wp-content/uploads/2024/08/Frame-427319285.webp"
                        alt="Get it on Google Play"
                        className="w-full h-auto"
                        width={200}
                        height={60}
                      />
                    </a>
                    <a
                      href="#"
                      className="block"
                    >
                      <img
                        src="https://payjustnow.com/wp-content/uploads/2024/08/Frame-427319284.webp"
                        alt="Explore it on AppGallery"
                        className="w-full h-auto"
                        width={200}
                        height={60}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
