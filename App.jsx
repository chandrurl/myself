import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
