import React from 'react';
import { motion } from 'framer-motion';

export const LiquidBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${50 + i * 20}% ${50 + i * 10}%, rgba(123, 97, 255, 0.1), transparent)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};