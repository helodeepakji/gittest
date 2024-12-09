import React from "react";
import logo from './images/image.png';

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row">
        
          <div className="col-md-2 mb-4">
            <img src={logo} alt="Logo" className="img-fluid mb-3" />
          </div>

       
          <div className="col-md-2 mb-4">
            <h4 className="text-secondary mb-3">PRODUCT</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Overview</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Browse</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Accessibility</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Five</a></li>
            </ul>
          </div>

        
          <div className="col-md-2 mb-4">
            <h4 className="text-secondary mb-3">SOLUTION</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Brainstorming</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Ideation</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Wireframing</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Research</a></li>
            </ul>
          </div>

        
          <div className="col-md-2 mb-4">
            <h4 className="text-secondary mb-3">RESOURCES</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Tutorials</a></li>
            </ul>
          </div>

         
          <div className="col-md-2 mb-4">
            <h4 className="text-secondary mb-3">Company</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">About</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Press</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Events</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>
            </ul>
          </div>
        </div>

        
        <div className="d-flex justify-content-between mt-4">
          <p className="text-muted">&copy; 2025 Adjerry, Inc. All rights reserved. Made By SoftAir Technology</p>
          <div className="d-flex gap-2">
            <a href="#" className="text-muted text-decoration-none">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-muted text-decoration-none">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-muted text-decoration-none">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-muted text-decoration-none">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

       
        <div className="mt-4">
          <p className="text-muted small">
            In sed posuere sed ullamcorper feugiat. Lacinia elit neque, ipsum, non. Tellus mattis enim volutpat habitasse. Semper posuere lectus consectetur aliquam et ullamcorper. Dictumst aenean justo fames diam eget volutpat vestibulum elit. Blandit aliquet bibendum pellentesque turpis id penatibus faucibus id nunc. Aenean rhoncus, erat pellentesque eu. Quis morbi condimentum phasellus in ultricies eu amet.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
