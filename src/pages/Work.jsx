import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export const Work = () => {
  return (
    <section className="py-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1"
        >
          {projects.map((project, index) => (
            <Link to={`/portfolio/work/${project.id}`} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-white shadow-lg cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center p-6 "
                  >
                    <h3 className="text-3xl  text-white mb-3">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1  text-white text-md rounded-sm">
                      {project.year}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
