import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStrip from "./components/TechStrip";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  return (
    <div className="bg-[#050816] min-h-screen text-white overflow-x-hidden">
      <Navbar />

      <Hero />
      <Services />
      {/* <Skills /> */}
      <Contact />
      <Footer />

    </div>
  );
}

export default App;