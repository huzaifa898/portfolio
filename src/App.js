
import './App.css';
import Contact from './Compenets/Contact';
import Experience from './Compenets/Experenice';
import Footer from './Compenets/Footer';
import Hero from './Compenets/Hero';
import Navbar from './Compenets/Navbar';
import Portfolio from './Compenets/Portfolio';
import Skills from './Compenets/Skills';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Experience/>
    <Footer/>
    </>
  );
}

export default App;
