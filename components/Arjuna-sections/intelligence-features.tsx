// components/Arjuna-sections/intelligence-features.tsx
"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * pickIcon(...)
 * - runtime-safe helper that returns the first available icon component exported by lucide-react.
 * - Accepts candidate names (case-sensitive). Returns a functional React component.
 * - Falls back to Zap icon or a tiny no-op component if nothing matches.
 */
function pickIcon(...names: string[]) {
  for (const n of names) {
    // dynamic access of exports from lucide-react (case-sensitive)
    // @ts-ignore
    const Icon = (LucideIcons as any)[n];
    if (Icon) return Icon;
  }
  // guaranteed fallback icons that are almost always present
  // @ts-ignore
  const fallback = (LucideIcons as any).Zap || (LucideIcons as any).Icon || null;
  if (fallback) return fallback;
  // ultimate fallback: tiny noop component
  return () => null;
}

/* Choose likely candidate names for each semantic icon.
   These lists attempt to cover variations across lucide-react versions.
   If your installed lucide-react exports a different name, add it to the candidate list.
*/
const IconZap = pickIcon("Zap", "ZapOff", "Bolt");
const IconRouter = pickIcon("Router", "HardDrive", "Server", "Network");
const IconProcessor = pickIcon("Processor", "Cpu", "Chip", "Microchip", "CpuChip", "ChipIcon");
const IconScan = pickIcon("Scan", "Scanner", "ScanFace", "ScanText", "ScanCloud");
const IconCamera = pickIcon("Camera", "CameraOff", "VideoCamera", "CameraIcon");
const IconCompass = pickIcon("Compass", "Navigation", "CompassDot");
const IconBot = pickIcon("Bot", "Robot", "Robot2", "FaceId");
const IconMap = pickIcon("Map", "MapPin", "Map2");
const IconSignal = pickIcon("Signal", "Wifi", "WifiOff", "Broadcast");
const IconMonitorDot = pickIcon("MonitorDot", "Monitor", "MonitorSpeaker", "Tv");
const IconMic = pickIcon("Mic", "Mic2", "Microphone");

const intelligentCapabilities = [
  // --- AI Core & Software Architecture ---
  {
    icon: <IconRouter className="w-10 h-10" />,
    title: "ROS2 Native Architecture",
    description:
      "Built entirely on ROS2 (Humble/Foxy) for real-time control, communication (Nodes, Topics, Actions), and easy integration of distributed AI pipelines.",
    ai_connection:
      "ROS2 is the communication backbone for AI modules, enabling distributed decision-making and neural-network-based control across CPU/GPU.",
    theme: "AI Core & Architecture",
  },
  {
    icon: <IconProcessor className="w-10 h-10" />,
    title: "High-Performance Compute (NVIDIA Jetson)",
    description:
      "Supports GPU acceleration (Nvidia Jetson Orin Nano, Nano, Xavier) for visual SLAM, depth processing, and real-time navigation and AI inference.",
    ai_connection:
      "Smooth execution of deep learning algorithms for path planning, semantic segmentation, and advanced pose estimation using GPU-accelerated inference.",
    theme: "AI Core & Architecture",
  },

  // --- Advanced Perception & Vision ---
  {
    icon: <IconCamera className="w-10 h-10" />,
    title: "3D Spatial AI Perception (OAK-D Lite)",
    description:
      "Features the OAK-D Lite camera for stereo depth sensing, RGB-D fused data, and on-device AI inference using the Intel Myriad X VPU and OpenVINO.",
    ai_connection:
      "Enables depth-aware perception, 3D bounding boxes, and high-quality data capture essential for sophisticated environmental understanding.",
    theme: "Perception & Vision",
  },
  {
    icon: <IconCompass className="w-10 h-10" />,
    title: "Visual SLAM (V-SLAM) Capability",
    description:
      "Performs feature-based (ORB-SLAM) and RGB-D SLAM for real-time pose estimation, loop closure, and map optimization using high-quality visual data.",
    ai_connection:
      "Deploys AI-enhanced visual odometry and place recognition models for intelligent navigation in complex, unstructured environments.",
    theme: "Perception & Vision",
  },
  {
    icon: <IconBot className="w-10 h-10" />,
    title: "AI-Driven Perception & Tracking",
    description:
      "Runs on-device AI tasks like real-time object detection (YOLO, MobileNet), semantic segmentation, human tracking, and gesture recognition at the edge.",
    ai_connection:
      "Allows ARJUNA to navigate intelligently, avoid humans/moving obstacles, and perform complex behavior-based tasks based on scene understanding.",
    theme: "Perception & Vision",
  },

  // --- Autonomy & Fusion ---
  {
    icon: <IconScan className="w-10 h-10" />,
    title: "Multi-Sensor Fusion (EKF)",
    description:
      "Utilizes EKF (Extended Kalman Filter) within ROS's `robot_localization` package to fuse data from IMU, Wheel Encoders, LiDAR, and Visual Odometry for stable, low-drift odometry.",
    ai_connection:
      "Provides stable foundational odometry, crucial for accurate long-term localization and improving system reliability against sensor noise.",
    theme: "Autonomy & Fusion",
  },
  {
    icon: <IconMap className="w-10 h-10" />,
    title: "Nav2 Navigation Stack Support",
    description:
      "Full support for the ROS2 Nav2 stack, covering global and local path planning, costmap generation, dynamic obstacle avoidance, and behavior trees for robust action execution.",
    ai_connection:
      "The modular Nav2 structure allows advanced users to integrate AI-based planners (e.g., Deep Reinforcement Learning) as custom plugins.",
    theme: "Autonomy & Fusion",
  },
  {
    icon: <IconSignal className="w-10 h-10" />,
    title: "Modular & Expandable Hardware",
    description:
      "Features GPIO, I2C, and UART expansion points for easy mounting of extra sensors (UWB, Radar) or custom payloads, ideal for multi-robot research.",
    ai_connection:
      "Supports integrating additional neural sensors and custom control electronics needed for complex, multi-robot AI experiments and swarm robotics.",
    theme: "Autonomy & Fusion",
  },

  // --- Interaction & Usability ---
  {
    icon: <IconMonitorDot className="w-10 h-10" />,
    title: "Web-Based Control Dashboard",
    description:
      "Provides a web-based interface for real-time camera streaming, teleoperation controls, WiFi-based monitoring, and system diagnostics accessible from any browser.",
    ai_connection:
      "Offers a seamless interface for remote operation and visualization, essential for debugging complex AI models and streaming data to the cloud.",
    theme: "Interaction & Usability",
  },
  {
    icon: <IconMic className="w-10 h-10" />,
    title: "Voice/Audio Interaction",
    description:
      "Equipped with speakers and microphones to enable voice commands, sound localization, and high-fidelity auditory feedback for Human-Robot Interaction (HRI) studies.",
    ai_connection:
      "Supports deployment of custom voice recognition models and allows for natural language command processing on the edge.",
    theme: "Interaction & Usability",
  },
];

// Helper to define Tailwind colors based on the feature theme
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
        {/* Section Header */}
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
            ARJUNA combines best-in-class hardware and a <strong>ROS2-native architecture</strong> to deliver cutting-edge autonomy, perception, and AI performance.
          </p>
        </motion.div>

        {/* Features Grid */}
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
                    {/* Icon and Title */}
                    <div className={cn("mb-4 flex items-center", styles.iconColor)}>
                      {feature.icon}
                      <h3 className="text-xl font-bold ml-4 text-gray-900 group-hover:text-black">
                        {feature.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-base mb-4 text-gray-700">{feature.description}</p>

                    {/* AI Connection Highlight */}
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
