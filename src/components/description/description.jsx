import React from 'react';
import analysisImage from '../assets/images/analysis.png';
import targetImage from '../assets/images/target.png';

function description() {
  return (
    <section id="how-it-works" className="how-it-works-section py-5">
      <div className="container">
        <div className="row">
        <h2 className="section-title text-center">How It Works</h2>
        <p className="section-description text-center">Start working with us to build everything you need to generate awareness, drive traffic, and connect with customers.</p>
        <div className="row mt-4">
          <div className="col-md-6">
            <img src={analysisImage} alt="Analysis" className="img-fluid-custom mb-3" />
            <h3>Change the Way You Build Websites</h3>
            <p>Combine templates into a single unit, take components from one template to use in another.</p>
            <ul>
              <li>Digital Marketing Solutions for Tomorrow</li>
              <li>Our Talented & Experienced Marketing Agency</li>
              <li>Create your own skin to match your brand</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src={targetImage} alt="Target" className="img-fluid-custom mb-3" />
            <h3>Speed Up Your Development</h3>
            <p>Build without worrying about design or cross-browser compatibility.</p>
            <ul>
              <li>Digital Marketing Solutions for Tomorrow</li>
              <li>Our Talented & Experienced Marketing Agency</li>
              <li>Create your own skin to match your brand</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default description;
