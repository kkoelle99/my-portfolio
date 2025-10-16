// Skills.js
import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const skillsList = [
  "JavaScript",
  "React",
  "Node.js",
  "Auth0",
  "MongoDB",
  "UI Design",
  "APIs",
  "CSS",
  "HTML",
  "Git/GitHub",
];

export default function Skills() {
  // Stagger animation variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Hero / Header */}
      <section className="relative flex flex-col items-center justify-center h-64 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-blue-300"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Here's a snapshot of the technologies and tools I work with.
        </motion.p>
      </section>

      {/* Skills Grid */}
      <motion.section
        className="flex-1 py-24 px-6 sm:px-12 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skillsList.map((skill) => (
            <motion.div
              key={skill}
              variants={item}
              whileHover={{ scale: 1.1, borderColor: "#3b82f6" }}
              className="skill-badge cursor-pointer"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
