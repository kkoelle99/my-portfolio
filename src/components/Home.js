import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Background */}
        <motion.div
          className="hero-bg animate-gradient"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Wrap all hero content in one motion container */}
        <motion.div
          className="hero-content relative z-10 flex flex-col items-center text-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">
            Hi, I’m <span className="highlight">Kaleb Koelle</span>
          </h1>

          <p className="hero-subtitle mt-4 max-w-2xl">
            Full-Stack Developer passionate about creating engaging, accessible,
            and scalable web applications.
          </p>

          <div className="hero-buttons mt-6 flex gap-4">
            <Link to="/projects" className="btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <p>
          I transitioned from retail management into software development,
          blending strong leadership and problem-solving with modern full-stack
          technologies like <span className="highlight">React</span> and{" "}
          <span className="highlight">Node.js</span>. I’m driven by clean UI,
          purposeful design, and crafting experiences that make life easier.
        </p>
        <Link to="/about" className="link-primary">
          Read More
        </Link>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="skills-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Skills</h2>
        <div className="skills-list">
          {[
            "JavaScript",
            "React",
            "Node.js",
            "Auth0",
            "MongoDB",
            "UI Design",
            "APIs",
          ].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.1 }}
              className="skill-badge"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="projects-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Projects</h2>
        <div className="projects-grid">
          {/* Spendy */}
          <motion.div className="project-card" whileHover={{ y: -5 }}>
            <h3 className="project-title">Spendy</h3>
            <p>
              A personal finance web app to track expenses and visualize budgets
              using React, Node.js, and Auth0.
            </p>
          </motion.div>

          {/* Call Out Bot */}
          <motion.div className="project-card" whileHover={{ y: -5 }}>
            <h3 className="project-title">Call Out Bot</h3>
            <p>
              A Discord bot that automates player callouts and logs availability
              with MongoDB + Google Sheets.
            </p>
          </motion.div>

          {/* Coming Soon */}
          <motion.div className="project-card" whileHover={{ y: -5 }}>
            <h3 className="project-title">Coming Soon</h3>
            <p>
              A new project is in progress — stay tuned for the next big thing.
            </p>
            <span className="coming-soon">In Development</span>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
