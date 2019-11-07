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
    productsQueue: [],
    isSnipcartReady: false,
    cssLoading: false,
    cssLoaded: false,
    eventSubscribed: false
  };

  componentDidMount() {
    console.log("did mount");
    window.addEventListener("load", this.updateScripts);
    document.body.addEventListener("click", this.handleProductClick);
    document.addEventListener("snipcart.ready", this.snipcartReady);
  }

  componentWillUnmount() {
    document.removeEventListener("DOMContentLoaded", this.updateScripts);
    document.body.removeEventListener("click", this.handleProductClick);
    document.removeEventListener("snipcart.ready", this.snipcartReady);
  }

  snipcartReady = () => {
    console.log("Snipcart finished loading");
    this.loadLangJs().then(() => {
      window.Snipcart.subscribe("item.adding", this.handleItemAdding);
      window.Snipcart.subscribe("item.added", this.updateCart);
      window.Snipcart.subscribe("item.removed", this.updateCart);
      window.Snipcart.subscribe("item.updated", this.updateCart);
      this.dequeueProducts();
      this.setState({
        isSnipcartReady: true,
        user: window.Snipcart.api.user.current(),
        cart: window.Snipcart.api.cart.get()
      });
    });
  };

  handleProductClick = e => {
    const { productsQueue } = this.state;
    if (!e.target.classList.contains("snipcart-add-item") || this.isSnipcartLoaded()) {
      return;
    }
    const item = JSON.parse(e.target.getAttribute("data-snip-def"));
    console.log("Queuing clicked item", item);
    this.setState({ productsQueue: [...productsQueue, item] });
  };

  handleItemAdding = (e, item) => {
    const { productsQueue } = this.state;
    if (window.navigator.onLine) {
      return;
    }
    e.preventDefault();
    console.log("Queuing item from snip event", item);
    this.setState({ productsQueue: [...productsQueue, item] });
  };

  updateScripts = () => {
    console.log("update script");
    if (!window.navigator.onLine) {
      return;
    }
    if (!this.state.cssLoaded && !this.state.cssLoading) {
      this.loadSnipCss();
    }
    const jQueryLoaded = !!(typeof window.$ == "function" && window.$.fn && window.$.fn.jquery);
    if (!jQueryLoaded) {
      return this.loadjQuery().then(this.updateScripts);
    }
    if (!this.isSnipcartLoaded()) {
      return this.loadSnipJs().then(this.updateScripts);
    }
    if (this.state.isSnipcartReady) {
      this.dequeueProducts();
    }
  };

  dequeueProducts = () => {
    window.Snipcart.api.cart.start().then(() => {
      console.log("Dequeueing products", this.state.productsQueue);
      if (this.state.productsQueue.length > 0) {
        window.Snipcart.api.items.add(this.state.productsQueue);
        this.setState({ productsQueue: [] });
      }
    });
  };

  isSnipcartLoaded = () => !!window.Snipcart;

  loadjQuery = () =>
    this.addElem("script", {
      async: true,
      src: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"
    });

  loadSnipJs = () =>
    this.addElem("script", {
      async: true,
      id: "snipcart",
      src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js",
      "data-api-key": process.env.GATSBY_SNIPCART_API_KEY
    });

  loadLangJs = () =>
    this.addElem("script", {
      src: withPrefix("fr-FR.js")
    });

  loadSnipCss = () => {
    this.setState({ cssLoading: true });
    return this.addElem("link", {
      async: true,
      type: "text/css",
      rel: "stylesheet",
      href: "https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
    })
      .then(() => this.setState({ cssLoaded: true }))
      .finally(() => this.setState({ cssLoading: false }));
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
