import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Encart from "./Encart";

class Layout extends Component {
  state = {
    cart: null
  };

  componentDidMount() {
    document.addEventListener("snipcart.ready", () => {
      this.updateCart();
      window.Snipcart.subscribe("item.added", item => {
        this.updateCart();
      });
      window.Snipcart.subscribe("item.removed", item => {
        this.updateCart();
      });
      window.Snipcart.subscribe("item.updated", item => {
        this.updateCart();
      });
    });
  }

  updateCart = () => {
    const cart = window.Snipcart.api.cart.get();
    this.setState({ cart });
  };

  render() {
    const { cart } = this.state;
    const { children, logo, menu, bottomMenu, encart, instagram, text } = this.props;
    return (
      <div className="Container">
        {encart.publi && <Encart encart={encart} />}
        <Header sizes={logo} cart={cart} menu={menu} />
        <div className="Content">{children}</div>
        <Footer menu={bottomMenu} instagram={instagram} text={text} />
      </div>
    );
  }
}

export default Layout;
