//About.js
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="about-page">
      {/* Header */}
      <section className="about-hero">
        <motion.h1
          inital={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          A developer focused on building reliable, user-centered web
          applications with clean design and scalable architecture.
        </motion.p>
      </section>
      {/* Main Content */}
      <motion.section
        className="about-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="about-card">
          <h2>What I Do</h2>
          <p>
            I design and build modern web applications using technologies like
            React, Node.js, and MongoDB. My focus is on creating intuitive user
            interfaces backed by maintainable, scalable systems.
          </p>
        </div>

        <div className="about-card">
          <h2>How I Work</h2>
          <p>
            I approach development with a strong emphasis on clarity,
            organization, and problem-solving. I value clean code, thoughtful
            UI/UX decisions, and continuous improvement through iteration and
            feedback.
          </p>
        </div>

        <div className="about-card">
          <h2>What I Bring</h2>
          <ul>
            <li>Strong front-end fundamentals with React</li>
            <li>Experience building full-stack applications</li>
            <li>Authentication, APIs, and data-driven features</li>
            <li>Clear communication and team-oriented mindset</li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
}
