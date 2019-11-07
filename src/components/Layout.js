import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Encart from "@components/Encart";
import Snipcart from "@components/Snipcart";

export default ({ children, logos, menu, cart, user, updateCart }) => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsTextesFooter {
          edges {
            node {
              instagramButtonText
              instagramText
              newsletterButtonText
              newsletterText
            }
          }
        }
        allDatoCmsBottomMenu(sort: { fields: position, order: ASC }) {
          edges {
            node {
              slug
              name
            }
          }
        }
        allDatoCmsEncartInfo {
          edges {
            node {
              info
              publi
            }
          }
        }
        allInstaNode(limit: 6, sort: { fields: timestamp, order: DESC }) {
          edges {
            node {
              id
              preview
              localFile {
                childImageSharp {
                  fluid(maxHeight: 250) {
                    ...GatsbyImageSharpFluid
                  }
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
      const encart = data.allDatoCmsEncartInfo.edges[0].node;
      const instagram = data.allInstaNode.edges;
      const text = data.allDatoCmsTextesFooter.edges[0].node;
      return (
        <div className={`Container ${open && "Container__open"}`}>
          <Snipcart updateCart={updateCart} />
          {encart.publi && <Encart encart={encart} />}
          <Header
            logos={logos}
            cart={cart}
            menu={menu}
            open={open}
            setOpen={setOpen}
            user={user}
            updateCart={updateCart}
          />
          <main className="Content">{children}</main>
          <Footer menu={bottomMenu} instagram={instagram} text={text} user={user} />
        </div>
      );
    }}
  />
);
