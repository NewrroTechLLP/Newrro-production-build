"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * pickIcon(...)
 * - runtime-safe helper that returns the first available icon component exported by lucide-react.
 */
function pickIcon(...names: string[]) {
  for (const n of names) {
    // @ts-ignore
    const Icon = (LucideIcons as any)[n];
    if (Icon) return Icon;
  }
  // fallback
  // @ts-ignore
  const fallback = (LucideIcons as any).Zap || (() => null);
  return fallback;
}

/* Icon candidates */
const IconZap = pickIcon("Zap", "Bolt");
const IconRouter = pickIcon("Router", "Server", "Network");
const IconProcessor = pickIcon("Processor", "Cpu", "Chip", "Microchip");
const IconScan = pickIcon("Scan", "Scanner");
const IconCamera = pickIcon("Camera", "CameraIcon");
const IconCompass = pickIcon("Compass", "Navigation");
const IconBot = pickIcon("Bot", "Robot");
const IconMap = pickIcon("Map", "MapPin");
const IconSignal = pickIcon("Signal", "Broadcast");
const IconMonitorDot = pickIcon("MonitorDot", "Monitor", "Tv");
const IconMic = pickIcon("Mic", "Mic2", "Microphone");
const IconChip = pickIcon("Chip", "Microchip", "CpuChip");
const IconCog = pickIcon("Cog", "Settings", "Gear");
const IconLayers = pickIcon("Layers", "Layers2", "Stack");

/* --- Intelligence Capabilities Section Data --- */
const intelligentCapabilities = [
  // ---------- AI Core ----------
  {
    icon: <IconRouter className="w-10 h-10" />,
    title: "ROS2 Native Architecture",
    description:
      "Built entirely on ROS2 (Humble/Foxy) for real-time control, communication (Nodes, Topics, Actions), and scalable multi-component integration.",
    ai_connection:
      "ROS2 enables smooth AI module orchestration, distributed computing, and low-latency sensor sharing.",
    theme: "AI Core & Architecture",
  },
  {
    icon: <IconProcessor className="w-10 h-10" />,
    title: "High-Performance Compute (NVIDIA Jetson)",
    description:
      "Runs GPU-accelerated vision, SLAM, and inference workloads using Jetson Orin, Xavier, or Nano platforms.",
    ai_connection:
      "Accelerates deep learning models for motion planning, perception, and 3D environment understanding.",
    theme: "AI Core & Architecture",
  },

  // ---------- Perception & Vision ----------
  {
    icon: <IconCamera className="w-10 h-10" />,
    title: "3D Spatial AI Perception (OAK-D Lite)",
    description:
      "Stereo depth, RGB-D fusion, and FPGA-accelerated inference using the OAK-D camera.",
    ai_connection:
      "Provides spatial awareness needed for 3D navigation, tracking, and AI reasoning.",
    theme: "Perception & Vision",
  },
  {
    icon: <IconCompass className="w-10 h-10" />,
    title: "Visual SLAM (V-SLAM) Capability",
    description:
      "Real-time V-SLAM using ORB-SLAM and RGB-D SLAM approaches for consistent localization.",
    ai_connection:
      "AI-enhanced loop closure and feature matching improves long-term navigation fidelity.",
    theme: "Perception & Vision",
  },
  {
    icon: <IconBot className="w-10 h-10" />,
    title: "AI-Driven Perception & Tracking",
    description:
      "Performs object detection, segmentation, and multi-target tracking at edge-level speeds.",
    ai_connection:
      "Allows ARJUNA to understand dynamic environments with AI-assisted behaviour generation.",
    theme: "Perception & Vision",
  },

  // ---------- Autonomy & Fusion ----------
  {
    icon: <IconScan className="w-10 h-10" />,
    title: "Multi-Sensor Fusion (EKF)",
    description:
      "Fuses IMU, LiDAR, wheel encoders, and VO data using EKF for reliable odometry.",
    ai_connection:
      "Noise suppression and bias compensation ensure stable state estimates.",
    theme: "Autonomy & Fusion",
  },
  {
    icon: <IconMap className="w-10 h-10" />,
    title: "Nav2 Navigation Stack Support",
    description:
      "Industry-grade path planning, obstacle avoidance, costmaps, and behaviour trees.",
    ai_connection:
      "Supports AI-integrated planners, RL-based local planners, and semantic navigation.",
    theme: "Autonomy & Fusion",
  },
  {
    icon: <IconSignal className="w-10 h-10" />,
    title: "Modular & Expandable Hardware",
    description:
      "GPIO, I2C, UART, and CAN interfaces for additional sensors and components.",
    ai_connection:
      "Allows integration of AI-powered payloads like UWB, radar, and custom sensing modules.",
    theme: "Autonomy & Fusion",
  },

  // ---------- Interaction ----------
  {
    icon: <IconMonitorDot className="w-10 h-10" />,
    title: "Web-Based Control Dashboard",
    description:
      "Live telemetry, video streaming, and remote teleoperation accessible from any browser.",
    ai_connection:
      "Supports cloud-based AI monitoring, fleet dashboards, and remote experimentation.",
    theme: "Interaction & Usability",
  },
  {
    icon: <IconMic className="w-10 h-10" />,
    title: "Voice/Audio Interaction",
    description:
      "Supports speech commands, sound localization, and human-robot interaction pipelines.",
    ai_connection:
      "Integrates NLP and custom speech-to-intent models for natural interaction.",
    theme: "Interaction & Usability",
  },

  // ==========================================================
  // 🔥 NEW CARD 1 — ROS2 + Components
  // ==========================================================
  {
    icon: <IconCog className="w-10 h-10" />,
    title: "Modular ROS2 Node Architecture",
    description:
      "ARJUNA’s brain is built around a modular ROS2 node system—separating perception, planning, localization, control, and diagnostics into independent components.",
    ai_connection:
      "Allows AI models to be swapped, upgraded, or run in parallel without rewriting the robot’s entire software stack.",
    theme: "AI Core & Architecture",
  },

  // ==========================================================
  // 🔥 NEW CARD 2 — COMPONENT PIPELINE + AI
  // ==========================================================
  {
    icon: <IconLayers className="w-10 h-10" />,
    title: "Hardware-Accelerated Perception Pipeline",
    description:
      "LiDAR, IMU, depth camera, and wheel encoders feed into a multi-layer perception pipeline optimized for Jetson GPUs and DepthAI accelerators.",
    ai_connection:
      "Powers complex tasks like 3D reconstruction, semantic mapping, dynamic obstacle tracking, and motion understanding.",
    theme: "Perception & Vision",
  },
];

