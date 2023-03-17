import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from "../../assets/images/logo-header.png";
import { StaticImage } from "gatsby-plugin-image";
import ReactModal from "react-modal";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <div className="wrapper">
        <header className="header">
          <Link className="header__logo"  to="/"><img className="header__img" src={Logo} alt="logo" /></Link>
          <div className="header__menu">
            <div>
            <ReactModal
              className="header__menu--mob wrapper"
             isOpen={toggleMenu}
             contentLabel={"Navigation modal"}
             shouldFocusAfterRender={true}
             shouldCloseOnEsc={true}
             preventScroll={true}>
             <div className="header__box">
             <Link className="header__logo" to="/" onClick={() => setToggleMenu(!toggleMenu)}><img className="header__img" src={Logo} alt="logo" /></Link>
               <button
                  className="header__button header__button--close"
                  onClick={() => setToggleMenu(!toggleMenu)}
                >
                  <StaticImage  src="../../assets/images/svg/menu-close.svg" alt="menu close" />
                </button>
             </div>
              <nav className="header__nav header__nav--mob">
              <Link className="header__link" to="/" onClick={() => setToggleMenu(!toggleMenu)}>Home</Link>
              <AnchorLink className={((url.match('website-redesign') || url.match('user-centric-approach') || url.match('digital-transformation')) ? (`header__link active`) : (`header__link`) )} to="/#story" onClick={() => setToggleMenu(!toggleMenu)}>Story</AnchorLink>
              <AnchorLink className="header__link" to="/#services" onClick={() => setToggleMenu(!toggleMenu)}>Services</AnchorLink>
              <AnchorLink className="header__link" to="/#contacts" onClick={() => setToggleMenu(!toggleMenu)}>Contacts</AnchorLink>
              </nav>
            </ReactModal>
            </div>
            <nav className="header__nav header__nav--desc">
              <Link className="header__link" to="/">Home</Link>
              <AnchorLink className={((url.match('website-redesign') || url.match('user-centric-approach') || url.match('digital-transformation')) ? (`header__link active`) : (`header__link`) )} to="/#story" onClick={() => setToggleMenu(!toggleMenu)}>Story</AnchorLink>
              <AnchorLink className="header__link" to="/#services">Services</AnchorLink>
              <AnchorLink className="header__link" to="/#contacts">Contacts</AnchorLink>
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
