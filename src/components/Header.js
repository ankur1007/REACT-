import { logo } from "../Utils/contant";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="img" src={logo} alt="image"></img>
      </div>
      <div className="navitems">
        <ul>
          <li>
            {" "}
            <a href="#home">Home</a>
          </li>
          <li>
            {" "}
            <a href="#menu">Menu</a>
          </li>{" "}
          <li>
            {" "}
            <a href="#about">About</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#contact">Contact</a>
          </li>
          <li>
            {" "}
            <a href="#cart">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
