import React from "react";
import { Link } from "gatsby";

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
    <section className="other-stories">
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
                  <svg
                    className="other-stories__svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="32"
                    viewBox="0 0 19 32"
                    fill="none"
                  >
                    <path
                      d="M2.68908 0L0.200195 2.66667L13.3558 16L0.200195 29.3333L2.68908 32L18.6891 16L2.68908 0Z"
                      fill="#54B20E"
                    />
                  </svg>
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
                  <svg
                    className="other-stories__svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="32"
                    viewBox="0 0 19 32"
                    fill="none"
                  >
                    <path
                      d="M2.68908 0L0.200195 2.66667L13.3558 16L0.200195 29.3333L2.68908 32L18.6891 16L2.68908 0Z"
                      fill="#54B20E"
                    />
                  </svg>
                </Link>
            </li>
        </ul>
      </div>
    </section>
    </>
  );
};
export default OtherStories;
