import Navbar from './components/Navbar.jsx';
import Background from './components/Background.jsx';
import ScrollUI from './components/ScrollUI.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Certificates from './sections/Certificates.jsx';
import Education from './sections/Education.jsx';
import Resume from './sections/Resume.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Background />
      <ScrollUI />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Resume />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
