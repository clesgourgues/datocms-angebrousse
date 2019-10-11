import React, { useState, useEffect } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

const NewsLetter = ({ buttonText, user }) => {
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
    console.log(result);
  };

  return (
    <div className="Newsletter">
      {result ? (
        <div>{result.msg}</div>
      ) : (
        <form name="Newsletter" onSubmit={() => handleSubmit(email)} className="Newsletter__form">
          <input type="hidden" name="form-name" value="Newsletter" />
          <input
            className="Newsletter__form__input"
            name="email"
            placeholder="email"
            required
            type="email"
            maxLength="150"
            value={email}
            onChange={handleChange}
          />
          <button type="submit" className="Newsletter__form__button">
            {buttonText}
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsLetter;
