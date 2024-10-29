import React from 'react';

function Partners() {
  return (
    <div className="container w-100 mb-5 border-top">
      <div className="row text-center py-4 d-flex justify-content-center align-items-center">
        <div className="col-6 col-md-3 mb-3 mb-md-0 d-flex justify-content-center align-items-center">
          <i className="bi bi-amazon text-info" style={{ fontSize: '1.5rem' }} aria-label="Amazon">mazon</i>
        </div>
        <div className="col-6 col-md-3 mb-3 mb-md-0 d-flex justify-content-center align-items-center">
          <i className="bi bi-google text-info" style={{ fontSize: '1.5rem' }} aria-label="Google">oogle</i>
        </div>
        <div className="col-6 col-md-3 mb-3 mb-md-0 d-flex justify-content-center align-items-center">
          <i className="bi bi-paypal text-info" style={{ fontSize: '1.5rem' }} aria-label="PayPal">paypal</i>
        </div>
        <div className="col-6 col-md-3 d-flex justify-content-center align-items-center">
          <i className="bi bi-spotify text-info" style={{ fontSize: '1.5rem' }} aria-label="Spotify">spotify</i>
        </div>
      </div>
    </div>
  );
}

export default Partners;
