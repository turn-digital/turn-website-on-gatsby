import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import React from "react";

const UserCentricApproach = (props) => {
  const { t } = useTranslation();

  return <>{t("user-centric-approach-content")}</>;
};

export default UserCentricApproach;

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
