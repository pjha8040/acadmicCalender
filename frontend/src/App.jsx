import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import ContactUs from "./pages/ContactUs";
import NotificationForm from "./pages/Notiform";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "1em" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/notification" element={<NotificationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
