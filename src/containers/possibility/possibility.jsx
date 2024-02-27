import React from "react";
import Possibilityimg from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__Possibility section__padding" id="Possibility">
      <div className="gpt3__Possibility-image">
        <img src={Possibilityimg} alt="possibility" />
      </div>
      <div className="gpt3__Possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The Possibilities are beyond Your Imagination
        </h1>
        <p>yet bed any for travelling assistance and support</p>
      </div>
    </div>
  );
};

export default Possibility;
