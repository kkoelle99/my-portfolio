import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // ✅ use HashRouter instead

// CSS
import "./global.css";
// Components
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
