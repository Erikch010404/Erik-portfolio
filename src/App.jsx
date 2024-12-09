// src/App.js

import Header from './components/Header';
import AboutSection from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main className="pt-16">
        <section id="about" className="py-8">
          <AboutSection />
        </section>
        <section id="education" className="py-8">
          <Education />
        </section>
        <section id="projects" className="py-8">
          <Projects />
        </section>
        <section id="skills" className="py-8">
          <Skills />
        </section>
        <section id="certification" className="py-8">
          <Certifications />
        </section>
        <section id="contact" className="py-8">
          <Contact />
        </section>
      </main>
      <Footer />
      </div>
  );
}

export default App;
