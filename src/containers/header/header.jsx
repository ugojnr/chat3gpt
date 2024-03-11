import React from "react";
import people from "../../assets/people.png";
import dashboard from "../../assets/Analytical_dashboard.png";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          The AI-powered communications assistant. Across media, social and
          consumer data.
        </h1>
        <p>
          Tesera empowers communications, marketing and PR professionals with
          strategic insights that inform better decision-making. Supercharging
          government entities, leading enterprises and startups
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={dashboard} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
