import React from 'react';
import { NavLink } from "react-router-dom";
import './Home.css';
import Feq from './Feq';
import One from "./Assests/One.png"
import Two from "./Assests/Two.png"
import Circle from "./Assests/Circle.png"
import Circle2 from "./Assests/Circle2.png"

const Home = () => {
  return (
    <div>
      <div>
        <section className="sec-1">


          <h1>

            <span className="h1span">Advertise</span> Your Brand <span className="h1span">on</span> Everyday <br /><span className="h1span">Essentials!</span>
          </h1>
          <p>Reach Your Target Audience with eye-catching designs on disposables that stand out.
            Transform ordinary cups, bottles, and plates into powerful marketing tools that leave a lasting impression.
          </p>
          <NavLink to="/join">
            <button className='but'>Join Now</button>
          </NavLink>
          <figure>
            <img src="/images/Vector 32 (1).png" />
          </figure>


        </section>
        <figure>
          <img src="/images/Hero section Image.png" className="hero" alt="image 5" />
        </figure>

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
              <img src={One} className='num1' /><img src={Circle} className='circle1' />
              <p className="d6">
                Sign up as a business user and share your brand's message, LOGO, and design preferences.
              </p>
            </div>

            <div className="d4">
              <img src={Two} className='num1' /><img src={Circle2} className='circle1' />
              <p className="d6" >
                Our platform connects you with talented designers who will create stunning ad concepts tailored to your brand.
              </p>
            </div>

            <NavLink to="/join">
              <button>Join now</button>
            </NavLink>
          </aside>
        </section>
      </div>
      <section className="sec-4">
        <figure className="figure1">
          <img src="/images/Rectangle 30.png" className="img1" alt="Design Image 1" />
          <img src="/images/Rectangle 26.png" className="img2" alt="Design Image 2" />
          <img src="/images/image (5).png" className="img3" alt="Design Image 3" />
          <img src="/images/image (6).png" className="img4" alt="Design Image 4" />
          <img src="/images/image (7).png" className="img5" alt="Design Image 5" />
        </figure>

        <aside className="aside d9">
          <h3>CREATIVITY <i className="fa-regular fa-comment-dots"></i></h3>
          <h1>
            <span className="spanhead">Designers</span> Bring Your Vision to Life:
          </h1>

          <div className="d2">
            <img src={One} className='num1' /><img src={Circle}className='circle1' />
            <p className="d3">
              Designers receive your brief and create eye-catching advertisements that match your requirements.
            </p>
          </div>

          <div className="d4">
            <img src={Two} className='num1' /><img src={Circle2} className='circle1' />
            <p className="d6">
              Once the designs are ready, Business Users can browse and select their favorite concept.
            </p>
          </div>

          <NavLink to="/join">
            <button >
              Join now
            </button>
          </NavLink>
        </aside>
      </section>
      <section className="sec-3">
        <figure className="figure1">
          <img src="/images/Rectangle 47.png" className="figure-img2" alt="Retail Image 1" />
          <img src="/images/image 5 (1).png" className="figure-img3" alt="Retail Image 2" />
        </figure>

        <aside className="aside d7">
          <h3>THE FINAL TOUCH</h3>
          <h1>
            <span className="spanhead">Retailers</span> Make it Real
          </h1>

          <div className="d2">
            <img src={One} className='num1' /><img src={Circle} className='circle1' />
            <p style={{ marginLeft: '30px' }}>
              The selected design is sent directly to our retailers, who print your advertisement
              on cups, water bottles, plates, or any other disposables.
            </p>
          </div>

          <div style={{ display: 'flex', paddingTop: '30px' }}>
            <img src={Two} className='num1' /><img src={Circle2} className='circle1' />
            <p style={{ marginLeft: '15px' }}>
              Your custom-printed products are ready to be distributed, ensuring your brand reaches
              a wider audience in a unique and memorable way.
            </p>
          </div>

          <NavLink to="/join">
            <button className='lstbtn'>
              Join now
            </button>
          </NavLink>
        </aside>
      </section>
      <section className="sec-5">
        <div className="menu">
          <i className="fa-solid fa-stopwatch"></i>
          <h5>Time Period</h5>
          <p>
            Dui Consectetur gravida platea ut dis
            <br /> diam. Enim morbi proin auctor yet.
          </p>
        </div>

        <div className="menu">
          <i className="fa-solid fa-users"></i>
          <h5>Employee</h5>
          <p>
            Dui Consectetur gravida platea ut dis
            <br /> diam. Enim morbi proin auctor yet.
          </p>
        </div>

        <div className="menu">
          <i className="fa-solid fa-star" style={{ fontSize: '30px', marginTop: '10px' }}></i>
          <i className="fa-solid fa-star" style={{ fontSize: '30px' }}></i>
          <br />
          <i className="fa-solid fa-star" style={{ fontSize: '30px' }}></i>
          <h5>Result</h5>
          <p>
            Dui Consectetur gravida platea ut dis
            <br /> diam. Enim morbi proin auctor yet.
          </p>
        </div>
      </section>
      <Feq />
      <section className="sec-7">
        <h1>Ready For your brand's Advertisement?</h1>
        <p>Sit elit feugiat turpis sed integer integer accumsan turpis.</p>
        <NavLink to="/get-started">
          <button>Get Started</button>
        </NavLink>
      </section>
    </div>
  )
}

export default Home