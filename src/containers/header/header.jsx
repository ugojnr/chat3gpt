import React from "react";
import people from "../../assets/people.png";
import dashboard from "../../assets/Analytical_dashboard.png";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Welcome to Social Insights Uncover Trends Analytics
        </h1>
        <p>
          At Social Insights, we offer a cutting-edge platform that empowers
          individuals and businesses to delve deep into the vast realms of
          Twitter and Instagram data. Our intuitive and powerful analytics tools
          enable you to extract valuable insights, track trends, and understand
          audience sentiments like never before.
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
