import React from "react";
import Logo from '../../assets/images/logo-footer.png';
import { Link } from "gatsby";

const Footer = (props) => {
  const {
    information_header,
    cookie_policy,
    availability,
    privacy_policy,
    contacts_header,
    phone,
    email,
    address,
    company_details,
    SIA,
    BANK,
    ACCOUNT,
    copyright,
  } = props.footerInfo;

  return (
    <>
      <footer className='footer'>
        <div className='wrapper'>
          <div className="footer__box">
          <img className='footer__logo' src={Logo} alt="logo"/>
          <nav className='footer__nav'>
            <Link className='footer__link' to="/">Home</Link>
            <Link className='footer__link' to="/services">Story</Link>
            <Link className='footer__link' to="/services">Services</Link>
            <Link className='footer__link' to="/contacts">Contacts</Link>
          </nav>          
          </div>

          <ul className='footer__list'>
            <li className='footer__item'>
              <h5 className="footer__title">{information_header}</h5>
              <div>
                <Link className='footer__text footer__text--hover' to="/">{cookie_policy}</Link>
                <Link className='footer__text footer__text--hover' to="/">{availability}</Link>
                <Link className='footer__text footer__text--hover' to="/">{privacy_policy}</Link>
              </div>
            </li>
            <li className='footer__item'>
              <h5 className="footer__title">{contacts_header}</h5>
              <ul>
                <li>
                  <a className='footer__text footer__text--hover' href={"tel:" + phone}>{phone}</a>
                </li>
                <li>
                  <a className='footer__text footer__text--hover' href={"mailto:" + email}>{email}</a>
                </li>
                <li>
                  <a className='footer__text footer__text--hover' href=''>{address}</a>
                </li>
              </ul>
            </li>
            <li className='footer__item'>
              <h5 className="footer__title">{company_details}</h5>
              <ul>
                <li className='footer__text'>{SIA}</li>
                <li className='footer__text'>{BANK}</li>
                <li className='footer__text'>{ACCOUNT}</li>
              </ul>
            </li>
          </ul>
          <p  className='footer__text'>{copyright}</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
