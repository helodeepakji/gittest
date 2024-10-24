import React from 'react';
import { NavLink } from "react-router-dom";

const Feq = () => {
    return (
        <div>
        <header>
          <h1>Frequently asked questions</h1>
        </header>

        <section className="sec-6">
          <hr />
          <div className="faq-item">
            <p className="faq-question">
              Enim Sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?
              <i className="fa-solid fa-angle-down faq-icon"></i>
            </p>
          </div>
          <hr />
          <div className="faq-item">
            <p className="faq-question">
              Venenatis nulla sagaittis nunc, lobortis nec sollicituddin neque, dolor?
              <i className="fa-solid fa-angle-down faq-icon"></i>
            </p>
          </div>
          <hr />
          <div className="faq-item">
            <p className="faq-question">
              Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?
              <i className="fa-solid fa-angle-down faq-icon"></i>
            </p>
          </div>
          <hr />
          <div className="faq-item">
            <p className="faq-question">
              Nulla etiam viate, at sagaittis, nibh utlricies mattis feugiat faucibis?
              <i className="fa-solid fa-angle-down faq-icon"></i>
            </p>
          </div>
          <hr />
          <div className="faq-item">
            <p className="faq-question">
              Sagittis consectetur gravida nec turpis eros, id sit et, dictum?
              <i className="fa-solid fa-angle-down faq-icon"></i>
            </p>
          </div>
          <hr />
        </section>
      </div>
    );
}

export default Feq;