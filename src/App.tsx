import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ResumeSection from "./components/ResumeSection";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Navbar />
      <div className="bg-black bg-gradient" style={{ paddingTop: "10vh" }}>
        <Hero />
        <About />
        <ResumeSection />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}

export default App;
