import { useState, useEffect } from "react";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Awards from "./components/Awards";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "education",
      "experience",
      "awards",
      "projects",
      "gallery",
      "videos",
      "skills",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for navbar and some padding

      // Check from bottom to top to get the most recent section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      // Handle case when at the very top
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box minH="100vh" w="100%">
      <Navbar activeSection={activeSection} />
      <Box as="main" w="100%" p={0} m={0}>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Awards />
        <Projects />
        <Gallery />
        <Videos />
        <Skills />
        <Contact />
      </Box>
    </Box>
  );
}

export default App;
