
import React from 'react';

function Pricing() {
  return (
    <section id="pricing-plans" className="pricing-section py-5 mt-5">
      <div className="container gx-5">
      <div className="row">
        <div className="data col-md-4 ">
        <h2 className="section-title text-center mb-4">Our Comfortable Rates</h2>
        <p className="section-description text-center mb-5">
          Start working with us to access everything you need to generate awareness, drive traffic, and connect.
        </p>
      <button className='btn btn-info w-50 fw-bold'> Buy Now <span className='  rounded-5 bg-danger p-1'>v.1.2.3</span></button>
        </div>
   

       
          {/* Starter Plan */}
    

          {/* Professional Plan */}
          <div className="col-md-4 ">
            <div className="card pricing-card text-center shadow-sm">
              <div className="card-body border border-primary rounded-2">
                <h5 className="card-title">Professional</h5>
                <h6 className="card-price">$59<span className="text-muted">/mo</span></h6>
                <ul className="list-unstyled my-4">
                  <li>Full Access</li>
                  <li>Source Files</li>
                  <li>10 Free Appointments</li>
                  <li>Priority Support</li>
                  <li>Enhanced Security</li>
                </ul>
                <a href="#" className="btn btn-primary w-100">Try it now</a>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="col-md-4">
            <div className="card pricing-card text-center shadow-sm rounded-2">
              <div className="card-body">
                <h5 className="card-title">Enterprise</h5>
                <h6 className="card-price">$99<span className="text-muted">/mo</span></h6>
                <ul className="list-unstyled my-4">
                  <li>All Professional Features</li>
                  <li>Unlimited Appointments</li>
                  <li>24/7 Support</li>
                  <li>Advanced Security</li>
                </ul>
                <a href="#" className="btn btn-primary w-100">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </section>
  );
}

export default Pricing;
