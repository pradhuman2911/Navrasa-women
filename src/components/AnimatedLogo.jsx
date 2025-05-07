// src/components/AnimatedLogo.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedLogo() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const glowIntensity = useTransform(scrollYProgress, [0, 1], ["5px", "10px"]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-10 h-10 md:w-14 md:h-14 cursor-pointer relative"
      style={{  
        filter: `drop-shadow(0px 0px ${glowIntensity.get()} rgba(139, 92, 246, 0.8))`,
      }}
    >
      {/* Simply use your existing SVG file with no background */}
      <img 
        src="/logo.svg" 
        alt="Navrasa Women in Tech Logo" 
        className="w-full h-full object-contain"
        style={{ 
          filter: "drop-shadow(0px 0px 3px rgba(139, 92, 246, 0.5))"
        }}
      />
    </motion.div>
  );
}