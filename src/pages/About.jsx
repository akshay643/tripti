import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brush, Users, Lightbulb, Trophy } from "lucide-react";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute inset-0 bg-purple-200 rounded-lg transform translate-x-4 translate-y-4 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-8">
              With over a decade of experience in UI/UX design, I've had the
              privilege of working with clients across various industries, from
              startups to Fortune 500 companies. My passion lies in creating
              intuitive and beautiful digital experiences that solve real
              problems.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Projects", value: "300+" },
                { label: "Clients", value: "150+" },
                { label: "Experience", value: "10+ Years" },
                { label: "Awards", value: "15+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="text-2xl font-bold text-purple-600">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
