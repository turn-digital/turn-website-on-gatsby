import React from "react";
import StoryResult from "../storyResult/StoryResult";
import imageEsaeima from "../../assets/images/svg/eSaeima--mob.svg";
import imageTiesibsargs from "../../assets/images/svg/tiesibsargs.svg";
import imageCSP from "../../assets/images/svg/csp.svg";

const MainStory = (props) => {
  const {
    story_header,
    main_story_content,

    result_title,
    result_content,
    working_with_title,
  } = props.mainStoryInfo;
  return (
    <>
      <section className="main-story">
      <div className="wrapper">
      <h1 className="main-story__title">{story_header}</h1>
      <div className="main-story__block">
        <aside className="main-story__aside">
          <img
          className="main-story__fit"
            src={imageEsaeima}
            alt="e-Saeima"
          />
        </aside>
        <div className="main-story__box">
          <div className="main-story__content" dangerouslySetInnerHTML={{ __html: main_story_content }}></div>
          <div className="main-story__content"><StoryResult title={result_title} content={result_content} /></div>
          <h3 className="main-story__subtitle">{working_with_title}</h3>
          <ul className="main-story__list">
            <li>
            <img
              className="main-story__img"
              src={imageTiesibsargs}
              alt="Tiesibsargs"
              />    
            </li>
            <li>
            <img
              className="main-story__img"
              src={imageCSP}
              alt="CSP"
              />    
            </li>
          </ul>
        </div>
        </div>
      </div> 
      </section>
    </>
  );
};
export default MainStory;
