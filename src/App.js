import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//CSS
import "./global.css";
// Components
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
