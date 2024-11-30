import React from "react";
import "./Contactpage.css";
import Nice from "./images/nice.jpg"

const Contactpage = () => {
  return (
    <div className="section">
      <div class="contact ">
        <div class="my-id">
          <h1>Contact Us</h1>
          <input type="text" name="name" placeholder="Name" className="input" />
          <br />
          <input type="text" name="email" placeholder="Email" className="input" />
          <br />
          <input type="text" name="Phone" placeholder="Phone" className="input" />
          <br />
          <input type="text" name="Purpose" placeholder="Purpose" className="input" />
          <br />
          <button className="send">Send</button>
        </div>
        <div class="one">
          <img src={Nice}  />
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
