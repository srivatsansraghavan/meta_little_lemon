import dicaprio from "../../images/dicaprio.jpg";
import hayek from "../../images/hayek.jpg";
import scorcese from "../../images/scorsese.jpg";
import "./CustomersSay.css";

const CustomersSay = () => {
  const testimonials = [
    {
      name: "Martin",
      image: scorcese,
      rating: String.fromCharCode(9733).repeat(5),
      description: "Great food. Great Ambience.",
    },
    {
      name: "Salma",
      image: hayek,
      rating: String.fromCharCode(9733).repeat(5),
      description: "Mucho Bueno.",
    },
    {
      name: "Leonardo",
      image: dicaprio,
      rating: String.fromCharCode(9733).repeat(4) + String.fromCharCode(9734),
      description: "Is this restaurant real? Or am I imagining it?",
    },
  ];
  return (
    <section className="customers-say">
      <h2>Customers Say</h2>
      {testimonials.map((testimonial) => (
        <div className="testimonial" key={testimonial.name}>
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-image"
          />
          <p className="testimonial-name">{testimonial.name}</p>
          <p className="testimonial-rating">{testimonial.rating}</p>
          <p className="testimonial-description">{testimonial.description}</p>
        </div>
      ))}
    </section>
  );
};

export default CustomersSay;
