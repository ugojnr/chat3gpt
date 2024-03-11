import React from "react";
import Feature from "../../components/feature/feature";
import "./features.css";

const features = [
  {
    title: "News Monitoring",
    text: "Tesera offers end-to-end news monitoring and media intelligence across online news, social media, print and broadcast. Our news monitoring tool tracks keywords connected to the topics that matter to you and aggregates social media and editorial content that mentions your keywords.",
  },
  {
    title: "Consume insights",
    text: "With consumer preferences and markets evolving at breakneck speeds, businesses need a way to keep ahead of trends and understand what potential customers want and need. We apply AI, data science, and human market research expertise to a comprehensive social data stream that uncovers consumer insights for data-driven decision-making.",
  },
  {
    title: "Social Media Engagement",
    text: "Our scalable social media engagement tool helps you stay in control by providing real-time social media listening, analytics reporting, engagement and community management. With Tesera’s social media tools, you can be sure that you never miss a mention or respond to timely events and clarifications.",
  },
  {
    title: "Public Relations Management",
    text: "Our PR management tool enables PR professionals to stay on top of crisis communication, be in control of brand reputation, manage their media relations, discover influencers, pitch journalists and distribute content while employing generative AI assistance in PR reporting",
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
