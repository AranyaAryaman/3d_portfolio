import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Projects, Contact, Achievements } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <Router>
      <main className="min-h-screen bg-ink text-ivory">
        <Navbar />
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
