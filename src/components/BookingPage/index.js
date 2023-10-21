import { useNavigate } from "react-router-dom";
import "./BookingPage.css";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";

const BookingPage = () => {
  const times = [
    "",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
  ];

  const navigate = useNavigate();
  const [date, setDate] = useState(new Date().toLocaleDateString("en-IN"));
  const [time, setTime] = useState(times[1]);
  const [bookingFor, setBookingFor] = useState(1);
  const [occassion, setOccassion] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date === "") {
      setErrorMessage("Date is required");
      return;
    }
    if (time === "") {
      setErrorMessage("Time is required");
      return;
    }
    if (bookingFor < 1) {
      setErrorMessage("Must be for one person atleast");
      return;
    }
    if (bookingFor > 8) {
      setErrorMessage("Should be for less than 8 people");
      return;
    }
    if (occassion === "") {
      setErrorMessage("Occasion should not be empty");
      return;
    }
    localStorage.setItem(
      "BookingDone",
      JSON.stringify({ date, time, bookingFor, occassion })
    );
    navigate("/confirmation");
  };

  return (
    <>
      <Header />
      <section className="booking-form" id="bookingForm">
        <h2>Book Now</h2>
        <p className="form-info" data-testid="formInfo">
          Please choose your Dine Date, Time and for how many you are booking
          table for.
        </p>
        <br />
        <span className="error-message">{errorMessage}</span>
        <label htmlFor="bookingDate">Dine Date</label>
        <input
          type="date"
          id="bookDate"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="bookingTime">Dine Time</label>
        <select
          id="bookTime"
          onChange={(e) => setTime(e.target.value)}
          value={time}
        >
          {times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="bookingFor">Number of guests</label>
        <input
          id="bookingFor"
          type="number"
          placeholder="1"
          min="1"
          max="8"
          value={bookingFor}
          onChange={(e) => setBookingFor(e.target.value)}
        />
        <label htmlFor="occassion">Occassion</label>
        <select
          id="occassion"
          value={occassion}
          onChange={(e) => setOccassion(e.target.value)}
        >
          <option></option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <button className="book-table-btn" type="button" onClick={handleSubmit}>
          Book a table
        </button>
      </section>
      <Footer />
    </>
  );
};

export default BookingPage;
