import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from "../../assets/images/logo-header.png";
import { StaticImage } from "gatsby-plugin-image";
import ReactModal from "react-modal";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Link className="header__logo"  to="/"><img className="header__img" src={Logo} alt="logo" /></Link>
          <div className="header__menu">
            <div className="header__menu--mob">
            <ReactModal
             isOpen={toggleMenu}
             contentLabel={"Navigation modal"}
             shouldFocusAfterRender={true}
             shouldCloseOnEsc={true}
             preventScroll={true}>
              <nav className="header__nav header__nav--mob">
              <Link className="header__link" to="/" onClick={() => setToggleMenu(!toggleMenu)}>Home</Link>
              <Link className="header__link" to="/#story" onClick={() => setToggleMenu(!toggleMenu)}>Story</Link>
              <Link className="header__link" to="/#services" onClick={() => setToggleMenu(!toggleMenu)}>Services</Link>
              <Link className="header__link" to="/#contacts" onClick={() => setToggleMenu(!toggleMenu)}>Contacts</Link>
                <button
                  className="header__button header__button--close"
                  onClick={() => setToggleMenu(!toggleMenu)}
                >
                  X
                </button>
              </nav>
            </ReactModal>
            </div>
            <nav className="header__nav header__nav--desc">
              <Link className="header__link" to="/">Home</Link>
              <Link className="header__link" to="/#story">Story</Link>
              <Link className="header__link" to="/#services">Services</Link>
              <Link className="header__link" to="/#contacts">Contacts</Link>
            </nav>
            
          </div>
          <button
            className="header__button header__button--mob"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <StaticImage  src="../../assets/images/svg/menu.svg" alt="menu open" />
          </button>
        </header>
      </div>
    </>
  );
};
export default Header;
