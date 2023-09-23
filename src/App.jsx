import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Register from "./pages/register/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { split } from "./animations/text";
import { useEffect } from "react";
import scroll from "./animations/scroll";
// scroll();

function App() {
  useEffect(() => {
    split();
  });
  return (
    <>
      {" "}
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
