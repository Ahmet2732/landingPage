import React from 'react';
import step3Image from '../../assets/images/Screenshot 2024-10-27 182223.png';

function DevelopmentSection() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <section className="d-flex flex-column flex-md-row align-items-center p-3">
          <div className="col-12 col-md-8 text-center text-md-start mb-3 mb-md-0">
            <h3>Speed up your development with me</h3>
            <p>
              Using<span className="text-info"> together</span> to build your site means less worry about browser compatibility.
            </p>
            <ul className="list-unstyled ">
              <li className="bi bi-check me-2">Digital Marketing Solutions for Tomorrow</li>
              <li className="bi bi-check me-2">Our Talented & Experienced Marketing Agency</li>
              <li className="bi bi-check me-2">Create your own site to match your brand</li>
            </ul>
            <a href="#more" className="text-primary">Find Out More</a>
          </div>
          <div className="col-12 col-md-4 text-center">
            <img src={step3Image} alt="Step 3" className="img-fluid mb-3" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default DevelopmentSection;
