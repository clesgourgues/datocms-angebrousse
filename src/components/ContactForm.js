import React, { useState, useEffect } from "react";

const ContactForm = ({ text }) => {
  let [email, setEmail] = useState("");

  useEffect(() => {
    document.addEventListener("snipcart.ready", () => {
      const user = window.Snipcart.api.user.current();
      if (user) {
        setEmail(user.email);
      }
    });
  }, []);

  const handleChange = event => {
    setEmail(event.target.value);
  };

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
        placeholder={text.emailPlaceholderText}
        required
        type="email"
        maxLength="100"
        value={email}
        onChange={handleChange}
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
};

export default ContactForm;
