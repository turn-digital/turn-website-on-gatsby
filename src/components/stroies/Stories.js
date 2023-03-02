import React from "react";
import { Link } from "gatsby";
import imageFirst from '../../assets/images/eSaeima.png';
import imageSecond from '../../assets/images/tiesibsargs.png';
import imageThird from '../../assets/images/csp.png';
import imageFourth from '../../assets/images/cfla.png';
import imageFiveth from '../../assets/images/trl.png';
import imageSixth from '../../assets/images/galerijaCentrs.png';
import imageSeventh from '../../assets/images/eParaksts.png';
import imageEight from '../../assets/images/eSilva.png';


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
      <section className="stories">
        <div className="wrapper">
          <p className="stories__text">{tag}</p>
          <h2 className="stories__title">{title}</h2>
          <ul className="stories__list">
            <li className="stories__item stories__item--first stories__box">
              <div>
                <h3 className="stories__subtitle">{Story1Title}</h3>
                <p className="stories__desc">{Story1Content}</p>
                <Link className="stories__link stories__link--margin" to={"/digital-transformation"}>Izlasīt visu stāstu
                <svg className="stories__svg" xmlns="http://www.w3.org/2000/svg" width="19" height="32" viewBox="0 0 19 32" fill="none">
                  <path d="M2.68908 0L0.200195 2.66667L13.3558 16L0.200195 29.3333L2.68908 32L18.6891 16L2.68908 0Z" fill="#54B20E"/>
                </svg>
                </Link>
              </div>
              <div className="stories__block-grid">
                <img className="stories__img stories__item--first" src={imageFirst} alt='e-Saeima'/>
                <img className="stories__img stories__item--second" src={imageSecond} alt='tiesibsargs'/>
                <img className="stories__img stories__item--third" src={imageThird} alt='csp'/>
              </div>
            </li>
            <li className="stories__item stories__item--second">
              <h3 className="stories__subtitle">{Story2Title}</h3>
              <p className="stories__desc">{Story2Content}</p>
              <Link className="stories__link" to={"/user-centric-approach"}>Izlasīt visu stāstu
              <svg className="stories__svg" xmlns="http://www.w3.org/2000/svg" width="19" height="32" viewBox="0 0 19 32" fill="none">
                <path d="M2.68908 0L0.200195 2.66667L13.3558 16L0.200195 29.3333L2.68908 32L18.6891 16L2.68908 0Z" fill="#54B20E"/>
              </svg>
              </Link>
              <div className="stories__block-small">
              <img className="stories__img" src={imageFourth} alt='cfla'/>
              <img className="stories__img" src={imageFiveth} alt='trl'/>
              </div>
            </li>
            <li className="stories__item stories__item--third">
              <h3 className="stories__subtitle">{Story3Title}</h3>
              <p className="stories__desc">{Story3Content}</p>
              <Link className="stories__link" to={"/website-redesign"}>Izlasīt visu stāstu
              <svg className="stories__svg" xmlns="http://www.w3.org/2000/svg" width="19" height="32" viewBox="0 0 19 32" fill="none">
                <path d="M2.68908 0L0.200195 2.66667L13.3558 16L0.200195 29.3333L2.68908 32L18.6891 16L2.68908 0Z" fill="#54B20E"/>
              </svg>
              </Link>
              <div className="stories__block-grid stories__block-grid--bottom">
                <img className="stories__img stories__item--first" src={imageSixth} alt='galerija centrs'/>
                <img className="stories__img stories__item--second" src={imageSeventh} alt='eParaksts'/>
                <img className="stories__img stories__item--third" src={imageEight} alt='e-Silva'/>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Stories;