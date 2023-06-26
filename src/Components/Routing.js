import { Routes, Route } from "react-router-dom";
import Homepage from "../Components/Pages/HomePage";
// import About from "./pages/About";
import Reservation from "../Components/Pages/BookingPage";
// import Order from "./pages/Order";
// import Login from "./pages/Login";
import Confirmation from "./Pages/ConfirmedBooking";


function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      {/* <Route path="/about" element={<About />} /> */}

      <Route path="/reservations" element={<Reservation />} />

      {/* <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} /> */}

      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

export default Routing;
