import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in working together? Let's discuss your project and create something amazing.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-8">
          {[
            { icon: <Mail className="w-6 h-6" />, label: "Email" },
            { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn" },
            { icon: <Twitter className="w-6 h-6" />, label: "Twitter" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-2 text-gray-600 hover:text-black"
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};