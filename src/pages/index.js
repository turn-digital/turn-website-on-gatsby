import Hero from "../components/hero/Hero";
import Cta from "../components/cta/Cta";
import Head from "../components/head/Head";
import Services from "../components/services/Services";
import Contacts from "../components/contacts/Contacts";
import Stories from "../components/stroies/Stories";
import CareInfo from "../components/careInfo/CareInfo";
import Footer from "../components/footer/Footer";
import Layout from "../components/Layout";

import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import React from "react";

const Home = (props) => {
  const { t } = useTranslation();

  const ctaInfo = {
    tag: t("Cta_Tag"),
    title: t("Cta_Title"),
    content: t("Cta_Content"),
  };

  const servicesInfo = {
    tag: t("Services_Tag"),
    title: t("Services_Title"),
    practicalResultsTitle: t("Practical_Results_Title"),
    practicalResultsContent: t("Practical_Results_Content"),
  };

  const cardsInfo = [
    {
      title: t("Card_1_Title"),
      content: t("Card_1_Content"),
      tags: t("Card_1_Tags"),
      key: 1,
    },
    {
      title: t("Card_2_Title"),
      content: t("Card_2_Content"),
      tags: t("Card_2_Tags"),

      key: 2,
    },
    {
      title: t("Card_3_Title"),
      content: t("Card_3_Content"),
      tags: t("Card_3_Tags"),
      key: 3,
    },
    {
      title: t("Card_4_Title"),
      content: t("Card_4_Content"),
      tags: t("Card_4_Tags"),

      key: 4,
    },
  ];

  const storyInfo = {
    tag: t("Stories_Tag"),
    title: t("Stories_Title"),
    Story1Title: t("Story_1_Title"),
    Story2Title: t("Story_2_Title"),
    Story3Title: t("Story_3_Title"),
    Story1Content: t("Story_1_Content"),
    Story2Content: t("Story_2_Content"),
    Story3Content: t("Story_3_Content"),
    Story_Button_Text: t("Story_Button_Text")
  };

  const contactsInfo = {
    tag: t("Contacts_Tag"),
    header: t("Contacts_Header"),
    content_1: t("Contacts_Content_1"),
    content_2: t("Contacts_Content_2"),
    content_3: t("Contacts_Content_3"),
    content_4: t("Contacts_Content_4"),
    name: t("Contacts_Name"),
    phone: t("Contacts_Phone"),
    email: t("Contacts_Email"),
  };
  const footerInfo = {
    information_header: t("Footer_Information_Header"),
    cookie_policy: t("Footer_Cookie_Policy"),
    availability: t("Footer_Availability"),
    privacy_policy: t("Footer_Privacy_Policy"),
    contacts_header: t("Footer_Contacts_Header"),
    phone: t("Footer_Phone"),
    email: t("Footer_Email"),
    address: t("Footer_Address"),
    company_details: t("Footer_Company_Details_Header"),
    SIA: t("Footer_SIA"),
    REG: t("Footer_REG"),
    BANK: t("Footer_BANK"),
    SWIFT: t("Footer_SWIFT"),
    ACCOUNT: t("Footer_ACCOUNT"),
    copyright: t("Footer_Copyright"),
  };

  const careInfo = {
    tag: t("Care_Info_Tag"),
    title: t("Care_Info_Title"),
    Card1Content: t("Care_Card_1_Content"),
    Card2Content: t("Care_Card_2_Content"),
  };

  const hero = {
    Hero_Title: t("Hero_Title"),
    Hero_Button_Text: t("Hero_Button_Text"),
  };

  return (
    <>
      <Layout />
      <Head
        title={t("Hero_Title")}
        description={"Hello this is the home page of Turn.lv"}
      />
      <main>
        <Hero hero={hero}/>
        <Cta ctaInfo={ctaInfo} />
        <Services cardsInfo={cardsInfo} servicesInfo={servicesInfo} />
        <Stories storyInfo={storyInfo} />
        <Contacts contactsInfo={contactsInfo} />
        <CareInfo careInfo={careInfo} />
        <Footer footerInfo={footerInfo} />
      </main>
    </>
  );
};

export default Home;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
