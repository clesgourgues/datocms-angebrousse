import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Encart from '@components/Encart';

export default ({ children, logos, menu, locale }) => (
  <StaticQuery
    query={graphql`
      query {
        frFooter: datoCmsTextesFooter(locale: { eq: "fr" }) {
          instagramText
          newsletterButtonText
          newsletterText
          copyrightText
        }
        enFooter: datoCmsTextesFooter(locale: { eq: "en" }) {
          instagramText
          newsletterButtonText
          newsletterText
          copyrightText
        }
        frBottom: allDatoCmsBottomMenu(
          sort: { fields: position, order: ASC }
          filter: { locale: { eq: "fr" } }
        ) {
          edges {
            node {
              slug
              name
            }
          }
        }
        enBottom: allDatoCmsBottomMenu(
          sort: { fields: position, order: ASC }
          filter: { locale: { eq: "en" } }
        ) {
          edges {
            node {
              slug
              name
            }
          }
        }
        frEncart: datoCmsEncartInfo(locale: { eq: "fr" }) {
          info
          publi
        }
        enEncart: datoCmsEncartInfo(locale: { eq: "en" }) {
          info
          publi
        }
      }
    `}
    render={data => {
      const [open, setOpen] = useState(false);
      const bottomMenu = locale === 'fr' ? data.frBottom.edges : data.enBottom.edges;
      const encart = locale === 'fr' ? data.frEncart : data.enEncart;
      const text = locale === 'fr' ? data.frFooter : data.enFooter;
      return (
        <div className={`Container ${open && 'Container__open'}`}>
          {encart.publi && <Encart encart={encart} />}
          <Header logos={logos} menu={menu} open={open} setOpen={setOpen} />
          <main className='Content'>{children}</main>
          <Footer menu={bottomMenu} text={text} />
        </div>
      );
    }}
  />
);
