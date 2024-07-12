import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import Education from "./Education";
import TechStacks from "./TechStacks";
import Projects from "./Projects";
import Footer from "./Footer";
import logo from "./assets/others/logo.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const isDarkMode = !darkMode;
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 50,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    const handleScroll = () => {
      const sections = ["about", "education", "skills", "projects", "footer"];
      const scrollPosition = window.scrollY + window.innerHeight / 1.5;
  
      let currentActiveSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          currentActiveSection = section;
        }
      }
      setActiveSection(currentActiveSection);
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initially to set active section
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle the completion of AOS animations
  const handleAOSComplete = () => {
    // After AOS animations complete, remove any potential horizontal scrollbar
    document.body.style.overflowX = 'hidden';
  };

  return (
    <div className="dark:bg-[#0f172a] min-h-screen">
      <Navbar
        activeSection={activeSection}
        toggleDarkMode={toggleDarkMode} // Pass toggleDarkMode to Navbar
        darkMode={darkMode}
        refs={{ aboutRef, educationRef, skillsRef, projectsRef, contactRef }}
      />
      <hr className="border-t border-gray-300 dark:border-[#282828] my-0" />

      <div className="mb-[130px]">
        <Intro darkMode={darkMode} />
      </div>

      <div id="about" ref={aboutRef}>
        <About />
      </div>

      <div id="education" ref={educationRef}>
        <Education />
      </div>

      <div id="skills" ref={skillsRef}>
        <TechStacks />
      </div>

      <div id="projects" ref={projectsRef}>
        <Projects />
      </div>

      <div
        className="flex justify-center mt-8 cursor-pointer relative"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-12 custom:h-10 custom:w-10 animate-bounce mt-8"
        />
      </div>

      <div id="footer" ref={contactRef}>
        <Footer onAnimationComplete={handleAOSComplete} />
      </div>
    </div>
  );
}

export default App;