/* Theme styling helper */
const getThemeStyles = (theme: string) => {
  switch (theme) {
    case "AI Core & Architecture":
      return { iconColor: "text-blue-600", borderColor: "border-blue-200", bgColor: "bg-blue-50/70" };
    case "Perception & Vision":
      return { iconColor: "text-green-600", borderColor: "border-green-200", bgColor: "bg-green-50/70" };
    case "Autonomy & Fusion":
      return { iconColor: "text-purple-600", borderColor: "border-purple-200", bgColor: "bg-purple-50/70" };
    case "Interaction & Usability":
      return { iconColor: "text-orange-600", borderColor: "border-orange-200", bgColor: "bg-orange-50/70" };
    default:
      return { iconColor: "text-gray-600", borderColor: "border-gray-200", bgColor: "bg-white" };
  }
};

export function IntelligenceFeatures() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#4A3EBD] drop-shadow-sm">
            AI-Driven Capabilities
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            ARJUNA combines best-in-class hardware with a <strong>ROS2-native architecture</strong> to deliver cutting-edge autonomy.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {intelligentCapabilities.map((feature, index) => {
            const styles = getThemeStyles(feature.theme);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.4 }}
                className="group"
              >
                <div
                  className={cn(
                    "relative p-6 lg:p-8 rounded-2xl h-full transition-all duration-300 shadow-lg hover:shadow-2xl border-2",
                    styles.bgColor,
                    styles.borderColor,
                    "hover:bg-white"
                  )}
                >
                  <div className="relative z-10">
                    <div className={cn("mb-4 flex items-center", styles.iconColor)}>
                      {feature.icon}
                      <h3 className="text-xl font-bold ml-4 text-gray-900 group-hover:text-black">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-base mb-4 text-gray-700">{feature.description}</p>

                    <div className="mt-4 pt-3 border-t border-dashed border-gray-300">
                      <span className="font-semibold text-sm text-gray-500 block">AI Connection:</span>
                      <p className="text-sm italic text-gray-600">{feature.ai_connection}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
