import Hero from "./sections/Hero";
import NavBar from "./components/NavBar";
import Grid from "./sections/Grid";
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import { navItems } from "./data/NavItems";
import Projects from "./sections/Projects";
import Unavailable from "./pages/Unavailable";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CollegeWork from "./pages/CollegeWork";
import Assignments from "./pages/Assignments";
import Journals from "./pages/Journals";
import AssignmentViewer from "./pages/AssignmentViewer";
import JournalViewer from "./pages/JournalViewer";

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();

  // Paths where I DON'T want the navbar
  const noNavbarPaths = ['/college-work/assignments', '/college-work/journals'];
  
  // Check if current path starts with any excluded path
  const showNavbar = !noNavbarPaths.some(path => location.pathname.startsWith(path));

  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Conditionally render navbar */}
        {showNavbar && <NavBar navItems={navItems} />}
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Grid />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/unavailable" element={<Unavailable />} />
          <Route path="/college-work" element={<CollegeWork />} />
          <Route path="/college-work/assignments" element={<Assignments />} />
          <Route path="/college-work/assignments/:semester/:filename" element={<AssignmentViewer />} />
          <Route path="/college-work/journals" element={<Journals />} />
          <Route path="/college-work/journals/:year/:month/:filename" element={<JournalViewer />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
