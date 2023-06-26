import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { FormGroup, FormControl, Button, FormLabel } from "react-bootstrap";

import BookingFormStyle from "../Style/BookingForm.css";

import { basicSchema } from "../schemas/validation";

const initialValues = {
  name: "",
  email: "",
  firstName: "",
  lastName: "",
  guests: "",
  phone: "",
};

const MyForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
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

  const handleSubmit = (values, { setSubmitting }) => {
    // Perform form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={basicSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <div className="form-container">
            <Form className="booking-form-container ">
              <FormGroup>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Field
                  as={FormControl}
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your First Name"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Field
                  as={FormControl}
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter your Last Name"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Field
                  as={FormControl}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <Field
                  as={FormControl}
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="date">Date</FormLabel>
                <Field
                  as={FormControl}
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Enter your date"
                  onChange={handleDateChange}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="time">Time</FormLabel>
                <FormControl
                  as="select"
                  name="time"
                  id="time"
                  placeholder="Enter your time"
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option value="">Select a time</option>
                  {finalTime}
                </FormControl>
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="guests">Guests</FormLabel>
                <FormControl
                  as={FormControl}
                  type="number"
                  name="guests"
                  id="guests"
                  placeholder="Enter the number of  guests"
                ></FormControl>
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="guests">Occasions</FormLabel>
                <FormControl
                  as="select"
                  name="occasion"
                  id="guests"
                  placeholder="Enter the number of  guests"
                >
                  <option value="">Select an occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Graduation">Graduation</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Anniversary">Anniversary</option>
                </FormControl>
              </FormGroup>

              <Link className="action-button" to="/confirmation">
                <Button
                  type="submit"
                  className="menu-header-button submit-button"
                  disabled={isValid}
                  aria-label="On Click"
                >
                  Submit
                </Button>
              </Link>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default MyForm;
