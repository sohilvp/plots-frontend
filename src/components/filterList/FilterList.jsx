import React from "react";
import "./filterlist.css";
import home from "../../assets/home.png";
import commercial from "../../assets/commercial.png";
import plot from "../../assets/plots.png";
import farm from "../../assets/farm.png";
import resort from "../../assets/resort.png";

const FilterList = ({ handleButtonCategory }) => {
  return (
    <div className="filterListContainer">
      <div className="filterLists">
        <ul>
          <li onClick={() => handleButtonCategory("building")}>
            <img src={home} alt="" className="icons" />
            <p>Buildings</p>
          </li>
          <li onClick={() => handleButtonCategory("commercial")}>
            <img src={commercial} alt="" className="icons" />
            <p>Commercial</p>
          </li>
          <li onClick={() => handleButtonCategory("plot")}>
            <img src={plot} alt="" className="icons" />
            <p>Plots</p>
          </li>
          <li onClick={() => handleButtonCategory("farm")}>
            <img src={farm} alt="" className="icons" />
            <p>Farm Land</p>
          </li>
          <li onClick={() => handleButtonCategory("resort")}>
            <img src={resort} alt="" className="icons" />
            <p>Resorts</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterList;
