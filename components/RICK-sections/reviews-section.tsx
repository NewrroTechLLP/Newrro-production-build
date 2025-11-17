// components/RICK-sections/reviews-section.tsx
"use client";

import { motion } from "framer-motion";

const testimonials = [
  { quote: "RICK made our lab sessions far more hands-on and fun. The students loved the modular sensors.", name: "Dr. S. Rao", rating: 5 },
  { quote: "Great for prototyping and research — powerful motor drivers and easy cloud integration.", name: "Prof. Ananya", rating: 5 },
];

export function RICKReviewsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#fbf8ff]">
      <div className="container mx-auto px-4 text-center">
        <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-2xl font-bold mb-6">
          Educator & Researcher Reviews
        </motion.h3>

        <div className="max-w-3xl mx-auto grid gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="p-6 bg-white rounded-xl border shadow-sm">
              <p className="text-gray-700 italic">“{t.quote}”</p>
              <div className="mt-3 text-sm text-gray-600">— {t.name}</div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
