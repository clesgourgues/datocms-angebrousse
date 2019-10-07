import React, { useState, useEffect } from "react";

const NewsLetter = ({ buttonText, user }) => {
  let [email, setEmail] = useState("");

  useEffect(() => {
    const userEmail = user ? user.email : "";
    setEmail(userEmail);
  }, [user]);

  const handleChange = event => {
    setEmail(event.target.value);
  };

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
          onChange={handleChange}
        />
        <div data-netlify-recaptcha="true"></div>
        <button type="submit" className="Newsletter__form__button">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
