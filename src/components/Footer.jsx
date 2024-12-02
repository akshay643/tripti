import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../data/projects";
export const Footer = () => {
  return (
    <footer className="bg-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div
            className="flex space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {socialLinks.map((link, index) => (
              <>
                <motion.a
                  key={index}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <img
                    className="w-10 h-10 transition-all ease-in-out duration-300"
                    src={link.icon}
                    alt="icon"
                    style={{
                      transition: "fill 0.3s ease-in-out",
                    }}
                  />
                </motion.a>
              </>
            ))}
          </motion.div>

          <motion.p
            className="text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {new Date().getFullYear()} Tripti Arora. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
