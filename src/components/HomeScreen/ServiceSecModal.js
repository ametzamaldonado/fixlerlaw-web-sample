import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import AutomotiveLiability from "../../pages/practiceAreas/AutomotiveLiability"
import Construction from "../../pages/practiceAreas/Construction"
import Insurance from "../../pages/practiceAreas/Insurance"
import Municipal from "../../pages/practiceAreas/Municipal"
import Premises from "../../pages/practiceAreas/Premises"
import ProfessionalLiability from "../../pages/practiceAreas/ProfessionalLiability"
import RealEstate from "../../pages/practiceAreas/RealEstate"
import Transportation from "../../pages/practiceAreas/Transportation"


function ServiceSecModal({ fileName, title }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const selectedPractice = (string) => {
        switch (string) {
            case 'AutomotiveLiability':
                return <AutomotiveLiability />
            case 'Construction':
                return <Construction />
            case 'Insurance':
                return <Insurance />
            case 'Municipal':
                return <Municipal />
            case 'Premises':
                return <Premises />
            case 'ProfessionalLiability':
                return <ProfessionalLiability />
            case 'RealEstate':
                return <RealEstate />
            case 'Transportation':
                return <Transportation />
            default :
            console.log("no more attorneys")
        }
    }


    return (
        <>
            <button onClick={handleShow} className="btn btn-outline-dark">Read More</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span className="blue-font">{title}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{
                    maxHeight: 'calc(100vh - 210px)',
                    overflowY: 'auto'
                }}>
                    {selectedPractice(fileName)}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ServiceSecModal