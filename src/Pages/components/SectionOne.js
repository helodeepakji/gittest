
import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css"; 

const SectionOne = () => {
  return (
    <section className="sec-1">
      

      <header className="headlines">
        <h1>
          Advertise <span className="span">Your Brand</span> on{" "}
          <span className="span">Everyday</span> Essentials!
        </h1>
        <p>
          Reach your target audience with eye-catching designs on disposables that stand out. 
          Transform ordinary cups, bottles, and plates into powerful marketing tools that leave a lasting impression.
        </p>
        <NavLink to="/join">
          <button>Join Now</button>
        </NavLink>
      </header>
      
      <img src="/images/Vector 32 (1).png" className="vector" alt="Vector" />
      <img src="/images/Hero section Image.png" className="img" alt="Hero Section" />
    </section>
  );
};

export default SectionOne;



