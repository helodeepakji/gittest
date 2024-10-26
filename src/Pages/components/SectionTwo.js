import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css'; 

const SectionTwo = () => {
  return (
    <div>
      <img src="/images/Group.png" className="circle" alt="circle" />

      <section className="sec-2">
        <figure className="figure">
          <div className="fig">
            <img src="/images/Rectangle 43.png" className="fig1" alt="Rectangle" />
            <img src="/images/Content Box.png" className="fig2" alt="Content Box" />
            <img src="/images/image (1).png" className="fig3" alt="Another image" />
          </div>
          <div className="figa">
            <img src="/images/image.png" className="fig4" alt="Image" />
            <img src="/images/Frame 56.png" className="fig5" alt="Frame" />
          </div>
        </figure>
        
        <aside className="aside">
          <h3>The Process</h3>
          <h1>
            <span className="spanhead">Business Users</span> Post Their Requirements:
          </h1>
          <div className="d2">
            <h2 className="number n1">
              <span className="s3">1</span>
            </h2>
            <p className="d6">
              Sign up as a business user and share your brand's message, LOGO, and design preferences.
            </p>
          </div>

          <div className="d4">
            <h2 className="number d8">
              <span className="n2">2</span>
            </h2>
            <p className="d6">
              Our platform connects you with talented designers who will create stunning ad concepts tailored to your brand.
            </p>
          </div>

          <NavLink to="/join">
            <button>
              Join now <i className="fa-solid fa-arrow-right"></i>
            </button>
          </NavLink>
        </aside>
      </section>
    </div>
  );
};

export default SectionTwo;


