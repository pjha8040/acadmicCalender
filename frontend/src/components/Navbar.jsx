import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-0">
      <div className="nav-1">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-2">
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/notification">Notification Form</Link>
      </div>
    </nav>
  );
};

export default Navbar;
