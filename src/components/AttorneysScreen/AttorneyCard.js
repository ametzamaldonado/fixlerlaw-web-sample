import React from 'react';
import { EnvelopeFill, TelephoneFill } from "react-bootstrap-icons";
import "./AttorneyCard.css"

function AttorneyCard({ attorney }) {
    const { photoLink, name, type, email, extension } = attorney;
    return (
        <>
        <div className="col-sm-6 col-md-6 col-lg-4 p-2">
            <div className="card-box" onClick={() => console.log(name)}>
                <div className="attorney-media">
                    <img 
                        src={photoLink ? photoLink : 'https://www.pngitem.com/pimgs/m/661-6619328_default-avatar-png-blank-person-transparent-png.png'} 
                        alt={`${name}-photo`} 
                    />
                </div>
                <div className="attorney-info">
                    <h3>{name}</h3>
                    <p>{type}</p>
                    <div className='attorney-contact'>
                        <div className="email">
                            <a href={`mailto:${email}`} className="btn btn-outline-light">Send Email <EnvelopeFill/></a>
                        </div>
                        <div className="phone-number pt-3">
                            <TelephoneFill/> : (212) 785-9800 ext. {extension} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AttorneyCard