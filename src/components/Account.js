import React, { useState, useEffect } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { FaEnvelope } from "react-icons/fa";

const Account = ({ buttonText, user, title }) => {
  return (
    <div className="Account">
      <div id="snipcart-login-form-container" className="snip-col snip-col--half">
        <h2 className="snip-static__title">Sign in</h2>
        <form className="snip-static__content">
          <div data-for="email" className="snip-form__container snip-form__container--input">
            <label for="snipcart-login-email" className="snip-form__label">
              Email
            </label>
            <input type="text" name="email" id="snipcart-login-email" />
          </div>
          <div data-for="password" className="snip-form__container snip-form__container--input">
            <label for="snipcart-login-password" className="snip-form__label">
              Password
            </label>
            <input type="password" name="password" id="snipcart-login-password" />
          </div>
          <a href="#" id="snipcart-login-forgotpassword-link" className="snip-static__link">
            I forgot my password
          </a>
          <a href="#" id="snipcart-login-submit" className="snip-btn snip-btn--full">
            Log in
          </a>
          <button type="submit"></button>
        </form>
      </div>
      <div id="snipcart-newaccount-form-container" className="snip-col snip-col--half">
        <h2 className="snip-static__title">Create a login</h2>
        <form className="snip-static__content">
          <div data-for="email" className="snip-form__container snip-form__container--input">
            <label for="snipcart-newaccount-email" className="snip-form__label">
              Email
            </label>
            <input type="text" name="email" id="snipcart-newaccount-email" autocomplete="off" />
          </div>
          <div data-for="password" className="snip-form__container snip-form__container--input">
            <label for="snipcart-newaccount-password" className="snip-form__label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="snipcart-newaccount-password"
              autocomplete="off"
            />
          </div>
          <div data-for="confirm" className="snip-form__container snip-form__container--input">
            <label for="snipcart-newaccount-confirm" className="snip-form__label">
              Confirm password
            </label>
            <input
              type="password"
              name="confirm"
              id="snipcart-newaccount-confirm"
              autocomplete="off"
            />
          </div>
          <a id="snipcart-newaccount-submit" className="snip-btn snip-btn--full">
            Create a login
          </a>
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
};

export default Account;
