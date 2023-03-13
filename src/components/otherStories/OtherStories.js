import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const OtherStories = (props) => {
  const {
    tag,
    title,
    story1_header,
    story2_header,
    story1_content,
    story2_content,
    story1_button_text,
    story2_button_text,
  } = props.otherStoriesInfo;

  return (
    <>
    <section id="stories" className="other-stories">
      <div className="wrapper">
        <p className="other-stories__text">{tag}</p>
        <h2 className="other-stories__title">{title}</h2>
        <ul className="other-stories__list">
            <li className="other-stories__item">
              <h3 className="other-stories__subtitle">{story1_header}</h3>
              <p className="other-stories__desc">{story1_content}</p>
              <Link
                  className="other-stories__link"
                  to={"/user-centric-approach"}
                >
                  {story1_button_text}
                  <StaticImage className="other-stories__svg" src="../../assets/images/svg/arrow-right.svg" alt="arrow right" />
                </Link>
            </li>
            <li className="other-stories__item">
              <h3 className="other-stories__subtitle">{story2_header}</h3>
              <p className="other-stories__desc">{story2_content}</p>
              <Link
                  className="other-stories__link"
                  to={"/website-redesign"}
                >
                  {story2_button_text}
                  <StaticImage className="other-stories__svg" src="../../assets/images/svg/arrow-right.svg" alt="arrow right" />
                </Link>
            </li>
        </ul>
      </div>
    </section>
    </>
  );
};
export default OtherStories;
