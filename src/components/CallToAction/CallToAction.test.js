import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import CallToAction from "./index.js";

test("Renders the button with text 'Book a table' in CallToAction section", () => {
  render(
    <Router>
      <CallToAction />
    </Router>
  );
  const bookTable = screen.getByTestId("bookTableBtn");
  expect(bookTable.textContent).toContain("Book a table");
});
