import React from 'react';
import logoImg from '../../assets/images/s3.png';

function HeroSection() {
  return (
    <div className="container-fluid w-75 px-3 my-5">
      <div className="row">
        <section className="hero-section text-center py-5 d-flex flex-column flex-md-row align-items-center justify-content-center">
          <div className="col-12 col-md-6 text-center text-md-start my-3">
            <h1>Our Creativity Is Your</h1>
            <h1>
              <span className="text-info">Success</span>
            </h1>
            <p className="paragraph-indent">
              Launch your campaign and benefit from our expertise on designing and managing conversion-centered Bootstrap 5 HTML pages. Our approach ensures that each detail is crafted for maximum impact and engagement.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start mt-3 pb-md-3">
              <a href="#get-started" className="btn btn-primary me-2">
                Get Started
              </a>
              <a href="#documentation" className="btn btn-outline-primary">
                Documentation
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 my-3 text-center">
            <img src={logoImg} alt="Logo" className="img-fluid w-75" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
