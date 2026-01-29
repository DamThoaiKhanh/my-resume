import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Resume } from "./components/Resume";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Cta />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
