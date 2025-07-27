import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experiences";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Header />
      <main>
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
