import './App.css';
import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectsSection from './components/ProjectsSection/ProjectsSection';

function App() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}

export default App;
