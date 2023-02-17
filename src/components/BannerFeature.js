import React from 'react';
import './BannerFeature.css';

function BannerFeature () {
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
                                    <a href="#" className="btn btn-primary">Read More</a>
                                    <a href="#" className="btn btn-outline-light">GET A QUOTE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        {/* About Us Section */}
            <section className='features-section'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="left-header">
                                <h2>About Us</h2>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="right-text">
                                <p>
                                    Fixler & LaGattuta, LLP is a law firm concentrating on the defense of personal injury, professional liability and property damage claims.  We maintain offices in downtown Manhattan.
                                </p>
                                <p>
                                    The Firm provides quality legal representation utilizing the partners' combined 35 years of litigation and transactional experience and collective assets to minimize its clients’ legal and indemnity costs, while maximizing all available benefits afforded them by the law.
                                </p>
                                <p>
                                    The Firm prides itself on maintaining client confidence, comfort and security through one-on-one consultation with all of its clients; working with them, their insurers, third-party administrators and risk managers alike to develop sound claims defense and trial strategies as well as risk prevention programs tailored to meet their respective needs and offering seminars on recent trends and their impact on risk management and loss control.
                                </p>
                                <p>
                                    Fixler & LaGattuta, LLP is committed to providing personal attention to every detail in every matter to meet your goals and objectives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default BannerFeature;