import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Footer from "../Footer";

function ConfirmedBooking() {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Confirmation Message</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Your Reservation is Confirmed! A confirmation message has been sent
            to your email. Thanks for dining with us!
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Link to="/">
            <Button variant="secondary">Close</Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
      {/* <Footer /> */}
    </div>
  );
}

export default ConfirmedBooking;
