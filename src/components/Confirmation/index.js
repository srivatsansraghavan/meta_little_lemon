import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Confirmation.css";
import Header from "../Header";
import Footer from "../Footer";

const Confirmation = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState();

  useEffect(() => {
    const booking = localStorage.getItem("BookingDone");
    if (booking) {
      setBooking(JSON.parse(booking));
    }
  }, []);

  return (
    <>
      <Header />
      <h1>Booking Done!</h1>
      {booking && (
        <div className="booking-confirm">
          <h2>Confirmation details:</h2>
          <p>
            <strong>Booking for:</strong> {booking.bookingFor}
          </p>
          <p>
            <strong>Booking Date:</strong> {booking.date}
          </p>
          <p>
            <strong>Booking Time:</strong> {booking.time}
          </p>
        </div>
      )}
      <button
        type="button"
        className="back-home-btn"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
      <Footer />
    </>
  );
};

export default Confirmation;
