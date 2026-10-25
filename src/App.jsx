import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import SkillsMarquee from "./components/SkillsMarquee";
import ScrollReveal from "./components/ScrollReveal";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <ToastContainer position="top-right" autoClose={3000} />

      <Navbar />
      <Hero />
      <SkillsMarquee />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Testimonials />
      <Achievements />
      <Contact />
      <Footer/>
    </main>
  );
}

export default App;