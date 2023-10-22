import React from "react";
import { useState } from "react";
import "./Update.css";
import axios from "axios";
const Update = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();

  const UpdateCar = () => {
    let carUpdated = {};
    if (name !== "") {
      carUpdated.name = name;
    }
    if (image !== "") {
      carUpdated.urlimage = image;
    }
    if (description !== "") {
      carUpdated.description = description;
    }
    if (price !== 0) {
      carUpdated.price = price;
    }

    if (props.model === "mercedes") {
      axios
        .put(
          `http://localhost:7000/api/mercedes/update/${props.elementUpdated.id}`,
          carUpdated
        )
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
        .put(
          `http://localhost:7000/api/audi/update/${props.elementUpdated.id}`,
          carUpdated
        )
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
      <h2 className="update-title">Update This Car</h2>
      <form>
        <label>name</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <label>image</label>
        <input
          type="text"
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />
        <br />
        <label>description</label>
        <input
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <br />
        <label>price</label>
        <input
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <br />
      </form>
      <button className="submit-button" onClick={UpdateCar}>
        submit
      </button>
    </div>
  );
};

export default Update;
