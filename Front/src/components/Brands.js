import React from "react";
import axios from "axios";
import Car from "./Car";
import { useState, useEffect } from "react";

const Brands = (props) => {
  const [brandsList, setBrands] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/brands/getAll")
      .then(({ data }) => {
        setBrands(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {brandsList.map((brand, index) => {
        return (
          <Car
            brand={brand}
            key={index}
            setView={props.setView}
            setModel={props.setModel}
          />
        );
      })}
    </div>
  );
};

export default Brands;
