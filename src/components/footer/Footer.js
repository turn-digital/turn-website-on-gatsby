import React from "react";
import Header from "../header/Header";
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
      <Header />
      <p>{phone}</p>
      <p>{phone}</p>
    </>
  );
};
export default Footer;
