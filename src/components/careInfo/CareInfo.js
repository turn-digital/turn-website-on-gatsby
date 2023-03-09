import React from "react";
import LogoSchoolio from "../../assets/images/logo-schoolio.png";
import LogoPieklustamiba from "../../assets/images/logo-pieklustamiba.png";
import { StaticImage } from "gatsby-plugin-image";

const CareInfo = (props) => {
  const { tag, title, Card1Content, Card2Content } = props.careInfo;
  return (
    <>
      <section className="care-info">
        <div className="wrapper">
          <p className="care-info__text">{tag}</p>
          <h2 className="care-info__title">{title}</h2>
          <ul className="care-info__list">
            <li className="care-info__item">
              <img
                className="care-info__img"
                src={LogoSchoolio}
                alt="logo schoolio WP"
              />
              <p className="care-info__desc">{Card1Content}</p>
              <a
                className="care-info__link"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.schooliowp.lv"
              >
                www.schooliowp.lv
                <StaticImage className="care-info__svg" src="../../assets/images/svg/blank-link.svg" alt="blank link" />
              </a>
            </li>
            <li className="care-info__item">
              <img
                className="care-info__img"
                src={LogoPieklustamiba}
                alt="logo Pieklustamiba"
              />
              <p className="care-info__desc">{Card2Content}</p>
              <a
                className="care-info__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.pieklustamiba.lv"
              >
                www.pieklustamiba.lv
                <StaticImage className="care-info__svg" src="../../assets/images/svg/blank-link.svg" alt="blank link" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CareInfo;
