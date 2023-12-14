import React, { useState } from "react";
import "./searchform.css";
import { CiSquareChevDown } from "react-icons/ci";

const SearchForm = ({ handleButtonPurpose, setOnchange }) => {
  const [toggle, setToggle] = useState(false);
  const handleonchange = (e) => {
    setOnchange(e.target.value);
  };
  return (
    <div className="searchFormContainer">
      <div className="topSection">
        <input type="search" onChange={handleonchange} />
        <div className="filterIcon">
          <CiSquareChevDown
            className=" dropArrow"
            onClick={() => setToggle(!toggle)}
          />
          <div className={toggle ? "togglelist" : "null"}>
            <ul>
              <li>Price</li>
              <li>BHK</li>
              <li>Radius</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottomSection">
        <button className="buttons" onClick={() => handleButtonPurpose("sale")}>
          For sale
        </button>
        <button className="buttons" onClick={() => handleButtonPurpose("rent")}>
          For rent
        </button>
        <button className="buttons" onClick={() => handleButtonPurpose("book")}>
          For book
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
