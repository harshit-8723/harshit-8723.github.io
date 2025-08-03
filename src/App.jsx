import Hero from "./sections/Hero";
import NavBar from "./components/NavBar";
import Grid from "./sections/Grid";
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import { navItems } from "./data/NavItems";
import Projects from "./sections/Projects";
import Unavailable from "./pages/Unavailable";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Routes>
            <Route path="/" element={
              <>
                <NavBar navItems={navItems} />
                <Hero />
                <Grid />
                <Projects />
                <Contact/>
                <Footer />
              </>
            } />
            <Route path="/unavailable" element={<Unavailable />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
