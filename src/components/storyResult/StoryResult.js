import React from "react";

const StoryResult = (props) => {
  console.log(props);
  return (
    <>
      <div>{props.title}</div>
      <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
    </>
  );
};
export default StoryResult;
