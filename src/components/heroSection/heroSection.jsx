import React from 'react';
import logoImg from '../../assets/images/s3.png';

function HeroSection() {
  return (
    <div className="container-fluid w-75 ">
      <div className="row">
        <section className="hero-section text-center py-5 d-flex align-items-center justify-content-center mt-5 mb-5">
          <div className="col-md-6 text-center mt-5">
            
            <div className='text-start'>
            <h1 className='text-start'>Our Creativity Is Your</h1><h1><span className='text-info'> Success</span></h1>
            <p className="text paragraph-indent ">
              Launch your campaign and benefit from our expertise on designing and managing conversion-centered Bootstrap 5 HTML pages. Our approach ensures that each detail is crafted for maximum impact and engagement.
            </p>
            </div>
           
            <div className="d-flex justify-content-center align-items-center">
              <a href="#get-started" className="btn btn-primary me-2">Get Started</a>
              <a href="#documentation" className="btn btn-outline-primary">Documentation</a>
            </div>
          </div>
          <div className="col-md-6">
            <img src={logoImg} alt="Logo" className="w-75" />
          </div>
        </section>
      </div>
    
    </div>
    
  );
}

export default HeroSection;

