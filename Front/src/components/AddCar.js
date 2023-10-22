import React from "react";
import axios from "axios";
import { useState } from "react";

const AddCar = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const AddNewCar = () => {
    let newCar = {};
    if (name !== "") {
      newCar.name = name;
    }
    if (image !== "") {
      newCar.urlimage = image;
    }
    if (description !== "") {
      newCar.description = description;
    }
    if (price !== 0) {
      newCar.price = price;
    }
    if (props.model === "mercedes") {
      axios
        .post("http://localhost:7000/api/mercedes/create", newCar)
        .then((response) => {
          console.log("done");
        })
        .catch((error) => {
          console.log(error);
        });
      props.setView("mercedes");
    }
    if (props.model === "audi") {
      axios
        .post("http://localhost:7000/api/audi/create", newCar)
        .then((response) => {
          console.log("done");
        })
        .catch((error) => {
          console.log(error);
        });
      props.setView("audi");
    }
  };
  return (
    <div className="update-container">
      <h2 className="update-title">Add New Car</h2>
      <form>
        <label>name</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>image</label>
        <input
          type="text"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <br />
        <label>description</label>
        <input
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <label>price</label>
        <input
          type="number"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
      </form>
      <button className="submit-button" onClick={AddNewCar}>
        submit
      </button>
    </div>
  );
};

export default AddCar;
