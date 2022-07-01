import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {

  useEffect(() => {

    const [show, handleShow] = useState(false);

    window.addEventListener(scroll, () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.remoteEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
      className="Nav__logo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1920px-Logonetflix.png"
      alt="Netflix-Logo"
      />

      <img
      className="Nav__avatar"
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
      alt="Netflixprofile-Logo"
      />
    </div>
  );
}

export default Navbar;
