import React, {useState, useEffect} from 'react'
import { Link } from "gatsby";
import Logo from '../../assets/images/logo-header.png';
import MenuOpen from '../../assets/images/menu.png';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <>
      <div className='wrapper'>
          <div className='header'>
          <img className='header__logo' src={Logo} alt="logo"/>
          <div className='header__menu'>
          {(toggleMenu || screenWidth > 1024) && (
          <nav className='header__nav'>
            <Link className='header__link' to="/">Home</Link>
            <Link className='header__link' to="/services">Story</Link>
            <Link className='header__link' to="/services">Services</Link>
            <Link className='header__link' to="/contacts">Contacts</Link>
            <button className='header__button header__button--close' onClick={toggleNav}>X</button>
          </nav>
          )}
          </div>
        <button className='header__button' onClick={toggleNav}>
          <img src={MenuOpen} alt="open menu"/>
        </button>
        </div>
      </div>
    </>
  );
};
export default Header;

