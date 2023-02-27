import React from "react";

const CareInfo = (props) => {
  const { tag, title, Card1Content, Card2Content } = props.careInfo;
  return (
    <>
      <div>{tag}</div>
      <div>{title}</div>
      <div>{Card1Content}</div>
      <div>{Card2Content}</div>
    </>
  );
};

export default CareInfo;
