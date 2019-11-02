import React from "react";
import useForm from "react-hook-form";

const ContactForm = ({ text, user }) => {
  const { register, errors } = useForm();

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
        ref={register({ required: true, maxlength: 20 })}
      />
      <div className="Contact__form__error">
        {errors && errors.email && "Merci de saisir votre email"}
      </div>
      <textarea
        name="message"
        className="Contact__form__text"
        placeholder={text.messagePlaceholderText}
        ref={register({ required: true, maxlength: 1500 })}
      />
      <div className="Contact__form__error">
        {errors && errors.message && "Merci de saisir votre message"}
      </div>
      <input tclassName="Contact__form__button" value={text.sendButtonText} />
    </form>
  );
};

export default ContactForm;
