import React from "react";

const Cta = (props) => {
  const { tag, title, content } = props.ctaInfo;
  return (
    <>
      <section className="cta">
        <div className="wrapper">
          <p className="cta__text">{tag}</p>
          <h2 className="cta__title">{title}</h2>
          <p className="cta__text">{content}</p>
        </div>
        <div className="cta__circle cta__circle--first"></div>
        <div className="cta__circle cta__circle--second"></div>
        <div className="cta__circle cta__circle--third"></div>
        <div className="cta__circle cta__circle--fourth"></div>
      </section>
    </>
  );
};
export default Cta;
