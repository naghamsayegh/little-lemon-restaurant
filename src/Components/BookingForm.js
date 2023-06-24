import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Form, Button } from "react-bootstrap";
import "../Style/BookingForm.css";
const BookingForm = (props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit} className="booking-form-container ">
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formTime">
          <Form.Label>Time</Form.Label>
          <Form.Control
            as="select"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Select a time</option>
            {finalTime}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formGuests">
          <Form.Label>Number of Guests</Form.Label>
          <Form.Control
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formOccasion">
          <Form.Label>Occasion</Form.Label>
          <Form.Control
            as="select"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </Form.Control>
        </Form.Group>
        <div className="text-center">
          <Link className="action-button" to="/confirmation">
            <Button type="submit" className="menu-header-button submit-button">
              Submit Reservation
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default BookingForm;
