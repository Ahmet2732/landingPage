import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Testimonials() {
  return (
    <>
      <div className="container mt-5">
        <div className="text-center mb-4">
          <p>We believe in building each other and hence</p>
          <h2 className="fw-bold">Work with some amazing partners</h2>
          <p>
            Start working with <span className="text-primary">Landrick</span> that can provide everything you need to generate
            awareness, drive traffic, connect.
          </p>
        </div>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide-to="0" 
            className="active text-bg-info rounded-circle" 
            aria-current="true" 
            aria-label="Slide 1">
          </button>
          <button 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide-to="1" 
            aria-label="Slide 2">
          </button>
          <button 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            data-bs-slide-to="2" 
            aria-label="Slide 3">
          </button>
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="d-flex justify-content-center flex-wrap">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="card p-4 m-2 text-center" style={{ minWidth: '250px', flex: '1 1 30%' }}>
                  <i className="bi bi-spotify text-info mb-3" style={{ fontSize: '1.5rem' }} aria-label="Spotify">spotify</i>
                  <p>"There is now an abundance of readable dummy texts. These are usually used when a text is required."</p>
                  <p className="text-primary">- Dean Tolle</p>
                </div>
              ))}
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="d-flex justify-content-center flex-wrap">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="card p-4 m-2 text-center" style={{ minWidth: '250px', flex: '1 1 30%' }}>
                  <i className="bi bi-google text-info mb-3" style={{ fontSize: '1.5rem' }} aria-label="Google">oogle</i>
                  <p>"There is now an abundance of readable dummy texts. These are usually used when a text is required."</p>
                  <p className="text-primary">- Dean Tolle</p>
                </div>
              ))}
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="d-flex justify-content-center flex-wrap">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="card p-4 m-2 text-center" style={{ minWidth: '250px', flex: '1 1 30%' }}>
                  <i className="bi bi-amazon text-info mb-3" style={{ fontSize: '1.5rem' }} aria-label="Amazon">mazon</i>
                  <p>"There is now an abundance of readable dummy texts. These are usually used when a text is required."</p>
                  <p className="text-primary">- Dean</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
