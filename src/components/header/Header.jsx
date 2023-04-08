import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <nav>
      <div className="container">
        <ul className="nav-wrapper">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
