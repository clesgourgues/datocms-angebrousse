import React from "react";
import useForm from "react-hook-form";

const ContactForm = ({ text, user }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, errors) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      action="/success"
      className="Contact__form"
      onSubmit={handleSubmit(onSubmit)}
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
      <div className="Contact__form__error">{errors && errors.email && "Please enter a value"}</div>
      <textarea
        name="message"
        className="Contact__form__text"
        placeholder={text.messagePlaceholderText}
        ref={register({ required: true, maxlength: 1500 })}
      />
      <div className="Contact__form__error">
        {errors && errors.message && "Please enter a value"}
      </div>
      <button type="submit" className="Contact__form__button">
        {text.sendButtonText}
      </button>
    </form>
  );
};

export default ContactForm;
