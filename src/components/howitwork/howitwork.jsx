// // import React from 'react';

import step3Image from '../../assets/images/s2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


// // function HowItWorks() {
// //   return (
// //     <section id="how-it-works" className="how-it-works-section py-5 bg-light">
// //       <div className="container">
// //         <h2 className="section-title text-center mb-4">How It Works</h2>
// //         <p className="section-description text-center mb-5">
// //           Follow these simple steps to get started with our services and achieve success!
// //         </p>

// //         <div className="row">
// //           {/* Step 1 */}
// //           <div className="col-md-4 text-center mb-5">
// //             <img src={step1Image} alt="Step 1" className="img-fluid mb-3" style={{ height: '100px' }} />
// //             <h5 className="fw-bold">Step 1: Sign Up</h5>
// //             <p>
// //               Create an account with us in just a few clicks. Signing up gives you access to all our features.
// //             </p>
// //           </div>

// //           {/* Step 2 */}
// //           <div className="col-md-4 text-center mb-5">
// //             <img src={step2Image} alt="Step 2" className="img-fluid mb-3" style={{ height: '100px' }} />
// //             <h5 className="fw-bold">Step 2: Choose Your Plan</h5>
// //             <p>
// //               Pick the plan that suits your needs. We offer a range of plans with various features and benefits.
// //             </p>
// //           </div>

// //           {/* Step 3 */}
// //           <div className="col-md-4 text-center mb-5">
// //             <img src={step3Image} alt="Step 3" className="img-fluid mb-3" style={{ height: '100px' }} />
// //             <h5 className="fw-bold">Step 3: Get Started</h5>
// //             <p>
// //               Start using our platform and enjoy all the features and tools designed to help you succeed.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default HowItWorks;
// function HowItWorks(){



// return(

// <>
// <div className="container">
//   <h2 className="section-title text-center mb-4">How It Works</h2>
//   <p className="section-description text-center mb-5">
//     Follow these simple steps to get started with our services and achieve success!
//   </p>

//  <div className="row">
//   <div className="col-md-6">
//   <img src={step3Image} alt="Step 3" className="img-fluid mb-3 w-100" style={{ height: '' }} />
// <div className="col-md-6">

// </div>

//   </div>





//   </div>




// </div>





// </>










// )







// }



// export default HowItWorks;


import React from 'react';


function HowItWorks() {
  return (
    

      <div className="container gx-2  text-center  ">
        <div className="row">
        <section className="d-flex align-items-center my-4 p-3 " >
      <div className="col-md-4 text-center d-flex justify-content-between ">
      <img src={step3Image} alt="Step 3" className="img-fluid mb-3" />
      </div>
      <div className="col-md-8">
        <h3>Change the way you build websites</h3>
        <ul className="list-unstyled ">
          <li className='bi bi-check me-2'>Digital Marketing Solutions for Tomorrow</li>
          <li className='bi bi-check me-2'>Our Talented & Experienced Marketing Agency</li>
          <li className='bi bi-check me-2'>Create your own site to match your brand</li> 
        </ul>
        <a href="#more" className="text-primary">Read Out More</a>
      </div>
    
  
    </section>
    </div>
    </div>
  );
}

export default HowItWorks;