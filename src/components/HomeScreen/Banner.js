import React from 'react';
import './Banner.css';

function Banner () {
    return (
        <>
        {/* Banner Section */} 
            <section className="banner-section" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-text">
                                <h1>Fixler & LaGattuta, LLP </h1>
                                <p>Committed to providing personal attention to every detail in every matter to meet your goals and objectives.</p>
                                <div className="btn-main">
                                    <a href="#middle" className="btn btn-primary" >Read More</a>
                                    <a href="#" className="btn btn-outline-light">See Attorneys</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;