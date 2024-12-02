import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Briefcase, FileText } from "lucide-react";
import { socialLinks } from "../data/projects";

export const EntryPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative bg-white">
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
            className="flex items-center justify-center bg-pastelPink   transition-all gap-2 px-8 py-4 border  text-black rounded-lg font-medium"
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
            className="flex items-center justify-center   transition-all gap-2 px-8 py-4 border  text-black rounded-lg font-medium"
          >
            <FileText className="w-5 h-5" />
            View Resume 📄
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};
