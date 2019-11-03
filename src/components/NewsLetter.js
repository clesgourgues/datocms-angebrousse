import React, { useState, useEffect } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { FaRegEnvelope } from "react-icons/fa";

const NewsLetter = ({ user, title, isHome }) => {
  let [email, setEmail] = useState("");
  let [result, setResult] = useState(null);

  useEffect(() => {
    const userEmail = user ? user.email : "";
    setEmail(userEmail);
  }, [user]);

  const handleChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await addToMailchimp(email);
    setResult(result);
  };

  return (
    <div className="Newsletter">
      <div className="Footer__title">
        {!isHome && <FaRegEnvelope size={20} className="far" />}
        <span>{title}</span>
      </div>
      {result ? (
        <div>{result.msg}</div>
      ) : (
        <form name="Newsletter" onSubmit={handleSubmit} className="Newsletter__form">
          <input type="hidden" name="form-name" value="Newsletter" />
          <input
            className={`Newsletter__form__input ${isHome && "Newsletter__form__input__home"}`}
            name="email"
            placeholder="email"
            required
            type="email"
            maxLength="150"
            value={email}
            onChange={handleChange}
          />
          <input
            value="OK"
            type="submit"
            className={`Newsletter__form__button ${isHome && "Newsletter__form__button__home"}`}
          />
        </form>
      )}
    </div>
  );
};

export default NewsLetter;
