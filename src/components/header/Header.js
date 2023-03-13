import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from "../../assets/images/logo-header.png";
import MenuOpen from "../../assets/images/menu.png";
import ReactModal from "react-modal";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="wrapper">
        <header className="header">
          <img className="header__logo" src={Logo} alt="logo" />
          <div className="header__menu">
            <div className="header__menu--mob">
            <ReactModal
             isOpen={toggleMenu}
             contentLabel={"Navigation modal"}
             shouldFocusAfterRender={true}
             shouldCloseOnEsc={true}
             preventScroll={true}>
              <nav className="header__nav header__nav--mob">
              <Link className="header__link" to="/">Home</Link>
              <Link className="header__link" to="/#story">Story</Link>
              <Link className="header__link" to="/#services">Services</Link>
              <Link className="header__link" to="/#contacts">Contacts</Link>
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
            <img src={MenuOpen} alt="open menu" />
          </button>
        </header>
      </div>
    </>
  );
};
export default Header;
