import React from 'react';
import './Footer.css';
import  Logo from "./images/image.png"

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="fig">
          <img src={Logo} className="s6" alt="Logo" />
        </div>
        <div className="footer-column">
          <h2>Product</h2>
          <p>Pricing</p>
          <p>Overview</p>
          <p>Browse</p>
          <p>Accessibility</p>
          <p>Five</p>
        </div>
        <div className="footer-column">
          <h2>
            <i className="fa-solid fa-globe"></i> Solution
            <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i>
          </h2>
          <p>Brainstorming</p>
          <p>Ideation</p>
          <p>Wireframing</p>
          <p>Research</p>
        </div>
        <div className="footer-column">
          <h2>Resources</h2>
          <p>Help Center</p>
          <p>Blog</p>
          <p>Tutorials</p>
        </div>
        <div className="footer-column">
          <h2>Company</h2>
          <p>About</p>
          <p>Press</p>
          <p>Events</p>
          <p>Careers</p>
        </div>
      </div>
      <hr />
      <div>
        <p className="footer">
          @ 2023 Protech, Inc, All Rights Reserved
          <span className="i">
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </span>
        </p>
        <p className="footer1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          nostrum quasi consequuntur earum expedita voluptates quidem explicabo
          odit suscipit doloribus, error quibusdam perferendis delectus vero
          minus aspernatur. Ipsa, eligendi vel!
        </p>
      </div>
    </footer>
  );
}

export default Footer;
