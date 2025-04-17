"use client";

import { motion } from "framer-motion";
import { BackgroundLines } from "@/components/ui/background-lines"; // ✅ Import BackgroundLines
import Image from 'next/image';


const team = [
  {
    name: "Newrro Team",
    role: "CEO & Founder",
    image: "https://www.newrro.in/favicon.svg",
    bio: "Visionary leader with 20+ years of industry experience",
  },
  {
    name: "Newrro Team",
    role: "Chief Technology Officer",
    image: "https://www.newrro.in/favicon.svg",
    bio: "Tech innovator specializing in emerging technologies",
  },
  {
    name: "Newrro Team",
    role: "Design Director",
    image: "https://www.newrro.in/favicon.svg",
    bio: "Award-winning designer with a passion for user experience",
  },
  {
    name: "Newrro Team",
    role: "Head of Innovation",
    image: "https://www.newrro.in/favicon.svg",
    bio: "Leading breakthrough initiatives in emerging markets",
  },
];

export function TeamSection() {
  return (
    <div className="relative py-20 bg-background">
      <BackgroundLines className="absolute inset-0 opacity-10" > {/* ✅ BackgroundLines applied */}
        <></> {/* ✅ Empty fragment to satisfy required `children` prop */}
      </BackgroundLines>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Meet Our Leadership
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white">{member.bio}</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
