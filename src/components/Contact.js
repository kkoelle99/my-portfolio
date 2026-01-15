//Contact.js

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="contact-hero">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          I'm always open to discussing new opportunities, collaborations, or
          just talking tech.
        </motion.p>
      </section>

      {/* Contact Methods */}
      <motion.section
        className="contact-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <div className="contact-card">
          <h3>Email</h3>
          <a href="mailto:kkoelle99@gmail.com">kkoelle99@gmail.com</a>
        </div>
        <div className="contact-card">
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/kaleb-koelle-86719a1ba/"
            target="_blank"
            rel="noreferrer"
          >
            Connect with me
          </a>
        </div>
        <div className="contact-card">
          <h3>GitHub</h3>
          <a
            href="https://github.com/KoelleKaleb-FS"
            target="_blank"
            rel="noreferrer"
          >
            View my work
          </a>
        </div>
      </motion.section>
    </div>
  );
}
