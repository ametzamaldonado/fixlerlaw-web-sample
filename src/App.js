import React from 'react';
import NavBar from './components/HomeScreen/NavBar';
import Footer from './components/HomeScreen/Footer'
import Banner from './components/HomeScreen/Banner';
import ServicesSection from './components/HomeScreen/ServicesSection';
import ContactUs from './components/HomeScreen/ContactUs';
import AboutUs from './components/HomeScreen/AboutUs';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* -------- NavBar -------- */}
      <NavBar />

      <Banner />
      <AboutUs />

      <ServicesSection/>

      <ContactUs />
    {/* -------- Footer -------- */}
      <Footer />
    </div >
  );
}

export default App;
