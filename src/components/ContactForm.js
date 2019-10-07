import React, { useState, useEffect } from "react";

const ContactForm = ({ text, user }) => {
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  useEffect(() => {
    const userEmail = user ? user.email : "";
    setEmail(userEmail);
  }, [user]);

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleMessageChange = event => {
    setMessage(event.target.value);
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
        onChange={handleEmailChange}
      />
      <textarea
        name="message"
        className="Contact__form__text"
        placeholder={text.messagePlaceholderText}
        required
        maxLength="1000"
        value={message}
        onChange={handleMessageChange}
      />
      <div data-netlify-recaptcha="true"></div>
      <button type="submit" className="Contact__form__button">
        {text.sendButtonText}
      </button>
    </form>
  );
};

export default ContactForm;
