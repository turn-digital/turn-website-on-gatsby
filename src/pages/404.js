import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Footer from "../components/footer/Footer";
import Layout from "../components/Layout";

const NotFoundPage = (props) => {
  const { t } = useTranslation();
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
    <div class="error-page">
    <Layout />
    <main>
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
    </div>
    <Footer footerInfo={footerInfo} />
    </>
  )
}

export default NotFoundPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "digital-transformation", "index"] }
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