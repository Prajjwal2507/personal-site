import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Signature from "./components/Signature";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Now from "./components/Now";
import Stats from "./components/Stats";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Signature />
        <About />
        <Skills />
        <Projects />
        <Now />
        <Stats />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
