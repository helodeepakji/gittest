import React from 'react';
import { NavLink } from 'react-router-dom'; 
import '../../src/home.css'; 

const CallToAction = () => {
  return (
    <section className="sec-7">
      <h1>Ready For your brand's Advertisement?</h1>
      <p>Sit elit feugiat turpis sed integer integer accumsan turpis.</p>
      <NavLink to="/get-started">
        <button>Get Started</button>
      </NavLink>
    </section>
  );
};

export default CallToAction;

