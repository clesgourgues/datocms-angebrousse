import React from "react";
import { Helmet } from "react-helmet";

import ContactForm from "@components/ContactForm";

const Contact = ({ text, user }) => {
  console.log(text);
  return (
    <div className="Contact">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="Wrap">
        <div lassName="Contact__mail">
          <h2 className="Title">{text.title}</h2>
          <div className="Subtitle">{text.mailText}</div>
          <div className="Contact__paraph">
            {text.mail.map((item, index) => (
              <div key={`item-${index}`}>
                <div className="Contact__paraph__title">{item.title}</div>
                <div>{item.content}</div>
              </div>
            ))}
          </div>
        </div>
        <ContactForm text={text} user={user} />
        <div className="Subtitle">{text.phone[0].title}</div>
        <div className="Contact__paraph">{text.phone[0].content}</div>
        <div className="Subtitle">{text.address[0].title}</div>
        <div className="Contact__paraph">{text.address[0].content}</div>
      </div>
    </div>
  );
};

export default Contact;
