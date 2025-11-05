import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Extracurricular from './components/Extracurricular';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Extracurricular />
      <Footer />
    </div>
  );
}

export default App;
