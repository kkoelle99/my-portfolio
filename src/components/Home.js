import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <motion.section
        className="hero bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-32 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl sm:text-6xl font-bold mb-b leading-tight">
          Hi, I'm Kaleb Koelle
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto">
          I build web experiences that matter. Frontend & Full-Stack Developer
          with React, Node.js and more.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to=" /projects"
            className="bg-white text-blue-600 py-3 px-8 rounded-lg text-lg hover:bg-blue-700 hover:text-white transition-all shadow-lg"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="border border-white py-3 px-8 rounded-lg text-lg hover:bg-white hover:text-blue-600 transition-all"
          >
            Contact Me
          </Link>
        </div>
        {/* Optional animated shapes */}
        <motion.div
          className="absolute top-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full animate-pulse"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
      </motion.section>

      {/* About Section */}
      <section id="about" className="about py-24 bg-gray-50 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-800">
          About Me
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-700 mb-4">
          I am a full-stack developer with a passion for problem solving and
          building scalable web applications. I transitioned from retail
          management to tech, combining strong communication skills with
          technical expertise.
        </p>
        <Link to="/about" className="text-blue-600 hover:underline font-medium">
          Learn More
        </Link>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills py-24 bg-white text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-gray-800">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["JavaScript", "React", "Node.js"].map((skill) => (
            <motion.div
              key={skill}
              className="bg-gray-100 p-6 rounded-lg shadown-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-medium mb-2 text-gray-800">
                {skill}
              </h3>
              <p className="text-gray-600 text-lg">
                {skill === "JavaScript"
                  ? "Full-stack JavaScript development, both front-end and back-end."
                  : skill === "React"
                  ? "Building responsive, scalable, and dynamic user interfaces."
                  : "Developing fast and scalable server-side applications."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="projects py-24 bg-gray-50 text-center px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-gray-800">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Spendy Project */}
          <motion.div
            className="project-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-medium mb-4 text-gray-800">Spendy</h3>
            <p className="text-gray-600 mb-4">
              A personal finance management web app that lets users track
              expenses, set budget goals, and visualize spending with dynamic
              charts. Built with <span className="font-semibold">React</span>,{" "}
              <span className="font-semibold">Node.js</span>, and{" "}
              <span className="font-semibold">Auth0</span>.
            </p>
            <Link
              to="/projects/spendy"
              className="text-blue-600 hover:underline"
            >
              View Project
            </Link>
            {/* Optional screenshot */}
            {/* <img src="/images/spendy-screenshot.png" alt="Spendy Screenshot" className="mt-4 rounded" /> */}
          </motion.div>

          {/* Call Out Bot Project */}
          <motion.div
            className="project-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-medium mb-4 text-gray-800">
              Call Out Bot
            </h3>
            <p className="text-gray-600 mb-4">
              A Discord bot that logs player availability, sends auto-sub
              alerts, and tracks callouts in{" "}
              <span className="font-semibold">MongoDB</span> and{" "}
              <span className="font-semibold">Google Sheets</span>. Built with{" "}
              <span className="font-semibold">Node.js</span> to streamline
              esports team coordination.
            </p>
            <Link
              to="/projects/call-out-bot"
              className="text-blue-600 hover:underline"
            >
              View Project
            </Link>
            {/* Optional screenshot */}
            {/* <img src="/images/calloutbot-screenshot.png" alt="Call Out Bot Screenshot" className="mt-4 rounded" /> */}
          </motion.div>

          {/* Placeholder for third project */}
          <motion.div
            className="project-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-medium mb-4 text-gray-800">
              Coming Soon
            </h3>
            <p className="text-gray-600 mb-4">
              This slot is reserved for your next exciting project. Add your
              description and tech stack here when ready.
            </p>
            <span className="text-gray-400 italic">Stay tuned!</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
