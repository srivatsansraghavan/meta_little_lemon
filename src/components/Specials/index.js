import salad from "../../images/salad.jpg";
import pasta from "../../images/pasta.jpg";
import fish from "../../images/fish.jpg";
import bruschetta from "../../images/bruschetta.jpg";
import "./Specials.css";

const Specials = () => {
  const specialMenu = [
    {
      name: "Salad",
      price: "$8.00",
      description:
        "Sliced tomatoes, cucumber, onions, olives with sprinkles of cheese and pepper.",
      image: salad,
    },
    {
      name: "Red Pasta",
      price: "$10.00",
      description:
        "Penne pasta tossed in chilli tomato sauce and stirred with cheese",
      image: pasta,
    },
    {
      name: "Fried Fish",
      price: "$12.00",
      description:
        "Fish fried in coconut oil and stuffed with scrambled egg, accompanied by potato fries",
      image: fish,
    },
    {
      name: "Bruschetta",
      price: "$11.00",
      description:
        "Grilled bread rubbed with garlic and topped with olive, oil and salt",
      image: bruschetta,
    },
  ];
  return (
    <section className="special-menu" id="menu">
      <h2> Special Menu </h2>
      {specialMenu.map((menu) => (
        <div className="special-menu-card" key={menu.name}>
          <p className="special-menu-title">{menu.name}</p>
          <img
            className="special-menu-image"
            src={menu.image}
            alt={menu.description}
          />
          <p className="special-menu-description">{menu.description}</p>
          <p className="special-menu-price">{menu.price}</p>
        </div>
      ))}
    </section>
  );
};

export default Specials;
