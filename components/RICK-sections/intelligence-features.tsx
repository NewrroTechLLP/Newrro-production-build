"use client";

import { motion } from "framer-motion";

/* Inline icons (no imports → no build errors) */
const IconBox = ({ className = "" }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const features = [
  {
    title: "Hybrid Compute (ESP32/STM32 + Pico)",
    desc: "Dual-core performance for real-time control, modular expansion and edge processing.",
    icon: IconBox,
  },
  {
    title: "High-Power Motor Driver",
    desc: "6A per channel motor driver (7–24V) with encoder support for closed-loop robotics.",
    icon: IconBox,
  },
  {
    title: "Sensor-Rich Ecosystem",
    desc: "Supports LiDAR, IMU, Ultrasonic, DHT, IR, DS18B20, Flame, LDR and more.",
    icon: IconBox,
  },
  {
    title: "Connectivity Suite",
    desc: "Wi-Fi, Bluetooth, USB, MQTT, multi-protocol IO for IoT + robotics fusion.",
    icon: IconBox,
  },
  {
    title: "Cloud Integration",
    desc: "Compatible with Blynk, ThingsBoard, Firebase, Adafruit IO and custom dashboards.",
    icon: IconBox,
  },
  {
    title: "Education-Ready",
    desc: "Beginner-friendly code examples, documentation and guided learning paths.",
    icon: IconBox,
  },
];

export function RICKIntelligenceFeatures() {
  return (
    <section id="rick-features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#df5bd3] to-[#7e5bf6]">
            RICK Capabilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Inspired by Arjuna’s interface — but optimized for controller-level robotics.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((f, index) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl bg-white p-7 border shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "linear-gradient(90deg,#df5bd3,#7e5bf6)" }}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
