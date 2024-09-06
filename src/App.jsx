import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Project";

import "./App.css";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen ">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Project />
        <Contact/>
        <Footer />
      </div>
    </>
  );
}

export default App;
