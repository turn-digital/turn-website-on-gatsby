import React from "react";
import { Link } from "gatsby";

const Stories = (props) => {
  const {
    tag,
    title,
    Story1Title,
    Story2Title,
    Story3Title,
    Story1Content,
    Story2Content,
    Story3Content,
  } = props.storyInfo;
  return (
    <>
      <div>{tag}</div>
      <div>{title}</div>
      <Link to={"/digital-transformation"}>Story 1</Link>
      <Link to={"/user-centric-approach"}>Story 2</Link>
      <Link to={"/website-redesign"}>Story 3</Link>
    </>
  );
};

export default Stories;
