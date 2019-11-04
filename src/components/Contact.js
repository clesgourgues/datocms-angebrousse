import React from "react";
import { Helmet } from "react-helmet";
import Img from "gatsby-image";

import ContactForm from "@components/ContactForm";

const Contact = ({ text, user }) => (
  <div className="Contact">
    <Helmet>
      <title>{text.title}</title>
    </Helmet>
    <div className="Wrap">
      <h2 className="Title">{text.title}</h2>
      <div className="Contact__intro">
        {text.image && (
          <div className="Contact__image">
            <Img fluid={text.image.fluid} loading="lazy" />
          </div>
        )}
        <div className="Contact__mail">
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
      </div>
      <ContactForm text={text} user={user} />
      {text.phone &&  text.phone[0] && (
        <>
          <div className="Subtitle">{text.phone[0].title}</div>
          <div className="Contact__paraph">{text.phone[0].content}</div>
        </>
      )}
      {text.address &&  text.address[0] && (
        <>
          <div className="Subtitle">{text.address[0].title}</div>
          <div className="Contact__paraph">{text.address[0].content}</div>
        </>
      )}
    </div>
  </div>
);

export default Contact;
