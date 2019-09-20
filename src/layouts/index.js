import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

import "../style/index.scss";

export default ({ children, site }) => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsLogo {
          edges {
            node {
              logo {
                sizes(maxWidth: 600, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data);
      return (
        <div>
          <Helmet title="Ange Brousse" />
          <div className="Container">
            <div className="Header">
              <div className="Wrap">
                <div className="Header__body">
                  <div className="Header__logo">
                    <Link to="/">
                      <Img sizes={data.allDatoCmsLogo.edges[0].node.logo.sizes} />
                    </Link>
                  </div>

                  <div className="Header__menu">
                    <h5 className="Header__link">
                      <Link to="/eshop">e-shop</Link>
                    </h5>
                    <h5 className="Header__link">
                      <Link to="/instagram">inspiration</Link>
                    </h5>
                    <h5 className="Header__link">
                      <Link to="/about">histoire</Link>
                    </h5>
                    <h5 className="Header__link">
                      <Link to="/about">baguier</Link>
                    </h5>
                    <h5 className="Header__link">
                      <Link to="/contact">contact</Link>
                    </h5>
                  </div>
                  <div className="Header__summary snipcart-summary snipcart-checkout">
                    <div className="Header__summary__title">Panier</div>
                    <div className="Header__summary__line">
                      Articles: <span className="snipcart-total-items"></span>
                    </div>
                    <div className="Header__summary__line">
                      Prix: <span className="snipcart-total-price"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Wrap">{children}</div>
            <div className="Wrap">
              <div className="Footer">
                C'est le footer !!! <a href="https://www.gatsbyjs.org/">Whatever</a>,{" "}
              </div>
            </div>
          </div>
        </div>
      );
    }}
  />
);
