import React from 'react';
import ContactForm from "./ContactForm"
import { GeoAltFill, TelephoneFill, PrinterFill, EnvelopeFill } from "react-bootstrap-icons"

export default function ContactScreen() {
    return (
        <>
            <section className='contactUs-section p-2' >
                <div className="container">
                    <div className="row align-items-center">
                        {/* Title */}
                        <div className="row">
                            <div className="col contactUs-title py-4">
                                <h2 className='text-center'>CONTACT US</h2>
                            </div>
                            <p className='text-center'>Please contact us today to see how we can be of service to you.</p>
                        </div>

                        {/* Left Screen */}
                        <div className="col-lg-6">
                            <div className="left-section">
                                <ContactForm />
                            </div>
                        </div>

                        {/* Right Screen */}
                        <div className="col-lg-6">
                            <div className="right-section">
                                <div className="container border-bottom">
                                    <div class="text-start p-2 border-bottom">
                                        <h5>Office Hours</h5>
                                        Monday to Friday:
                                        9:00am – 5:00pm EST
                                    </div>


                                    <div class="d-flex align-items-center p-2">
                                        <GeoAltFill size={20} />
                                        <ul className="list-unstyled px-3">
                                            <li>Fixler & LaGattuta, LLP</li>
                                            <li>120 Broadway, Suite 1350</li>
                                            <li>New York, New York 10271</li>
                                        </ul>
                                    </div>
                                    <div class="col px-2">
                                        <div className="d-flex align-items-center">
                                            <TelephoneFill size={20} />
                                            <ul className="list-unstyled px-3">
                                                <li>212.785.9800</li>

                                            </ul>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <PrinterFill size={20} />
                                            <ul className="list-unstyled px-3">
                                                <li>212.785.9804</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center p-2">
                                        <EnvelopeFill size={20} />
                                        <div className="px-3">
                                            results@fixlerlaw.com
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row m-2">
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.4332844631817!2d-74.01278708459516!3d40.70847727933222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17137b6b13%3A0x133a7a83e17bb1cc!2sEquitable%20Life%20Building%2C%20120%20Broadway%2C%20New%20York%2C%20NY%2010271!5e0!3m2!1sen!2sus!4v1676864575115!5m2!1sen!2sus" width="auto" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
