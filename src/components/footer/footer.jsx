import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Logo</h5>
            <p>Working with Landrick to build a website...</p>
          </div>
          <div className="col-md-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-light">About Us</a></li>
              <li><a href="#services" className="text-light">Services</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Newsletter</h5>
            <form>
              <input type="email" className="form-control mb-2   text-light" placeholder="Your email"/>
              <button className="btn btn-primary ">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

    </footer>
    
  );
}

export default Footer;
