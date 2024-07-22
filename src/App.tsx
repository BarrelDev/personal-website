import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Navbar />
      <div className="bg-black bg-gradient" style={{ paddingTop: "10vh" }}>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}

export default App;
