import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/HomeScreen/NavBar';
import Footer from './components/HomeScreen/Footer'
import Banner from './components/HomeScreen/Banner';
import ServicesSection from './components/HomeScreen/ServicesSection';
import ContactUs from './components/HomeScreen/ContactUs';
import AboutUs from './components/HomeScreen/AboutUs';


import './App.css';
import AttorneysCardDisplay from './components/AttorneysScreen/AttorneysCardDisplay';


function App() {
  // console.log(attorneysData)
  return (
    <div className="App">
      <Router>
        {/* -------- NavBar -------- */}
        <NavBar />
        <Banner />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AboutUs />
                  <ServicesSection />
                </>
              }
            />
            <Route 
              path="/attorneys"  
              element={
                <>
                  <AttorneysCardDisplay/>
                </>
              }
            /> 
        </Routes>
      </Router>
      {/* -------- Contact & Footer -------- */}
      <ContactUs />
      <Footer />
    </div >
  );
}

export default App;
