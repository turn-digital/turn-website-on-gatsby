import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import React from "react";

const WebsiteRedesign = (props) => {
  const { t } = useTranslation();

  return <>
    {t("website-redesign-content")}
    <div>

    </div>
    </>;
};

export default WebsiteRedesign;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "story"] }, language: { eq: $language } }
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
