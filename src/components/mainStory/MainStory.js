import React from "react";
import StoryResult from "../storyResult/StoryResult";

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
      <h1>{story_header}</h1>
      <div dangerouslySetInnerHTML={{ __html: main_story_content }}></div>
      <StoryResult title={result_title} content={result_content} />
    </>
  );
};
export default MainStory;
