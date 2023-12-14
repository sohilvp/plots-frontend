import React from "react";
import "./navbar.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="logo">
        <Link to={"/"}>
          <h3>PLOTS.com</h3>
        </Link>
      </div>
      <div className="navlinks">
        <ul>
          <li>
            <Link to={"/createpost"}>
              <IoIosAddCircleOutline className="navIcons" />
            </Link>
          </li>
          <li>
            <Link to={"/login"}>
              <FaRegCircleUser className="navIcons" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
