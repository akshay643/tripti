import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Redesign",
    description: "Complete redesign focusing on conversion optimization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    tags: ["UI Design", "UX Research", "Prototyping"],
    link: "#",
    github: "#"
  },
  {
    title: "Banking App",
    description: "Modern banking application with focus on security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    tags: ["Mobile Design", "UI/UX", "Fintech"],
    link: "#",
    github: "#"
  },
  {
    title: "Healthcare Platform",
    description: "Patient-centered healthcare platform",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    tags: ["Healthcare", "UX Design", "Web App"],
    link: "#",
    github: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center p-6 text-white opacity-0 group-hover:opacity-100"
        >
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-200 mb-4 text-center">{project.description}</p>
          <div className="flex gap-4">
            <motion.a
              href={project.link}
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-white/20 rounded-full"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-white/20 rounded-full"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-white/10 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};