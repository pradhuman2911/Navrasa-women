// src/components/LogoPulseLoader.jsx
import { motion } from "framer-motion";
import AnimatedLogo from "../components/AnimatedLogo";

export default function LogoPulseLoader() {
  return (
    <div className="fixed inset-0 bg-dark flex items-center justify-center z-[999]">
      <motion.div
        className="p-6 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.4, repeat: Infinity }}
      >
        <AnimatedLogo />
      </motion.div>
    </div>
  );
}
