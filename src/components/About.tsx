import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brush, Users, Lightbulb, Trophy } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: <Brush className="w-8 h-8 text-purple-600" />,
      title: "300+",
      description: "Projects Completed",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "150+",
      description: "Happy Clients",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
      title: "10+",
      description: "Years Experience",
    },
    {
      icon: <Trophy className="w-8 h-8 text-purple-600" />,
      title: "15+",
      description: "Design Awards",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a UI/UX designer, I blend creativity with strategic thinking to craft 
            digital experiences that resonate with users. My approach combines deep 
            user research, iterative design processes, and a keen eye for aesthetic detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};