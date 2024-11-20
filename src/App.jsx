import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Project />
    </div>
  );
}

export default App;
