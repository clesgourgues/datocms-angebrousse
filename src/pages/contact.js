import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import Contact from '../components/Contact';
import AppContext from '../context/AppContext';

export default ({ data }) => {
  const { user } = useContext(AppContext);
  return (
    <Contact
      text={data.datoCmsContactText}
      user={user}
      titleColor={data.datoCmsSiteParameter.titleColor.hex}
    />
  );
};

export const query = graphql`
  query($locale: String!) {
    datoCmsContactText(locale: { eq: $locale }) {
      mailText
      successText
      title
      sendButtonText
      messagePlaceholderText
      emailPlaceholderText
      address {
        content
        title
      }
      mail {
        content
        title
      }
      phone {
        title
        content
      }
      image {
        fluid(maxWidth: 500) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    datoCmsSiteParameter {
      titleColor {
        hex
      }
    }
  }
`;
