import React, { useState, useEffect } from "react";
import "../style.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const baseURL = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      <div className={`nav ${show && "nav_scroll"}`}>
        <a href="/">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix logo"
          />
        </a>
      </div>
    </>
  );
};

export default Navbar;
