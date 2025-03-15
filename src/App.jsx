import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Package from "./pages/Package";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/package/:packageName" element={<Package />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    <Footer />
  </>
);

const _App = () => <Home />;

export default App;
