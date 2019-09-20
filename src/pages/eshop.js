import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import Img from "gatsby-image";

class Eshop extends Component {
  state = {
    selected: "tout voir"
  };

  onMenuClick = selected => {
    this.setState({ selected });
  };

  render() {
    const { data } = this.props;
    const { selected } = this.state;
    const products =
      selected === "tout voir"
        ? data.products.edges
        : data.products.edges.filter(({ node: product }) => product.category[0].name === selected);
    console.log(data.products.edges);
    console.log(selected);
    return (
      <Layout site={data.site}>
        <div className="Filters">
          <span
            onClick={() => this.onMenuClick("tout voir")}
            className={`Filter ${selected === "tout voir" ? "Filter__selected" : ""}`}
          >
            tout voir
          </span>
          {data.filters.edges.map(({ node: filter }) => (
            <>
              <span className="Filter__separator">/</span>
              <span
                onClick={() => this.onMenuClick(filter.name)}
                className={`Filter ${selected === filter.name ? "Filter__selected" : ""}`}
              >
                {filter.name}
              </span>
            </>
          ))}
        </div>
        <div className="Catalogue">
          {products.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div
                className="Product snipcart-add-item"
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-image={product.image.url}
                data-item-name={product.name}
                data-item-url={`/`}
              >
                <div className="Product__image">
                  <Img style={{ opacity: 0.8, height: "300px" }} sizes={product.image.sizes} />
                </div>
                <div className="Product__details">
                  <div className="Product__name">
                    {product.name}
                    <div className="Product__price">{product.price}€</div>
                  </div>
                  <span className="Product__buy">Buy now</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        products: allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              category {
                name
              }
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        filters: allDatoCmsCategory {
          edges {
            node {
              name
            }
          }
        }
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={data => <Eshop data={data} />}
  />
);
