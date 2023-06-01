import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    // <BrowserRouter>
    //   <div className="relative z-0 bg-primary">
    //     <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
    //       <Navbar />
    //       <Hero />
    //     </div>
    //     <About />
    //     <Experience />
    //     <Tech />
    //     <Works />
    //     <Feedbacks />
    //     <div className="relative z-0">
    //       <Contact />
    //       <StarsCanvas />
    //     </div>
    //   </div>
    // </BrowserRouter>

    <BrowserRouter>
      <Navbar />
      <StarsCanvas />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="work"
          element={
            <>
              <Experience />
              <Tech />
              <Works />
            </>
          }
        />
        <Route
          path="contact"
          element={
            <>
              <Contact />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
