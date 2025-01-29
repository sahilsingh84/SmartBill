import * as React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">SmartBills</div>
      <div className="links">
        <ul className="ulLinks">
          <li className="linkItem">
            <a href="/">Home</a>
          </li>
          <li className="linkItem">
            <a href="/dashboard">Dashboard</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
