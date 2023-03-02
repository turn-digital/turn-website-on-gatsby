import React from "react";

const Services = (props) => {
  const { tag, title, practicalResultsTitle, practicalResultsContent } =
    props.servicesInfo;
  return (
    <>
      <section className="services">
        <div className="services__bg-top">
          <div className="wrapper">
            <p className="services__text services__text--white">{tag}</p>
            <h2 className="services__title services__title--white">{title}</h2>
          </div>
        </div>
          <div className="services__bg-bottom">
            <div className="wrapper">
              <ul className="services__list">
              {props.cardsInfo.map((card) => (
                <li className="services__item" key={card.key}>
                  <h3 className="services__subtitle">{card.title}</h3>
                  <p className="services__desc">{card.content}</p>
                  <ul className="services__tags">
                    {card.tags.split(",").map((tag) => (
                      <li className="services__desc services__desc--margin" key={tag}>
                        <svg className="services__svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.529785 7.97L7.99979 0.5L15.4698 7.97L7.99979 15.44L0.529785 7.97ZM7.99979 12.155L12.1848 7.97L7.99979 3.785L3.81479 7.97L7.99979 12.155Z" fill="#54B20E"/>
                        </svg>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              </ul>
              <h2 className="services__title services__title--margin services__title--desk">{practicalResultsTitle}</h2>
              <p className="services__text">{practicalResultsContent}</p>
            </div>
          </div>
      </section>
    </>
  );
};
export default Services;
