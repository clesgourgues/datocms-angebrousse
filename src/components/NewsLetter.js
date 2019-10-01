import React, { Component } from "react";

class NewsLetter extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    document.addEventListener("snipcart.ready", () => {
      const user = window.Snipcart.api.user.current();
      this.setState({ user });
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="Newsletter">
        <form
          name="newsletter"
          method="POST"
          data-netlify-recaptcha="true"
          data-netlify="true"
          className="Newsletter__form"
        >
          <input
            className="Newsletter__form__input"
            name="email"
            placeholder="email"
            required
            type="email"
            maxLength="100"
            value={user ? user.email : ""}
          />
          <div data-netlify-recaptcha="true"></div>
          <button type="submit" className="Newsletter__form__button">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default NewsLetter;
