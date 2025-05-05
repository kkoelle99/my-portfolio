import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-24">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto">
          I'm Kaleb Koelle, a passionate developer with a love for creating
          intuitive applications.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-600 py-3 px-8 rounded-lg text-lg hover:bg-blue-700 hover:text-white transition-all shadow-lg"
        >
          Contact Me
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="about py-20 bg-gray-50">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-800">
            About Me
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto text-gray-700">
            I am a full-stack developer with experience in creating web
            applications using technologies like React, Node.js, and more. I am
            passionate about problem-solving and always striving to learn new
            skills to improve my craft.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills py-20 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-gray-800">
            Skills
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <li className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-medium mb-2 text-gray-800">
                JavaScript
              </h3>
              <p className="text-lg text-gray-600">
                Full-stack JavaScript development, both front-end and back-end.
              </p>
            </li>
            <li className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-medium mb-2 text-gray-800">React</h3>
              <p className="text-lg text-gray-600">
                Building responsive, scalable, and dynamic user interfaces.
              </p>
            </li>
            <li className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-medium mb-2 text-gray-800">
                Node.js
              </h3>
              <p className="text-lg text-gray-600">
                Developing fast and scalable server-side applications.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects py-20 bg-gray-50">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-gray-800">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="project-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-medium mb-4 text-gray-800">
                Project 1
              </h3>
              <p className="text-lg mb-4 text-gray-600">
                Short description of Project 1. This is a cool web app that I
                built.
              </p>
              <Link
                to="/projects/project-1"
                className="text-blue-600 hover:underline"
              >
                View Project
              </Link>
            </div>
            <div className="project-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-medium mb-4 text-gray-800">
                Project 2
              </h3>
              <p className="text-lg mb-4 text-gray-600">
                Short description of Project 2. A challenging app I worked on
                with a team.
              </p>
              <Link
                to="/projects/project-2"
                className="text-blue-600 hover:underline"
              >
                View Project
              </Link>
            </div>
            <div className="project-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-medium mb-4 text-gray-800">
                Project 3
              </h3>
              <p className="text-lg mb-4 text-gray-600">
                Short description of Project 3. This app was built with React
                and Node.js.
              </p>
              <Link
                to="/projects/project-3"
                className="text-blue-600 hover:underline"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
