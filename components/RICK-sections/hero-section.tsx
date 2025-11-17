// components/RICK-sections/hero-section.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * RICK Hero Section with embedded YouTube video and subtle darker accents
 * Video: https://youtu.be/NzXUjHdjlF4
 */
export function RICKHeroSection() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const onResize = () => setScale(window.innerWidth < 768 ? 0.9 : 1);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // YouTube embed id parsed from link you provided
  const youtubeId = "NzXUjHdjlF4";

  return (
    <section className="relative overflow-hidden">
      {/* Slightly darker band behind top portion (subtle, not full dark theme) */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 md:h-56 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(124,58,237,0.08) 0%, rgba(223,91,211,0.04) 60%, transparent 100%)",
          backdropFilter: "blur(6px)",
        }}
      />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text + CTA */}
          <div>
            <motion.h1
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
              style={{ transform: `scale(${scale})` }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#df5bd3] to-[#7e5bf6]">
                RICK — Intelligent Robotics Controller Kit
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl"
            >
              A hybrid ESP32/STM32 + Pico controller optimized for education and research — powerful motor drivers,
              modular sensor support and cloud-ready connectivity. Now with the familiar Arjuna look and feel.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}>
              <div className="flex items-center gap-4">
                <a
                  href="/assets/RICK_spec_sheet.pdf"
                  download
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white shadow-lg"
                  style={{ background: "linear-gradient(90deg,#df5bd3,#7e5bf6)" }}
                >
                  Download Spec Sheet
                </a>

                <a
                  href="#rick-specs"
                  className="inline-flex items-center px-5 py-3 rounded-full border border-gray-200 hover:bg-gray-50"
                >
                  View Specs
                </a>
              </div>
            </motion.div>

            {/* small feature badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center text-sm font-medium px-3 py-1 rounded-full bg-white/60 border" style={{ backdropFilter: "blur(4px)" }}>
                ESP32/STM32 + Pico
              </span>
              <span className="inline-flex items-center text-sm font-medium px-3 py-1 rounded-full bg-white/60 border" style={{ backdropFilter: "blur(4px)" }}>
                12V Motor Driver
              </span>
              <span className="inline-flex items-center text-sm font-medium px-3 py-1 rounded-full bg-white/60 border" style={{ backdropFilter: "blur(4px)" }}>
                LiDAR / IMU Ready
              </span>
            </div>
          </div>

          {/* Right: Responsive video card with subtle dark background and rounded corners */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="w-full"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gradient-to-b from-white to-[#fbf7ff]">
              {/* Darker top strip for 'not fully dark' theme */}
              <div className="px-4 py-3 bg-gradient-to-r from-[#7e5bf6]/10 to-[#df5bd3]/8 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-[#4f46e5]">RICK Overview</div>
                    <div className="text-xs text-gray-500">2:13 — Demo & features</div>
                  </div>
                  <div className="text-xs text-gray-400">Watch</div>
                </div>
              </div>

              {/* Responsive iframe wrapper */}
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  title="RICK Overview Video"
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "0",
                  }}
                />
              </div>

              {/* Footer row with subtle dark strip */}
              <div className="px-4 py-3 bg-gradient-to-r from-[#000000]/2 to-transparent border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">High-level demo of RICK hardware & software</div>
                  <a
                    className="text-sm font-medium text-[#7e5bf6] hover:underline"
                    href={`https://youtu.be/${youtubeId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open on YouTube
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom subtle darker accent — not full dark theme, just a band */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-28 md:h-32 -z-10"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(51,51,51,0.03) 40%, rgba(51,51,51,0.06) 100%)",
        }}
      />
    </section>
  );
}
