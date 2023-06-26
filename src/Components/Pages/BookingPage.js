import React, {  useReducer } from "react";
import { useNavigate } from "react-router-dom";

import BookingForm from "../BookingForm";
import { fetchAPI } from "../../bookingsAPI";

// import Footer from "../Footer";

const BookingPage = () => {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  const navigate = useNavigate();

  const submitForm = (formData) => {
    // Call the submitAPI(formData) API
    const submitAPIResult = fetchAPI(formData);

    if (submitAPIResult) {
      navigate("/confirmation"); // Navigate to the booking confirmed page
    }
  };
  return (
    <div>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;
