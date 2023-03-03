import React from "react";

const CareInfo = (props) => {
  const { tag, title, Card1Content, Card2Content } = props.careInfo;
  return (
    <>
      <section className="care-info">
        <div className="wrapper">
          <p className="care-info__text">{tag}</p>
          <h2 className="care-info__title">{title}</h2>
         <ul>
          <li><div>{Card1Content}</div></li>
          <li><div>{Card2Content}</div></li>
         </ul>
        </div>
      </section>
    </>
  );
};

export default CareInfo;
