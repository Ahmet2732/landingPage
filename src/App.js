
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/heroSection/heroSection';
import Partners from './components/partners/partners';
import Testimonials from './components/testimonials/testimonials';
import Pricing from './components/pricing/pricing';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import FAQ from './components/FAQ/FAQ';

import Header from './components/howitwork/header';
import HowItWorks from './components/howitwork/howitwork';
import DevelopmentSection from './components/howitwork/dev';


function App() {
  return (
    <div>
 <Navbar/>
 <HeroSection/>
    
      <Partners />
      <Header/> 
      <HowItWorks/>
      <DevelopmentSection/>    
       <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  
  );
}

export default App;
