import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CarModel from "./CarModel";

const Audi = (props) => {
  const [audi, setAudi] = useState([]);
  const [render, setRerender] = useState(true);
  const handleRender = () => {
    setRerender(!render);
  };
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/audi/getAll")
      .then(({ data }) => {
        setAudi(data);
      })
      .catch((error) => console.log(error));
  }, [render]);
  console.log(audi);
  return (
    <div>
      <div>
        {audi.map((e, i) => {
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

export default Audi;
