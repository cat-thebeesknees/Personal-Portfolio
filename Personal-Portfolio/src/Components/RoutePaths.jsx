import { Routes, Route } from "react-router-dom"; 
import Home from "./Home";
import About from "./About";
import Reviews from "./Reviews";
import Projects from "./Projects";
import Resume from "./Resume";
import NotFound from "./NotFound";
import "../Styles/RoutePaths.css";
import Profile from "./Me";
const RoutePaths = () => {
  return (
  <>
  
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/reviews" element={<Reviews />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="me" element={<Profile />} />
    <Route path="*" element={<NotFound />} />
  </Routes>

  </>
  );  
};

export default RoutePaths;
