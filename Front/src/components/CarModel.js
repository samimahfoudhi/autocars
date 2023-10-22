import React from "react";
import axios from "axios";
const CarModel = (props) => {
  const handleDlete = () => {
    if (props.model === "mercedes") {
      axios
        .delete(
          `http://localhost:7000/api/mercedes/delete/${props.e.idmercedes}`
        )
        .then((response) => {
          console.log("done");
        })
        .catch((error) => {
          console.log(error);
        });
      props.handleRender();
    }
    if (props.model === "audi") {
      axios
        .delete(`http://localhost:7000/api/audi/delete/${props.e.idaudi}`)
        .then((response) => {
          console.log("done");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    props.setView("mercedes");
    console.log(props.e.idaudi);
  };
  return (
    <div>
      <div className="container">
        <h3> {props.e.name} </h3>
        <img src={props.e.urlimage} alt="" />
        <br />
        <p>{props.e.description}</p>
        <p>Price : {props.e.price} DT </p>
        <button
          onClick={() => {
            props.setView("update");
            props.setElementUpdated({
              id: props.e.idmercedes ? props.e.idmercedes : props.e.idaudi,
              name: props.e.name,
              image: props.e.urlimage,
              description: props.e.description,
              price: props.e.price,
            });
          }}
        >
          update
        </button>
        <button onClick={handleDlete}>delete</button>
      </div>
    </div>
  );
};

export default CarModel;
