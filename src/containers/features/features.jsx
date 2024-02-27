import React from "react";
import Feature from "../../components/feature/feature";
import "./features.css";

const features = [
  {
    title: "Improve your searches with tesera",
    text: "get more information from your search",
  },
  {
    title: "Improve your searches with tesera",
    text: "get more information from your search",
  },
  {
    title: "Improve your searches with tesera",
    text: "get more information from your search",
  },
  {
    title: "Improve your searches with tesera",
    text: "get more information from your search",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding">
      <div className="gpt3__features-heading">
        <div className="gradient__text">
          <h1>
            The Future is Now and You just Need To Realize it. Step into Future
            Today
          </h1>
        </div>
        <p>Request Early access</p>
      </div>
      <div className="gpt3__features-container">
        {features.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
