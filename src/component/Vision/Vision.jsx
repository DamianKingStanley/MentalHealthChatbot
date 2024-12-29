import React from "react";
import "./Vision.css";
import visionbaner from "../../assest/visionbanner.jpg";

const Vision = () => {
  return (
    <div className="VisionComponent">
      <section className="Vision">
        <h1>Helping</h1>
        <h2>University Students</h2>
        <p>
          Our vision is to have a quick access platform where students across
          the country and continent, can learn about how to scale through any
          form of mental health issues and breakdown. To have our students not
          dealing with their problems alone.
        </p>
      </section>
      <section className="Visions">
        <img src={visionbaner} alt="" />
      </section>
    </div>
  );
};

export default Vision;
