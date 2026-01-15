import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // ✅ use HashRouter instead

// CSS
import "./global.css";
// Components
import Home from "./components/Home";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
