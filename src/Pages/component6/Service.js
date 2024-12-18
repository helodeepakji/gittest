import React from "react";
import "./Service.css";
import Souvenir from "./pic/Souvenir.png";
import Cup from "./pic/cap.png";
import rb_1 from "./pic/rb_1.png";
import rb_2 from "./pic/rb_2.png";

const Service = () => {
  return (
    <>
    <div className='service-9451'>
  
  {/* <!-- Header --> */}
  <header className='service-header'>
      <div className="header-img-8452">
          <img src={Souvenir} className=".header-img-8450"/>
      </div>
  </header>  

  {/* <!-- Search Box --> */}
  <nav className='search-box-7850'>
      <div className="search-box-7851">
          <input type="text" placeholder="Search for paper cups..."/>
          <button>Search</button>
      </div>
  </nav>

  {/* <!-- Services Section --> */}
  <h2 className='services-5340'>Services near you ✨</h2>
  <section className="services-5342">
      <div className="card-9231">
          <img src={Cup} alt="Advertisement on cups"/>
          <div className="card-content-4913">
              <p className="price-1342">Starting at Rs 799</p>
              <h3>Advertisement on cups, plates & disposables</h3>
          </div>
      </div>
      <div className="card-9231">
          <img src={Cup} alt="Advertisement on cups"/>
          <div className="card-content-4913">
              <p className="price-1342">Starting at Rs 799</p>
              <h3>Advertisement on cups, plates & disposables</h3>
          </div>
      </div>
      <div className="card-9231">
          <img src={Cup} alt="Advertisement on cups"/>
          <div className="card-content-4913">
              <p className="price-1342">Starting at Rs 799</p>
              <h3>Advertisement on cups, plates & disposables</h3>
          </div>
      </div>
  </section>

  {/* <!-- Advertisement Sections --> */}
  <h2 className='services-5340'>Advertisement on Water Bottles</h2>
  <section className="services-5342">
      <div className="card-9231">
          <img src={Cup} alt="Advertisement on water bottles"/>
          <div className="card-content-4913">
              <p className="price-1342">Starting at Rs 799</p>
              <h3>Advertisement on Water bottles</h3>
          </div>
      </div>
      <div className="card-9231">
          <img src={Cup} alt="Advertisement on water bottles"/>
          <div className="card-content-4913">
              <p className="price-1342">Starting at Rs 799</p>
              <h3>Advertisement on Water bottles</h3>
          </div>
      </div>
      <div className="card-9231">
          <img src={Cup} alt="Advertisement on water bottles"/>
          <div className="card-content-4913">
              <p className="price-1342">Starting at Rs 799</p>
              <h3>Advertisement on Water bottles</h3>
          </div>
      </div>
  </section>

  {/* <!-- Advertisement Sections --> */}
  <h2 className='services-5340'>Advertisement on Water Bottles</h2>
  <section className="services-5342">
      <div className="card-9231">
          <img src={Cup} alt="Advertisement on water bottles"/>
          <div className="card-content-4913">
              <p className="price-1342">Starting at Rs 799</p>
              <h3>Advertisement on Water bottles</h3>
          </div>
      </div>
      <div className="card-9231">
          <img src={Cup} alt="Advertisement on water bottles"/>
          <div className="card-content-4913">
              <p className="price-1342">Starting at Rs 799</p>
              <h3>Advertisement on Water bottles</h3>
          </div>
      </div>
      <div className="card-9231">
          <img src={Cup} alt="Advertisement on water bottles"/>
          <div className="card-content-4913">
              <p className="price-1342">Starting at Rs 799</p>
              <h3>Advertisement on Water bottles</h3>
          </div>
      </div>
  </section>

  {/* <!-- Suggestion Section --> */}
  <h1 className='services-5341'>Write us a suggestion or else have a chat with us ✨</h1>
  <div className="suggestion-boxes-7824">
      <div className="suggestion-6734">
          <h5 className='services-5343'>Suggest any other type of advertisements </h5>
          <img src={rb_1}/>
          <textarea placeholder="Write your suggestion..."></textarea>
          <button>Send</button>
      </div>
      <div className="suggestion-6734">
          <h5 className='services-5343'> Have any question/query in mind? </h5>
          <img src={rb_2}/>
          <textarea placeholder="Write your query..."></textarea>
          <button>Send</button>
      </div>
  </div>
</div>

    </>
    
  );
};

export default Service;
