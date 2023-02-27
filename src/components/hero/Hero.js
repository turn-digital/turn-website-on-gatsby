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
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
