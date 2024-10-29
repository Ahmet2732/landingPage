import React from 'react';

import step3Image from '../../assets/images/Screenshot 2024-10-27 182223.png'
function DevelopmentSection() {
  return (
    <div className="container">
        <div className="row">

     
    <section className="d-flex align-items-center my-4 p-3 ">
      <div className="col-md-8">
        <h3>Speed up your development with me</h3>
        <p>Using<span className='text-info'> togrhter</span> to build your site means less worry about browser compatibility.</p>
        <ul className="list-unstyled">
          <li className='bi bi-check me-2'>Digital Marketing Solutions for Tomorrow</li>
          <li className='bi bi-check me-2'>Our Talented & Experienced Marketing Agency</li>
          <li className='bi bi-check me-2'>Create your own site to match your brand</li>
        </ul>
        <a href="#more" className="text-primary">Find Out More</a>
      </div>
      <div className="col-md-4">
      <img src={step3Image} alt="Step 3" className="img-fluid mb-3 " />
      </div>

    </section>
    </div>
    </div>
  );
}

export default DevelopmentSection;