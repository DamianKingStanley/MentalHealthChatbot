import React from "react";
import "./Health.css";
import health from "../../assest/mentalhead.jpg";

const Health = () => {
  return (
    <div className="HealthComponent">
      <section className="health">
        <div className="healthw">
          <p>
            "Your mental health is vital, and taking the first step towards
            improvement can make a significant difference. Start your journey to
            a brighter, healthier future by using our chatbot, designed to
            provide personalized support and guidance. Whether you're feeling
            stressed, anxious, or simply need someone to talk to, our chatbot is
            here to help you navigate through your mental health challenges.
            Don't wait—prioritize your well-being today and take advantage of
            this valuable resource."
          </p>
        </div>
        <div className="healthimg">
          <img src={health} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Health;
