import React from 'react';
import "./ContactUs.css"

function ContactUs() {
    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <div className="contact-text">
                                <h2>Don't hesitate to contact us any time</h2>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="contact-info">
                            <ul className="list-unstyled">
                                <li>Fixler & LaGattuta, LLP</li>
                                <li>120 Broadway, Suite 1350</li>
                                <li>New York, New York 10271</li>
                                <li>P: 212.785.9800</li>
                                <li>F: 212.785.9804</li>
                            </ul> 
                            </div>
                            <div className="contact-btn">
						        <a href="mailto:results@fixlerlaw.com" className="btn btn-primary">email us</a>
					        </div>

                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactUs