import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import React from "react";

const DigitalTransformation = (props) => {
  const { t } = useTranslation();

  return <>{t("digital-transformation-content")}</>;
};

export default DigitalTransformation;

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
