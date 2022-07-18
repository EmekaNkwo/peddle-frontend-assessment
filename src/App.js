import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {render} from "react-dom";
import "./App.css";
import AboutPage from "./pages/About/AboutPage";
import Blog from "./pages/Blog/Blog";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import Contact from "./pages/Contact/Contact";
import Github from "./pages/GitPage/GitPage";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="coming-soon" element={<ComingSoon />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="github" element={<Github />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
