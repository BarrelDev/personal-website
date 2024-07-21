import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-black bg-gradient" style={{ paddingTop: "10vh" }}>
        <Hero />
        <About />
        <Skills/>
        <h2 id="portfolio">portfolio</h2>
      </div>
    </>
  );
}

export default App;
