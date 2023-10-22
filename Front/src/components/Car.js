import React from "react";
import "./Car.css";
const Car = (props) => {
  return (
    <div className="container">
      <h2>{props.brand.name} </h2>
      <img src={props.brand.urlimage} alt="" />
      <br />
      <button
        onClick={() => {
          props.setView(props.brand.name);
          props.setModel(props.brand.name);
        }}
      >
        See More
      </button>
    </div>
  );
};

export default Car;
