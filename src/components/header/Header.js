import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <>
      <div>
        <div>
          <div>Turn</div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/services">Story</Link>
            <Link to="/services">Services</Link>
            <Link to="/services">Contacts</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
