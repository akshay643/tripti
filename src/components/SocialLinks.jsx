import React from "react";
import { motion } from "framer-motion";

import { socialLinks } from "../data/projects";
const SocialLinks = () => {
  return (
    <>
      {socialLinks.map((link, index) => {
        if (link.icon === "mail") {
        }
        return (
          <>
            <motion.a
              key={index}
              href={
                link.icon.includes("mail")
                  ? `mailto:${link.href}`
                  : `${link.href}`
              }
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
        );
      })}
    </>
  );
};

export default SocialLinks;
