import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Monitor, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              UI/UX Designer
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Crafting beautiful and intuitive digital experiences with 10 years of expertise
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-8 mb-16"
          >
            {[
              { icon: <Monitor className="w-8 h-8" />, text: "UI Design" },
              { icon: <Palette className="w-8 h-8" />, text: "Visual Design" },
              { icon: <Sparkles className="w-8 h-8" />, text: "UX Research" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2"
              >
                {item.icon}
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
              alt="Design Process"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};