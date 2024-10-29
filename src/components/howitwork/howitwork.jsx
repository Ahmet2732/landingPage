import React from 'react';
import step3Image from '../../assets/images/s2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function HowItWorks() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <section className="d-flex flex-column flex-md-row align-items-center p-3 text-center text-md-start">
          <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center">
            <img src={step3Image} alt="Step 3" className="img-fluid" />
          </div>
          <div className="col-12 col-md-8 ms-4 pt-4 pb-3 text-center">
            <h3>Change the way you build websites</h3>
            <ul className="list-unstyled">
              <li className="bi bi-check me-2">Digital Marketing Solutions for Tomorrow</li>
              <li className="bi bi-check me-2">Our Talented & Experienced Marketing Agency</li>
              <li className="bi bi-check me-2">Create your own site to match your brand</li>
            </ul>
            <a href="#more" className="text-primary">Read Out More</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HowItWorks;
