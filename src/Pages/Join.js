import React from "react";
import { NavLink } from "react-router-dom";
import Feq from "./Feq";
import './Join.css';

const Join = () => {
    return(
  <div className="container proceed_section">
    <section className="sec-1">
      <center>
        <i className="fa-solid fa-angle-right">
          <i className="fa-solid fa-angle-right">
            <i className="fa-solid fa-angle-right"></i>
          </i>
        </i>
      </center>
      <h1>
        "Choose <span className="span">Your Role</span> and Get Started"
      </h1>
      <img src="pic2.png" />
      <img src="pic3.png" className="img" />
    </section>

    <section className="sec-2">
      <article className="article">
        <img src="pic4.png" />
        <h3>Business</h3>
        <p>Advertise your brand on Everyday disposables</p>
        <ul>
          <li>Post your advertisement requirements</li>
          <li>Upload your brand logo, identity, and tagline</li>
          <li>Get Multiple design options from talented designers</li>
          <li>Choose the best ad design that fits your brand</li>
          <li>Track your order status from design to delivery</li>
          <li>Manage your budget and payment via wallet section</li>
        </ul>
        <h5>Select and Proceed as Business User </h5>
        <a href="#">
          <button>
            Proceed <i className="fa-solid fa-right-long"></i>
          </button>
        </a>
      </article>
      <article className="article">
        <img src="pic5.png" />
        <h3>Designer</h3>
        <p>Create an eye-catching designs for top brands</p>
        <ul>
          <li>Access advertisement briefs posted by Business Users</li>
          <li>Showcase your creativity by submitting unique ad designs</li>
          <li>Earn money for every selected by Business Users</li>
          <li>Collaborate with various brands and expand your portfolio</li>
          <li>Easy-to-use design submission and feedback system</li>
          <li>Track your earnings in the wallet section</li>
        </ul>
        <h5>Select and Proceed as Designer</h5>
        <a href="#">
          <button>
            Proceed <i className="fa-solid fa-right-long"></i>
          </button>
        </a>
      </article>
      <article className="article">
        <img src="pic6.png" />
        <h3>Retailer</h3>
        <p>Print and deliver ads on a variety of disposables</p>
        <ul>
          <li>access design files selected by business users</li>
          <li>print advertisement on cups,bottles, plates, and more</li>
          <li>manage orders efficiently with an ease-to-follow dashboard</li>
          <li>ensure high-quality printing and timely delivery</li>
          <li>earn for every successful advertisement production</li>
          <li>Track payments through the wallet section</li>
        </ul>
        <h5>Select and Proceed as Retailer</h5>
        <a href="#">
          <button>
            Proceed <i className="fa-solid fa-right-long"></i>
          </button>
        </a>
      </article>
    </section>
    <img src="pic7.png" className="pic7" />

    <section className="sec-3">
      <figure className="figure">
        <img src="pic8.png" className="fig-img1" />
        <img src="pic9.png" className="fig-img2" />
        <aside className="figcaption">
          <h1>
            Easily grow your <span className="h1">brand</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet,consectetur adispiscing elit,
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore
            <br /> magna aliqua.
          </p>
        </aside>
        <img src="pic10.png" className="fig-img3" />
        <img src="pic11.png" className="fig-img4" />
      </figure>
      <figcaption className="figure">
        <div className="figcaption-box">
          <h1>Advertisement</h1>
          <p>
            Lorem ipsum dolor sit amet,consectetur adispiscing elit,
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore
            <br /> magna aliqua.
          </p>
          <a href="#">
            <button>Learn More</button>
          </a>
        </div>
        <img src="pic13.png" className="pic13" />
        <div className="figcaption-box2">
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet,consectetur adispiscing elit,
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore
            <br /> magna aliqua.
          </p>
          <a href="#">
            <button>Learn More</button>
          </a>
        </div>
        <img src="pic12.png" className="pic12" />
        <img src="pic13.png" className="pi13" />
      </figcaption>
    </section>

    <img src="pic14.png" className="circle-img" />
    <Feq />

  </div>
    );
  };


export default Join;
