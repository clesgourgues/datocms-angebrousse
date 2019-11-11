import React, { Component } from "react";
import { withPrefix } from "gatsby";

const defaultState = {
  user: null,
  cart: null
};

const SnipContext = React.createContext(defaultState);

class SnipProvider extends Component {
  state = {
    cart: null,
    user: null
  };

  componentDidMount() {
    document.addEventListener("snipcart.ready", this.snipcartReady);
  }

  componentWillUnmount() {
    document.removeEventListener("snipcart.ready", this.snipcartReady);
  }

  snipcartReady = () => {
    console.log("Snipcart finished loading");
    this.setState({
      user: window.Snipcart.api.user.current(),
      cart: window.Snipcart.api.cart.get()
    });
    this.loadLangJs();
    window.Snipcart.subscribe("item.added", this.updateCart);
    window.Snipcart.subscribe("item.removed", this.updateCart);
    window.Snipcart.subscribe("item.updated", this.updateCart);
  };

  loadLangJs = async () =>
    await this.addElem("script", {
      src: withPrefix("fr.js")
    });

  addElem = (tag, attrs) => {
    return new Promise((resolve, reject) => {
      var el = document.createElement(tag);
      el.onload = resolve;
      el.onerror = reject;

      var keys = Object.keys(attrs);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        el.setAttribute(key, attrs[key]);
      }

      document.head.appendChild(el);
    });
  };

  updateCart = () => {
    this.setState({ cart: window.Snipcart.api.cart.get() });
  };

  render() {
    const { cart, user } = this.state;
    return (
      <SnipContext.Provider
        value={{
          cart,
          user
        }}
      >
        {this.props.children}
      </SnipContext.Provider>
    );
  }
}

export default SnipContext;
export { SnipProvider };
