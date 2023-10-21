import logoImg from "../../images/logo16_4x.png";
import Nav from "../Nav";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img
        src={logoImg}
        width="250px"
        className="logo"
        alt="Litte Lemon logo"
      />
      <Nav />
    </header>
  );
};

export default Header;
