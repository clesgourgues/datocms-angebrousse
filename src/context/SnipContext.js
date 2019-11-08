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
    user: null,
    cssLoading: false,
    cssLoaded: false
  };

  componentDidMount() {
    window.addEventListener("load", this.updateScripts);
    document.addEventListener("snipcart.ready", this.snipcartReady);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.updateScripts);
    document.removeEventListener("snipcart.ready", this.snipcartReady);
  }

  snipcartReady = () => {
    console.log("Snipcart finished loading");
    window.Snipcart.subscribe("item.added", this.updateCart);
    window.Snipcart.subscribe("item.removed", this.updateCart);
    window.Snipcart.subscribe("item.updated", this.updateCart);
    this.setState({
      user: window.Snipcart.api.user.current(),
      cart: window.Snipcart.api.cart.get()
    });
  };

  updateScripts = async () => {
    if (!this.state.cssLoaded && !this.state.cssLoading) {
      await this.loadSnipCss();
    }
    const jQueryLoaded = !!(typeof window.$ == "function" && window.$.fn && window.$.fn.jquery);
    if (!jQueryLoaded) {
      await this.loadjQuery();
    }
    if (!this.isSnipcartLoaded()) {
      await this.loadSnipJs();
      await this.loadLangJs();
    }
  };

  isSnipcartLoaded = () => !!window.Snipcart;

  loadjQuery = async () =>
    await this.addElem("script", {
      async: true,
      src: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"
    });

  loadSnipJs = async () =>
    await this.addElem("script", {
      async: true,
      id: "snipcart",
      src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js",
      "data-api-key": process.env.GATSBY_SNIPCART_API_KEY
    });

  loadLangJs = async () =>
    await this.addElem("script", {
      src: withPrefix("fr-FR.js")
    });

  loadSnipCss = async () => {
    this.setState({ cssLoading: true });
    await this.addElem("link", {
      async: true,
      type: "text/css",
      rel: "stylesheet",
      href: "https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
    });
    this.setState({ cssLoaded: true, cssLoading: false });
  };

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
