import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Grid from "./components/Grid";
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { navItems } from "./data/NavItems";
import Projects from "./components/Projects";
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
