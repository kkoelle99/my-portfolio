import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-navy text-lightblue py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Kaleb Koelle. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/kkoelle99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-hoverblue"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/kaleb-koelle-86719a1ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-hoverblue"
          >
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:kkoelle99@gmail.com" className="hover:text-hoverblue">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
