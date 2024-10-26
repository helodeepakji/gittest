import React from 'react';
import '../../src/home.css'; 


const SectionFive = () => {
  return (
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
  );
};

export default SectionFive;

