import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Services = (props) => {
  const { tag, title, practicalResultsTitle, practicalResultsContent } =
    props.servicesInfo;
  return (
    <>
      <section id="services" className="services">
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
                        <StaticImage className="services__svg" src="../../assets/images/svg/romb.svg" alt="romb" />
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
