import React from "react";
import "./Home.css";
const Home = (props) => {
  return (
    <div className="container-home">
      <h1 className="title-home">Explore the World of Automotive</h1>
      <p className="parag-home">
        Welcome to our automotive hub, where passion meets precision. Explore a
        world of innovation and horsepower as you dive into the heart of the
        automotive realm. Whether you're a die-hard gearhead or just seeking
        practical advice for your daily commute, our website is your go-to
        destination for all things automotive. From in-depth reviews of the
        latest models to maintenance tips that keep your ride running smoothly,
        we're here to fuel your automotive enthusiasm. Join us on a journey
        where rubber meets the road, and the possibilities are limitless.
        Welcome to the road of endless possibilities.
      </p>
      <button
        className="button-home"
        onClick={() => {
          props.setView("Brands");
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
