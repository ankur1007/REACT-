import { useEffect } from "react";
import { logo } from "../Utils/contant";
import { useState } from "react";
const Header = () => {
  const [btnlog, setbtnlog] = useState("login");

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
            <a href="#cart">Cart</a>{" "}
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnlog === "login" ? setbtnlog("Logout") : setbtnlog("Login");
              }}
            >
              {btnlog}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
