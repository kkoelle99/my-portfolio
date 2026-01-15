import React from "react";
import { motion } from "framer-motion";

const projectsList = [
  {
    title: "Spendy",
    description:
      "A personal finance web app to track expenses and visualize budgets using React, Node.js and Auth0. ",
    link: "/https://spendy-beta.vercel.app//spendy",
    status: "Live",
  },
  {
    title: "Call Out Bot",
    description:
      "A Discord bot that automates player callouts and logs availability with MongoDB + Google Sheets.",
    status: "Live",
  },
  {
    title: "Coming Soon",
    description:
      "A new project is in progress - stay tuned for the next big thing.",
    status: "In Development",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 tex-white">
      {/* Hero / Header */}
      <section className="relative flex flex-col items-center justify-center h-64 text-center py-12">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-blue-300"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Here's a collection of my work some live, some still in development.
        </motion.p>
      </section>

      {/* Project Grid */}
      <motion.section
        className="flex-1 py-24 px-6 sm:px-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projectsList.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: 5 }}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-medium mb-4 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
              </div>
              <div>
                {project.link && project.status === "Live" ? (
                  <a
                    href={project.link}
                    className="inline-block mt-2 text-blue-400 hover:underline"
                  >
                    View Project
                  </a>
                ) : (
                  <span className="italic text-gray-500">{project.status}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
