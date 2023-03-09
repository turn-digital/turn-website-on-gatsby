import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Logo from "../../assets/images/logo-header.png";
import MenuOpen from "../../assets/images/menu.png";

const isBrowser = typeof window !== "undefined";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState("");

  // if(toggleMenu) {
  //   const link = document.querySelector("#focus")
  //   link.focus()
  // }

  //   const handleEsc = (event) => {
  //     if (event.keyCode === 27) {
  //      alert('Close')
  //    }
  //  };

  //  window.addEventListener('keydown', handleEsc);

  useEffect(() => {
    if (isBrowser) {
      setScreenWidth(window.innerWidth);
    }
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      <header className="wrapper">
        <div className="header">
          <img className="header__logo" src={Logo} alt="logo" />
          <div className="header__menu">
            {(toggleMenu || screenWidth > 1024) && (
              <nav className="header__nav">
                <Link className="header__link" id="focus" to="/">
                  Home
                </Link>
                <Link className="header__link" to="/services">
                  Story
                </Link>
                <Link className="header__link" to="/services">
                  Services
                </Link>
                <Link className="header__link" to="/contacts">
                  Contacts
                </Link>
                <button
                  className="header__button header__button--close"
                  onClick={() => setToggleMenu(!toggleMenu)}
                >
                  X
                </button>
              </nav>
            )}
          </div>
          <button
            className="header__button"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <img src={MenuOpen} alt="open menu" />
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;
