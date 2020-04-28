import React, { Component } from 'react';
import { withPrefix } from 'gatsby';

const defaultState = {
  user: null,
  cart: null,
  error: null,
  selectedCollection: null
};

const SnipContext = React.createContext(defaultState);

class SnipProvider extends Component {
  state = {
    cart: null,
    user: null,
    error: null,
    selectedCollection: null
  };

  componentDidMount() {
    document.addEventListener('snipcart.ready', this.snipcartReady);
  }

  componentWillUnmount() {
    document.removeEventListener('snipcart.ready', this.snipcartReady);
  }

  snipcartReady = async () => {
    await this.loadLangJs();
    window.Snipcart.execute('config', 'show_continue_shopping', true);
    window.Snipcart.api.configure('split_firstname_and_lastname', true);
    const title = document.querySelector('#snipcart-title');
    title.setAttribute('style', `background-color: ${this.props.titleColor}`);
    this.setState({
      user: window.Snipcart.api.user.current(),
      cart: window.Snipcart.api.cart.get()
    });
    window.Snipcart.subscribe('item.added', this.updateCart);
    window.Snipcart.subscribe('item.removed', this.updateCart);
    window.Snipcart.subscribe('user.loggedout', this.updateAll);
    window.Snipcart.subscribe('authentication.success', this.updateAll);
    window.Snipcart.subscribe('item.adding', this.updateError);
  };

  loadLangJs = async () =>
    await this.addElem('script', {
      src: withPrefix('fr-FR.js')
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

  updateAll = () => {
    this.updateCart();
    this.updateUser();
  };

  updateCart = () => {
    this.setState({ cart: window.Snipcart.api.cart.get() });
  };

  updateUser = () => {
    this.setState({ user: window.Snipcart.api.user.current() });
  };

  updateError = (ev, item) => {
    if (item.customFields.length > 0) {
      if (item.customFields[0].value === '') {
        ev.preventDefault();
        this.setState({ error: true });
      } else {
        this.setState({ error: false });
      }
    }
  };

  cancelError = () => this.setState({ error: false });

  updateSelectedCollection = selectedCollection => {
    this.setState({ selectedCollection });
  };

  render() {
    return (
      <SnipContext.Provider
        value={{
          ...this.state,
          cancelError: this.cancelError,
          updateSelectedCollection: this.updateSelectedCollection
        }}
      >
        {this.props.children}
      </SnipContext.Provider>
    );
  }
}

export default SnipContext;
export { SnipProvider };
