import About from "./sections/About";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experiences";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

function App() {


  return (
    <div className="container mx-auto max-w-7xl">
     <div id="Home"> <Navbar /></div>
     <div id="Hero"> <Hero /></div>
     <div id="About"> <About /></div>
     <div id="Projects"> <Projects /></div>
     <div id="Experiences"> <Experiences /></div>
     <div id="Contact"><Contact /></div>
     <div id="Footer"> <Footer /></div>
    </div>
  );
}

export default App;    
