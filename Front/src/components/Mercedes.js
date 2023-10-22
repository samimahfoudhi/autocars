import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CarModel from "./CarModel";

const Mercedes = (props) => {
  const [mercedes, setMercedes] = useState([]);
  const [render, setRerender] = useState(true);
  const handleRender = () => {
    setRerender(!render);
  };
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/mercedes/getAll")
      .then(({ data }) => {
        setMercedes(data);
      })
      .catch((error) => console.log(error));
  }, [render]);
  console.log(mercedes);
  return (
    <div>
      <div>
        {mercedes.map((e, i) => {
          return (
            <CarModel
              e={e}
              key={i}
              setView={props.setView}
              setElementUpdated={props.setElementUpdated}
              model={props.model}
              handleRender={handleRender}
            />
          );
        })}
      </div>
      <button
        style={{ marginLeft: "570px", marginTop: "20px" }}
        onClick={() => {
          props.setView("AddCar");
        }}
      >
        add a new car
      </button>
    </div>
  );
};

export default Mercedes;
