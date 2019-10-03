import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    email: ""
  };

  componentDidMount() {
    document.addEventListener("snipcart.ready", () => {
      const user = window.Snipcart.api.user.current();
      if (user) {
        this.setState({ email: user.email });
      }
    });
  }

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    const { email } = this.state;
    const { text } = this.props;
    return (
      <form
        name="contact"
        method="POST"
        data-netlify-recaptcha="true"
        data-netlify="true"
        action="/success"
        className="Contact__form"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          className="Contact__form__input"
          name="email"
          placeholder={text.messagePlaceholderText}
          required
          type="email"
          maxLength="100"
          value={email}
          onChange={this.handleChange}
        />
        <textarea
          name="message"
          className="Contact__form__text"
          placeholder={text.messagePlaceholderText}
          required
          maxLength="1000"
        />
        <div data-netlify-recaptcha="true"></div>
        <button type="submit" className="Contact__form__button">
          {text.sendButtonText}
        </button>
      </form>
    );
  }
}

export default ContactForm;
