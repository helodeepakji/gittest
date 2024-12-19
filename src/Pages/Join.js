import React from "react";
import { NavLink } from "react-router-dom";
import Feq from "./Feq";
import './Join.css';

const Join = () => {
    return(
  <div className="container proceed_section">
    <section className="sec_1">
      <center>
        <img src="/images/pic1.png"/>
      </center>
      <h1>
        "Choose <span className="span">Your Role</span> and Get Started"
      </h1>
      <img src="/images/pic2.png" />
      <img src="/images/pic3.png" className="img" />
    </section>

    <section className="sec-2">
      <article className="article">
        <img src="/images/pic4.png" />
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
        <NavLink to="/signup/business">
          <button>
            Proceed <i className="fa-solid fa-right-long"></i>
          </button>
        </NavLink>
      </article>
      <article className="article">
        <img src="/images/pic5.png" />
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
        <NavLink to="/signup/designer">
          <button>
            Proceed <i className="fa-solid fa-right-long"></i>
          </button>
        </NavLink>
      </article>
      <article className="article">
        <img src="/images/pic6.png" />
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
        <NavLink to="/signup/retailer">
          <button>
            Proceed <i className="fa-solid fa-right-long"></i>
          </button>
        </NavLink>
      </article>
    </section>
    <img src="/images/pic7.png" className="pic7" />

    <section className="proceed_section sec-3">
        <div>
            <div className="sec-3_upper">
                <img src="/images/pic8.png" className="fig-img1"/>
                <img src="/images/pic9.png" className="fig-img2"/>
                <div className="text">
                <h1>Easily grow your <span className="span1">brand</span></h1>
                <p>Lorem ipsum dolor sit amet,consectetur adispiscing elit,<br/>
                sed do eiusmod tempor incididunt ut labore et dolore<br/> magna aliqua.</p>
                </div>
                <img src="/images/pic10.png" className="fig-img3"/>
                <img src="/images/pic11.png" className="fig-img4"/>

            </div>
            <div className="sec-3_upper">
                <img src="/images/pic12.png" className="pic12"/>
                <div className="add_box">
                    <h1>Advertisement</h1>
                    <p className="p">Lorem ipsum dolor sit amet,consectetur adispiscing elit,<br/>
                    sed do eiusmod tempor incididunt ut labore et dolore<br/> magna aliqua.</p>
                    <a href="#"><button>Learn More</button></a>
                </div>
                <img src="/images/pic13.png" className="pic13"/>
                <div className="add_box2">
                    <h1>Branding</h1>
                    <p className="p">Lorem ipsum dolor sit amet,consectetur adispiscing elit,<br/>
                    sed do eiusmod tempor incididunt ut labore et dolore<br/> magna aliqua.</p>
                    <a href="#"><button>Learn More</button></a>
                </div>
                <img src="/images/pic13.png" className="pic13a"/>
                

            </div>
        </div>
    
    </section>

    <img src="/images/pic14.png" className="circle-img" />
    <Feq />

  </div>
    );
  };


export default Join;
