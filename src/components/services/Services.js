import React from "react";

const Services = (props) => {
  const { tag, title, practicalResultsTitle, practicalResultsContent } =
    props.servicesInfo;
  return (
    <>
      <div>
        <>{tag}</>
        <>{title}</>
        <div>
          {props.cardsInfo.map((card) => (
            <div key={card.key}>
              <div>{card.title}</div>
              <div>{card.content}</div>
              {card.tags.split(",").map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </div>
          ))}
        </div>
        <>{practicalResultsTitle}</>
        <>{practicalResultsContent}</>
      </div>
    </>
  );
};
export default Services;
