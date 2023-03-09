import React from "react";

const MainStory = (props) => {
  const {
    story_header,
    paragraph_1_content,
    paragraph_2_content,
    paragraph_3_content,
    paragraph_4_content,
    paragraph_5_content,
    paragraph_6_content,
    paragraph_7_content,
    paragraph_8_content,

    paragraph_title_1,
    paragraph_title_2,
    paragraph_title_3,

    result_title,
    result_paragraph_1,
    result_paragraph_2,
    working_with_title,
  } = props.mainStoryInfo;
  return (
    <>
      <h1>{story_header}</h1>
      {` ${story_header} ${result_title} ${working_with_title} ${paragraph_7_content}`}
    </>
  );
};
export default MainStory;
