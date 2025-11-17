"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const specs = [
  { k: "Compute", v: "ESP32 + Raspberry Pi Pico hybrid system" },
  { k: "Battery", v: "12V 5000mAh Li-ion (BMS included)" },
  { k: "Motor Driver", v: "7–24V, 6A/channel, encoder-compatible" },
  { k: "I/O Interfaces", v: "GPIO, I2C, UART, SPI, USB, PWM" },
  { k: "Cloud Support", v: "Blynk, ThingsBoard, Adafruit IO, Firebase" },
  { k: "Sensors", v: "IMU, LiDAR, Ultrasonic, IR, DS18B20, DHT, Flame" },
  { k: "Software", v: "Arduino, MicroPython (VS Code & Thonny)" },
  { k: "Use-Cases", v: "Education, research, automation, robotics kits" },
];

export function RICKSpecificationSection() {
  return (
    <section id="rick-specs" className="py-20 bg-white relative">
      {/* Background accents */}
      <div aria-hidden className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute -top-10 left-10 w-56 h-56 rounded-full blur-3xl"
          style={{ background: "#df5bd3" }} />
        <div className="absolute bottom-0 right-10 w-64 h-64 rounded-full blur-3xl"
          style={{ background: "#7e5bf6" }} />
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#df5bd3] to-[#7e5bf6]">
            Technical Specifications
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Clean, compact and Arjuna-styled specification layout for RICK.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {specs.map((s, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-xl bg-white border shadow-md"
            >
              <h4 className="font-semibold text-[#7e5bf6] mb-2">{s.k}</h4>
              <p className="text-gray-700">{s.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
