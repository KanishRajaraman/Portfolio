import React from 'react';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ClickSpark from './components/ClickSpark';

// Page Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Experience from './sections/Experience';


function App() {
  return (
    <>
      <div className="relative antialiased selection:bg-blue-100 selection:text-blue-600">
      {/* Navigation stays on top of everything */}
      <ScrollProgress />
      <Navbar />
      <ClickSpark
          sparkColor='#3B82F6'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
      >
      <main>
        {/* Each section should have an ID that matches the Navbar links */}
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>


      </main>
      </ClickSpark>

      {/* Footer at the very bottom */}
      <Footer />
      </div>
    </>
  );
}

export default App;