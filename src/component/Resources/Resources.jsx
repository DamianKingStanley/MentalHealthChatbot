import React, { useEffect } from "react";
import {
  FaHeart,
  FaBullseye,
  FaUsers,
  FaUserMd,
  FaSpa,
  FaBalanceScale,
  FaInfoCircle,
  FaHandsHelping,
} from "react-icons/fa";

import "./Resources.css";

const Resources = () => {
  useEffect(() => {
    const steps = document.querySelectorAll(".resource");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    steps.forEach((step) => {
      observer.observe(step);
    });

    return () => {
      steps.forEach((step) => {
        observer.unobserve(step);
      });
    };
  }, []);
  return (
    <div className="ResourcesSection">
      <h1>Mental Health Guidelines for University Students</h1>
      <section className="ResourcesBody">
        <div className="resource">
          <FaHeart id="resourceIcon" />
          <ul>
            <h4>Priotize Self Care</h4>

            <li>
              Ensure you get enough sleep, maintain a balanced diet, and
              exercise regularly.
            </li>
            <li>
              Practice mindfulness and relaxation techniques such as meditation
              or yoga
            </li>
          </ul>
        </div>
        <div className="resource">
          <FaBullseye id="resourceIcon" />
          <ul>
            <h4>Set Realistic Goals:</h4>

            <li>
              Break down tasks into manageable steps and set achievable goals.
            </li>
            <li>Avoid overcommitting and learn to say no when necessary.</li>
          </ul>
        </div>{" "}
        <div className="resource">
          <FaUsers id="resourceIcon" />
          <ul>
            <h4>Stay Connected</h4>

            <li>Maintain relationships with friends and family.</li>
            <li>
              Seek social support and engage in activities that foster a sense
              of community.
            </li>
          </ul>
        </div>{" "}
        <div className="resource">
          <FaUserMd id="resourceIcon" />
          <ul>
            <h4>Seek Professional Help</h4>

            <li>
              Don’t hesitate to reach out to counselors or mental health
              professionals if you feel overwhelmed.
            </li>
            <li>Utilize campus resources such as student counseling centers</li>
          </ul>
        </div>{" "}
        <div className="resource">
          <FaSpa id="resourceIcon" />
          <ul>
            <h4>Manage Stress</h4>

            <li>Identify stressors and develop coping strategies.</li>
            <li>Practice time management and prioritize tasks effectively</li>
          </ul>
        </div>{" "}
        <div className="resource">
          <FaBalanceScale id="resourceIcon" />
          <ul>
            <h4>Maintain a Healthy Balance</h4>

            <li>Balance academic responsibilities with leisure activities.</li>
            <li>
              Make time for hobbies and interests outside of academic work
            </li>
          </ul>
        </div>{" "}
        <div className="resource">
          <FaInfoCircle id="resourceIcon" />
          <ul>
            <h4>Stay Informed</h4>

            <li>Educate yourself about mental health issues.</li>
            <li>Stay updated on available resources and support systems.</li>
          </ul>
        </div>{" "}
        <div className="resource">
          <FaHandsHelping id="resourceIcon" />
          <ul>
            <h4>Create a Supportive Environment</h4>

            <li>Surround yourself with positive influences</li>
            <li>Engage in activities that promote mental well-being.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resources;
