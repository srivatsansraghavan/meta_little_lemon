import { useNavigate } from "react-router-dom";
import "./CallToAction.css";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section className="home" id="home">
      <span className="food-image">
        <button data-testid="bookTableBtn" onClick={() => navigate("/booking")}>
          Book a table
        </button>
      </span>
      Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean
      restaurant, focused on traditional recipes served with a modern twist. The
      chefs draw inspiration from Italian, Greek, and Turkish culture and have a
      menu of 12–15 items that they rotate seasonally. The restaurant has a
      rustic and relaxed atmosphere with moderate prices, making it a popular
      place for a meal any time of the day.
    </section>
  );
};

export default CallToAction;
