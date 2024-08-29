import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div
      id="top"
      className="relative text-neutral-300 antialiased selection:bg-cyan-700 selection:text-white"
    >
      <div className="fixed top-0 left-0 -z-10 h-full w-full"></div>
      <div className="absolute top-0 left-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-8 pt-20">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
