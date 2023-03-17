import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Contacts = (props) => {
  const { tag, header, content_1, content_2, content_3, content_4, name, phone, email } = props.contactsInfo;
  return (
    <>
      <section id="contacts" className="contacts">
        <div className="wrapper">
        <div>
          <StaticImage  className="icon__slash" src="../../assets/images/svg/slash-line.svg" alt="slash line" />
          <p className="contacts__text contacts__text--inline">{tag}</p>
          </div>
          <h2 className="contacts__title">{header}</h2>
          <p className="contacts__text">{content_1}&nbsp;</p>
          <p className="contacts__text">{content_2}&nbsp;</p>
          <p className="contacts__text">{content_3}&nbsp;</p>
          <p className="contacts__text contacts__text--margin">{content_4}</p>
         <ul>
          <li><p className="contacts__text contacts__text--bold">{name}</p></li>
          <li><a className="contacts__text contacts__text--hover" href={"tel:" + phone}>{phone}</a></li>
          <li><a className="contacts__text contacts__text--hover" href={"mailto:" + email}>{email}</a></li>
         </ul>
        </div>
        <div className="contacts__circle contacts__circle--first"></div>
        <div className="contacts__circle contacts__circle--second"></div>
        <div className="contacts__circle contacts__circle--third"></div>
        <div className="contacts__circle contacts__circle--fourth"></div>
      </section>
    </>
  );
};
export default Contacts;
