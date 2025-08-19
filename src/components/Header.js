import { useEffect } from "react";
import { logo } from "../Utils/contant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnlog, setbtnlog] = useState("login");

  return (
    <div className=" bg-amber-300 flex justify-between shadow-2xl m-2  sm:bg-pink-200 lg:bg-green-200">
      <div className="">
        <img className="w-26 " src={logo}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex   m-4">
          <li className="px-2">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/">Menu</Link>
          </li>{" "}
          <li className="px-2">
            <Link to="/contactus">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            {" "}
            <a href="#cart">Cart</a>{" "}
          </li>
          <li className="px-2">
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
