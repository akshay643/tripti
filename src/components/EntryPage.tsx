import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  Briefcase,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export const EntryPage = () => {
  const navigate = useNavigate();
  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: "#" },
    { icon: <Linkedin className="w-6 h-6" />, href: "#" },
    { icon: <Twitter className="w-6 h-6" />, href: "#" },
    { icon: <Instagram className="w-6 h-6" />, href: "#" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <motion.div
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Hello! I'm Tripti Arora ✨
        </motion.h1>

        <motion.p
          className="text-xl mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span className="bg-purple-100 px-2 py-1 rounded">
            UI/UX Designer
          </span>{" "}
          with a decade of experience. Turning complex problems into{" "}
          <span className="bg-yellow-100 px-2 py-1 rounded">
            elegant solutions
          </span>
          through{" "}
          <span className="bg-green-100 px-2 py-1 rounded">
            human-centered design
          </span>{" "}
          🎨
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg font-medium"
            onClick={() => navigate("/portfolio")}
          >
            <Briefcase className="w-5 h-5" />
            View Portfolio 🚀
          </motion.button>

          <motion.a
            href="https://docs.google.com/document/your-resume-link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-medium"
          >
            <FileText className="w-5 h-5" />
            View Resume 📄
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};