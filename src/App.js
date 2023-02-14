import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import { Routes, Route } from "react-router-dom";
import Experience from "./routes/Experience";
import Activities from "./routes/Activities";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </>
  );
}

export default App;
