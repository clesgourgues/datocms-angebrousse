import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Encart from '@components/Encart';

export default ({ children, logos, menu }) => (
  <StaticQuery
    query={graphql`
      query {
        datoCmsTextesFooter(locale: { eq: "fr" }) {
          instagramText
          newsletterButtonText
          newsletterText
        }
        allDatoCmsBottomMenu(
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
        datoCmsEncartInfo(locale: { eq: "fr" }) {
          info
          publi
        }
        allDatoCmsCollection(sort: { fields: position, order: ASC }) {
          edges {
            node {
              slug
              name
              image {
                fluid {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const [open, setOpen] = useState(false);
      const bottomMenu = data.allDatoCmsBottomMenu.edges;
      const encart = data.datoCmsEncartInfo;
      const text = data.datoCmsTextesFooter;
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
