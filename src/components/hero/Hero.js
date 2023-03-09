import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Hero = (props) => {
  const {
    Hero_Title,
   Hero_Button_Text
  } = props.hero
  return (
    <>
      <section className="hero">
        <div className="wrapper">
          <h1 className="hero__title">
            {Hero_Title}
          </h1>
          <div>
            <Link
              className="hero__link"
              to="/"
            >
              {Hero_Button_Text}
              <StaticImage className="hero__svg" src="../../assets/images/svg/arrow-right.svg" alt="arrow right" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
