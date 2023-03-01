import React from "react";
import { Link } from "gatsby";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="wrapper">
          <h1 className="hero__title">
            {`We’ll get it done. 
          Together.`}
          </h1>
          <div>
            <Link
              className="hero__link"
              to="/"
              style={{ textDecoration: "underline" }}
            >
              Show me how
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="32" viewBox="0 0 19 32" fill="none">
                <path d="M2.68908 0L0.200195 2.66667L13.3558 16L0.200195 29.3333L2.68908 32L18.6891 16L2.68908 0Z" fill="#54B20E"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
