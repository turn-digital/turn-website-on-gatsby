import React from "react";

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
  console.log(props)

  return (
    <>
    <div>
    <h1>{story1_header}</h1>
    <p>{story2_header}</p>
    <p>{story2_content}</p>
    </div>
    </>
  );
};
export default OtherStories;
