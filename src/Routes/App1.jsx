import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

function App1() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="header" element={<Header />} />
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App1;
