import React from "react";
import "./Supports.css";

const Supports = () => {
  return (
    <div className="SupportsSection">
      <section className="SupportsBody">
        <div className="support">
          <h3>Immediate Access to Support</h3>
          <p>
            Availability: The chatbot is available 24/7, providing students with
            immediate access to support whenever they need it, regardless of the
            time of day.
          </p>
          <p>
            Anonymity: Students can express their feelings and concerns
            anonymously, which can be particularly helpful for those who are
            hesitant to seek help in person due to stigma or privacy concerns.
          </p>
        </div>
        <div className="support">
          <h3> Initial Emotional Relief</h3>
          <p>
            Listening Ear: The chatbot can offer a compassionate and
            non-judgmental listening ear, allowing students to vent their
            feelings and relieve some of their immediate emotional burden.
          </p>
          <p>
            Validation and Empathy: By acknowledging and validating students'
            feelings, the chatbot can provide a sense of understanding and
            empathy, which is crucial in the early stages of addressing a mental
            health crisis.
          </p>
        </div>{" "}
        <div className="support">
          <h3> Guidance and Information</h3>
          <p>
            Psychoeducation: The chatbot can provide educational resources and
            information about mental health, helping students understand their
            feelings and the importance of self-care.
          </p>
          <p>
            Coping Strategies: It can suggest practical coping strategies and
            exercises, such as mindfulness, deep breathing, or journaling, to
            help manage stress and anxiety.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Supports;
