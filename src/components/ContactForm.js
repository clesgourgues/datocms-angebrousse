import React from "react";

const ContactForm = ({ text, user }) => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      action="/success"
      className="Contact__form"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <input
        className="Contact__form__input"
        name="email"
        placeholder={text.emailPlaceholderText}
        type="email"
        defaultValue={user ? user.email : ""}
        required
        maxLength="50"
      />
      <textarea
        name="message"
        className="Contact__form__text"
        placeholder={text.messagePlaceholderText}
        required
        maxLength="500"
      />
      <input type="submit" className="Contact__form__button" value={text.sendButtonText} />
    </form>
  );
};

export default ContactForm;
