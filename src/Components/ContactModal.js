import React from "react";
import { Modal,Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faPhone,faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const ContactModal=({show,handleClose}) =>{
    return(
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton className="bg-dark text-white">
                <Modal.Title>Contact Us</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white">
                <p>
                    <FontAwesomeIcon icon={faEnvelope} className="me-2 text-warning"/>
                    rudra.ac.elec.services@gmail.com
                </p>
                <p>
                    <FontAwesomeIcon icon={faPhone} className="me-2 text-warning"/>
                    +91 8919859723
                </p>
                <p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-warning"/>
                    Beside Srichaitanya college,annamaih circle,Nellore,Andhra Pradesh.
                </p>
            </Modal.Body>
            <Modal.Footer className="bg-dark">
                <Button variant="warning"  onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    );

};

export default ContactModal; 