import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Projects, Contact, Achievements, Leadership } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import AnimatedBackground from "./components/AnimatedBackground";

const App = () => {
  return (
    <Router>
      {/* interactive quant background, fixed behind every page */}
      <AnimatedBackground />
      <main className="relative z-0 min-h-screen text-ivory">
        <Navbar />
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
