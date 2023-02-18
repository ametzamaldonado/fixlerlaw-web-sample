import React from 'react';
import './ServicesSection.css';

function ServicesSection() {
    const services = [
        {
            area: 'Automotive Liability',
            alt: 'auto',
            imageLink: 'https://cdn-icons-png.flaticon.com/512/2127/2127223.png',
        },
        {
            area: 'Construction & Labor Law Litigation',
            alt: 'construction',
            imageLink: 'https://cdn-icons-png.flaticon.com/512/4939/4939385.png'
        },
        {
            area: 'Insurance Coverage',
            alt: 'insurance',
            imageLink: 'https://cdn-icons-png.flaticon.com/512/1518/1518636.png'
        },
        {
            area: 'Municipal, Labor, & Employment Law',
            alt: 'labor-law',
            imageLink: 'https://cdn-icons-png.flaticon.com/512/6016/6016398.png'
        },
        {
            area: 'Premises & General Liability',
            alt: 'liability',
            imageLink: 'https://cdn-icons-png.flaticon.com/512/4348/4348541.png'
        },
        {
            area: 'Professional Liability / Directors & Officers',
            alt: 'professional',
            imageLink: 'https://cdn-icons-png.flaticon.com/512/1576/1576396.png'
        },
        {
            area: 'Real Estate',
            alt: 'real-estate',
            imageLink: 'https://cdn-icons-png.flaticon.com/512/602/602275.png'
        },
        {
            area: 'Transportation Litigation',
            alt: 'transportation',
            imageLink: 'https://cdn-icons-png.flaticon.com/512/995/995334.png'
        }
    ]

    const createServiceAreaBox = ({ area, alt, imageLink }, index) => {
        return (
            <div className="col-sm-6 col-md-4 col-lg-3 p-2" key={index}>
                    <div className="services-box">
                        <div className="services-img">
                            <img src={imageLink} alt={alt} />
                        </div>
                        <div className="services-info pt-3">
                            <h3>{area}</h3>
                        </div>
                    </div>
                </div>
        )
    } 

  return (
    <>
    <section className="services-section p-5">
        <div className="container">
            <div className="row">

                <div className="col-md-12">
                    <div className="section-title-main pb-5">
                        <h2 className="section-title">
                            Legal Practices Area
                        </h2>
                    </div>
                </div>
                { services.map(item => createServiceAreaBox(item)) }
            </div>
        </div>
    </section>
    </>
  )
}

export default ServicesSection