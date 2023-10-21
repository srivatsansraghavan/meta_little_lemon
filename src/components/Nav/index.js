import { HashLink } from "react-router-hash-link";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <HashLink to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </HashLink>
        </li>
        <li className="nav-item">
          <HashLink
            to="/#menu"
            style={{ textDecoration: "none", color: "white" }}
          >
            Menu
          </HashLink>
        </li>
        <li className="nav-item">
          <HashLink
            to="/booking"
            style={{ textDecoration: "none", color: "white" }}
          >
            Booking
          </HashLink>
        </li>
        <li className="nav-item">
          <HashLink
            to="/#about"
            style={{ textDecoration: "none", color: "white" }}
          >
            About
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
