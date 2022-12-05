import React from "react";
import { useState } from "react";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function Contact() {
  const [error, setError] = useState();

  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    if (nameValue) {
      setError();
    } else {
      setError("name is required");
    }
  };
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    if (emailValue) {
      //use regex to validate email
      if (validateEmail(emailValue)) {
        setError();
      } else {
        setError("your email is invalid");
      }
    } else {
      setError("email is required");
    }
  };
  const handleMessageChange = (e) => {
    const messageValue = e.target.value;
    if (messageValue) {
      setError();
    } else {
      setError("message is required");
    }
  };
  return (
    <div className="text-left">
      <h4>Contact</h4>
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Name:</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your full name"
            onBlur={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your email address"
            onBlur={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Message:</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter your message here"
            onBlur={handleMessageChange}
          ></textarea>
        </div>
        {error ? <div>{error}</div> : null}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
