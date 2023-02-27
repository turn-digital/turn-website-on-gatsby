import React from "react";
import Header from "../components/header/Header";
import Footer from "./footer/Footer";
import Head from "./head/Head";
import "../styles/style.scss";

// set app as default lv - resolve plugin bug
typeof window !== "undefined" &&
  localStorage.setItem("gatsby-i18next-language", "lv");

const Layout = ({ children, footerInfo }) => {
  return (
    <>
      <Head />
      {/* <Header />
      <div>
        <main>{children}</main>
        <Footer footerInfo={footerInfo} />
      </div> */}
    </>
  );
};
export default Layout;
