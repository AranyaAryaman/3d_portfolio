import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  Home,
  About,
  Projects,
  Contact,
  Achievements,
  Mentorship,
  Hobbies,
} from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import AnimatedBackground from "./components/AnimatedBackground";
import ChatAssistant from "./components/ChatAssistant";

// Each section gets a background themed to what it is.
const VARIANT_BY_PATH = {
  "/": "quant",
  "/about": "code",
  "/projects": "code",
  "/achievements": "accolades",
  "/mentorship": "academic",
  "/hobbies": "hobbies",
  "/contact": "contact",
};

const RoutedBackground = () => {
  const { pathname } = useLocation();
  return <AnimatedBackground variant={VARIANT_BY_PATH[pathname] || "quant"} />;
};

const App = () => {
  return (
    <Router>
      <RoutedBackground />
      <main className="relative z-0 min-h-screen text-ivory">
        <Navbar />
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
          {/* any unknown link redirects home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </main>
      <ChatAssistant />
    </Router>
  );
};

export default App;
