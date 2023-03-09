import React from "react";

const Contacts = (props) => {
  const { tag, header, content, name, phone, email } = props.contactsInfo;
  return (
    <>
      <section id="contacts" className="contacts">
        <div className="wrapper">
          <p className="contacts__text">{tag}</p>
          <h2 className="contacts__title">{header}</h2>
          <p className="contacts__text contacts__text--margin">{content}</p>
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
