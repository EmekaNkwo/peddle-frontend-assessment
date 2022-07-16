import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import {render} from "react-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import Blog from "./pages/Blog";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import Contact from "./pages/Contact";
import Github from "./pages/Github";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/" element={<Navigate to="coming-soon" />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/github" element={<Github />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
