import { CursorGlow } from "./components/common/CursorGlow";
import { EasterEgg } from "./components/common/EasterEgg";
import { IntroLoader } from "./components/common/IntroLoader";
import { BrowserRouter } from "react-router-dom";

import About from "./components/About";
import { StarsCanvas } from "./components/canvas";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar/Navbar";
import Tech from "./components/Tech";
import Works from "./components/Works";

const App = () => {
  return (
    <BrowserRouter>
      <IntroLoader />
      <CursorGlow />
      <EasterEgg />
      <div className="relative z-0 bg-primary w-full">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
