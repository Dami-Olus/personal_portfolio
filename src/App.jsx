import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components/'
import SpaceCanvas from "./components/canvas/Space";

const App = () => {
  return <BrowserRouter>
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center z-40">
      <Navbar />
      <Hero />

    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
      
    </div>
  </div>
  </BrowserRouter>
};

export default App;
