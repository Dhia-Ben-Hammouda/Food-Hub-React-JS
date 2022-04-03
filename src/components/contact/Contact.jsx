import React from "react";
import { useState } from "react";
import img from "./envelope.png";

const Contact = () => {

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Msg, setMsg] = useState("");

  return (
    <section id="contact">
      <img src={img} />
      <div className="contact-container">
        <h1>Contact us</h1>
        <form id="contact-form" method="POST">
          <input
            placeholder="Enter Name..."
            name="name"
            type="text"
            spellCheck="false"
            autoComplete="off"
            onChange={(e) => { setName(e.target.value) }}
          />
          <input
            placeholder="Enter Email..."
            name="email"
            type="email"
            spellCheck="false"
            autoComplete="off"
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <input
            placeholder="Enter Msg..."
            name="msg"
            type="text"
            spellCheck="false"
            autoComplete="off"
            id="msg"
            style={ {hzight:"200px"} }
            onChange={(e) => { setMsg(e.target.value) }}
          />
          
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;