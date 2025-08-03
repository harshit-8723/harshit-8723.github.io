import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Grid from "./components/Grid";
import { navItems } from "./data/NavItems";


const App = () => {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavBar navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
};

export default App;
