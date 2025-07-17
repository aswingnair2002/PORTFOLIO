import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <main>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="education"><Education /></section>
          <section id="certificates"><Certificates /></section>
          <section id="contact"><Contact /></section>
          <section id="footer"><Footer /></section>
        </main>
      </div>
    </>
  );
}

export default App;



