import { Component } from "react";
import { withPrefix } from "gatsby";

class Snipcart extends Component {
  componentDidMount() {
    this.productsQueue = [];
    this.isSnipcartReady = false;
    this.cssLoading = false;
    this.cssLoaded = false;
    this.eventSubscribed = false;

    window.addEventListener("online", this.updateScripts);
    document.body.addEventListener("click", this.handleProductClick);
    document.addEventListener("snipcart.ready", this.snipcartReady);

    this.updateScripts();
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.updateScripts);
    document.body.removeEventListener("click", this.handleProductClick);
    document.removeEventListener("snipcart.ready", this.snipcartReady);
  }

  handleProductClick = e => {
    if (!e.target.classList.contains("snipcart-add-item") || this.isSnipcartLoaded()) {
      return;
    }
    const item = JSON.parse(e.target.getAttribute("data-snip-def"));
    console.log("Queuing clicked item", item);
    this.productsQueue.push(item);
  };

  handleItemAdding = (ev, item) => {
    if (window.navigator.onLine) {
      return;
    }
    ev.preventDefault();
    console.log("Queuing item from snip event", item);
    this.productsQueue.push(item);
  };

  handleItemChange = () => {
    this.props.updateCart();
  };

  snipcartReady = () => {
    console.log("Snipcart finished loading");
    this.loadLangJs().then(() => {
      window.Snipcart.subscribe("item.adding", this.handleItemAdding);
      window.Snipcart.subscribe("item.added", this.handleItemChange);
      window.Snipcart.subscribe("item.removed", this.handleItemChange);
      window.Snipcart.subscribe("item.updated", this.handleItemChange);
      this.isSnipcartReady = true;
      this.dequeueProducts();
    });
  };
  updateScripts = () => {
    if (!window.navigator.onLine) {
      return;
    }

    if (!this.cssLoaded && !this.cssLoading) {
      this.loadSnipCss();
    }

    var jQueryLoaded = !!(typeof window.$ == "function" && window.$.fn && window.$.fn.jquery);
    if (!jQueryLoaded) {
      return this.loadjQuery().then(this.updateScripts);
    }

    if (!this.isSnipcartLoaded()) {
      return this.loadSnipJs().then(this.updateScripts);
    }

    if (this.isSnipcartReady) {
      this.dequeueProducts();
    }
  };
  dequeueProducts = () => {
    window.Snipcart.api.cart.start().then(() => {
      console.log("Dequeueing products", this.productsQueue);
      if (this.productsQueue.length > 0) {
        window.Snipcart.api.items.add(this.productsQueue);
        this.productsQueue = [];
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
    this.cssLoading = true;
    return this.addElem("link", {
      async: true,
      type: "text/css",
      rel: "stylesheet",
      href: "https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
    })
      .then(() => (this.cssLoaded = true))
      .finally(() => (this.cssLoading = false));
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
  render() {
    return null;
  }
}

export default Snipcart;
