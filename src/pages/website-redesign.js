import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import React from "react";
import Footer from "../components/footer/Footer";
import Contacts from "../components/contacts/Contacts";
import Layout from "../components/Layout";
import Head from "../components/head/Head";
import OtherStories from "../components/otherStories/OtherStories";
import MainStory from "../components/mainStory/MainStory";

const WebsiteRedesign = (props) => {
  const { t } = useTranslation();
  const contactsInfo = {
    tag: t("Contacts_Tag"),
    header: t("Contacts_Header"),
    content: t("Contacts_Content"),
    name: t("Contacts_Name"),
    phone: t("Contacts_Phone"),
    email: t("Contacts_Email"),
  };

  const otherStoriesInfo = {
    tag: t("OtherStories_Tag"),
    title: t("OtherStories_Header"),
    story1_header: t("OtherStories_Title_1"),
    story2_header: t("OtherStories_Title_2"),
    story1_content: t("OtherStories_Content_1"),
    story2_content: t("OtherStories_Content_2"),
    story1_button_text: t("OtherStories_Button_Text_1"),
    story2_button_text: t("OtherStories_Button_Text_2"),
  };

  const mainStoryInfo = {
    story_header: t("Story_Header"),
    main_story_content: t("Main_Story_Content"),
    result_title: t("Result_Title"),
    result_content: t("Result_Content"),
    working_with_title: t("Working_with_Title"),
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
    BANK: t("Footer_BANK"),
    ACCOUNT: t("Footer_ACCOUNT"),
    copyright: t("Footer_Copyright"),
  };

  return (
    <>
      <Layout />
      <Head
        title={t("Hero_Title")}
        description={"Hello this is the home page of Turn.lv"}
      />
      <main>
        <MainStory mainStoryInfo={mainStoryInfo} />
        <Contacts contactsInfo={contactsInfo} />
        <OtherStories otherStoriesInfo={otherStoriesInfo} />
        <Footer footerInfo={footerInfo} />
      </main>
    </>
  );
};

export default WebsiteRedesign;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "website-redesign", "index"] }
        language: { eq: $language }
      }
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
