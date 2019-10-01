import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    document.addEventListener("snipcart.ready", () => {
      const user = window.Snipcart.api.user.current();
      console.log("user", user);
      this.setState({ user });
    });
  }

  render() {
    const { user } = this.state;
    const { text } = this.props;
    return (
      <div className="Contact">
        <div className="Wrap">
          <form
            name="contact"
            method="POST"
            data-netlify-recaptcha="true"
            data-netlify="true"
            action="/success"
            className="Contact__form"
          >
            <input
              className="Contact__form__input"
              name="email"
              placeholder={text.contactText}
              required
              type="email"
              maxLength="100"
              value={user ? user.email : ""}
            />
            <textarea
              name="message"
              className="Contact__form__text"
              placeholder={text.messageText}
              required
              maxLength="1000"
            ></textarea>

            <div data-netlify-recaptcha="true"></div>
            <button type="submit" className="Contact__form__button">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
