import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../BookingForm";
import { fetchAPI } from "../../bookingsAPI"; // Assuming you have an API utility function

const BookingPage = () => {
  // const initializeTimes = async () => {
  //   const today = new Date();
  //   const formattedDate = today.toISOString().split("T")[0];
  //   const times = await fetchAPI(formattedDate); // Fetch available times from API for today's date
  //   return times;
  // };

  // const updateTimes = async (state, date) => {
  //   const times = await fetchAPI(date); // Fetch available times from API for the selected date
  //   return times;
  // };

  // const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  // const handleDateChange = (e) => {
  //   const selectedDate = e.target.value;
  //   dispatch(selectedDate);
  // };
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
      {/* <h1>Welcome to Little Lemon!</h1> */}
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;
