import React, { Component } from 'react';
import { withPrefix } from 'gatsby';

const defaultState = {
  user: null,
  cart: null,
  error: null,
  selectedCollection: null,
  selectedFilters: null
};

const AppContext = React.createContext(defaultState);

class AppProvider extends Component {
  state = {
    cart: null,
    user: null,
    error: null,
    selectedCollection: null,
    selectedFilters: null
  };

  componentDidMount() {
    document.addEventListener('snipcart.ready', this.snipcartReady);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.setLang();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('snipcart.ready', this.snipcartReady);
  }

  snipcartReady = () => {
    this.setLang();
    window.Snipcart.execute('config', 'show_continue_shopping', true);
    window.Snipcart.api.configure('split_firstname_and_lastname', true);
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

  loadLangJs = async locale =>
    await this.addElem('script', {
      src: withPrefix(`${locale}.js`)
    });

  setLang = async () => {
    window.Snipcart.setLang(this.props.locale === 'fr' ? 'fr-FR' : this.props.locale);
    await this.loadLangJs(this.props.locale);
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

  updateSelectedFilters = selectedFilters => {
    this.setState({ selectedFilters });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          cancelError: this.cancelError,
          updateSelectedCollection: this.updateSelectedCollection,
          updateSelectedFilters: this.updateSelectedFilters
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;
export { AppProvider };
