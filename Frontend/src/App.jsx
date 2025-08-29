import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NAvbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Other from "./pages/Other";
import Contact from "./pages/Contact";



function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/others-activities" element={<Other />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* <Route path="/contact" element={<Contact />} /> */} 
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
