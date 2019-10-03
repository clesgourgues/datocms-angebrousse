import React, { Component } from "react";

class NewsLetter extends Component {
  state = {
    email: ""
  };

  componentDidMount() {
    document.addEventListener("snipcart.ready", () => {
      const user = window.Snipcart.api.user.current();
      this.setState({ user });
    });
  }

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    const { email } = this.state;
    const { buttonText } = this.props;
    return (
      <div className="Newsletter">
        <form
          name="Newsletter"
          method="POST"
          data-netlify-recaptcha="true"
          data-netlify="true"
          className="Newsletter__form"
        >
          <input type="hidden" name="form-name" value="Newsletter" />
          <input
            className="Newsletter__form__input"
            name="email"
            placeholder="email"
            required
            type="email"
            maxLength="100"
            value={email}
            onChange={this.handleChange}
          />
          <div data-netlify-recaptcha="true"></div>
          <button type="submit" className="Newsletter__form__button">
            {buttonText}
          </button>
        </form>
      </div>
    );
  }
}

export default NewsLetter;
