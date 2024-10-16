import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../src/home.css'; 

const SectionFour = () => {
  return (
    <section className="sec-3">
      <figure className="figure1">
        <img src="/images/Rectangle 47.png" className="figure-img2" alt="Retail Image 1" />
        <img src="/images/image 5 (1).png" className="figure-img3" alt="Retail Image 2" />
      </figure>

      <aside className="aside d7">
        <h3>Final touch</h3>
        <h1>
          <span className="spanhead">Retailers</span> Make it Real
        </h1>

        <div className="d2">
          <h2 className="number n3">
            <span className="s3">1</span>
          </h2>
          <p style={{ marginLeft: '30px' }}>
            The selected design is sent directly to our retailers, who print your advertisement
            on cups, water bottles, plates, or any other disposables.
          </p>
        </div>

        <div style={{ display: 'flex', marginTop: '-30px' }}>
          <h2 className="number s4">
            <span className="s2">2</span>
          </h2>
          <p style={{ marginLeft: '20px' }}>
            Your custom-printed products are ready to be distributed, ensuring your brand reaches
            a wider audience in a unique and memorable way.
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

export default SectionFour;

