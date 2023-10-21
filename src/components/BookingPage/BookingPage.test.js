import { render, screen } from "@testing-library/react";
import BookingPage from "./index.js";
import { MemoryRouter as Router } from "react-router-dom";

test("Renders the BookingPage heading and form info", () => {
  render(
    <Router>
      <BookingPage />
    </Router>
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
  const formInfo = screen.getByTestId("formInfo");
  expect(formInfo.textContent).toContain(
    "Please choose your Dine Date, Time and for how many you are booking table for."
  );
});
