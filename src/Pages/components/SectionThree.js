import React from 'react';
import { NavLink } from 'react-router-dom'; 
// import './src/Style.css'; 
import './Pages/Home.css'

const SectionThree = () => {
  return (
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
          <h2 className="number n1">
            <span className="s3">1</span>
          </h2>
          <p className="d3">
            Designers receive your brief and create eye-catching advertisements that match your requirements.
          </p>
        </div>

        <div className="d4">
          <h2 className="number d5">
            <span className="s2">2</span>
          </h2>
          <p className="d6">
            Once the designs are ready, Business Users can browse and select their favorite concept.
          </p>
        </div>

        <NavLink to="/join">
          <button>
            Join now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </NavLink>
      </aside>
    </section>
  );
};

export default SectionThree;
