import React from "react";

const ContactForm = () => (
  <div className="Wrap">
    <form
      name="contact"
      method="POST"
      data-netlify-recaptcha="true"
      data-netlify="true"
      action="/success"
    >
      <p>
        <label>
          Email: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <div data-netlify-recaptcha="true"></div>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
);

export default ContactForm;
