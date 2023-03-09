import React from "react";
import { Link } from "gatsby";

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
