import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import './App.css';
import BannerFeature from './components/BannerFeature';
import ServicesSection from './components/ServicesSection';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      {/* -------- NavBar -------- */}
      <NavBar />

      <BannerFeature />

      <ServicesSection/>

      <ContactUs />
    {/* -------- Footer -------- */}
      <Footer />
    </div >
  );
}

export default App;
