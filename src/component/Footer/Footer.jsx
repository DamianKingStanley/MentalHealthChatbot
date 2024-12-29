import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerlist">
          <p>
            <strong>National Agencies and Helplines:</strong>
          </p>
          <li>
            <p>Federal Neuro-Psychiatric Hospitals:</p>
            <li>Yaba, Lagos: +234 809 940 1653</li>
            <li>Aro, Abeokuta: +234 807 220 8636</li>
          </li>
          <li>
            <p>Nigeria Suicide Prevention Initiative:</p>
            <li>Hotlines: +234 806 210 6493, +234 809 210 6493</li>
          </li>
          <li>
            <p>Mental Health Foundation Nigeria:</p>
            <li>Hotline: +234 808 210 2100</li>
          </li>
        </div>
        <div className="footerlist">
          <p>
            <strong>Local Hospitals and Clinics:</strong>
          </p>

          <li>Lagos University Teaching Hospital (LUTH)</li>
          <li>University College Hospital (UCH), Ibadan</li>
        </div>
        <div className="footerlist">
          <p>
            <strong>Non-Governmental Organizations (NGOs):</strong>
          </p>
          <li>
            <p>Mentally Aware Nigeria Initiative (MANI):</p>
            <Link to="https://mentallyaware.org">
              <li> MANI</li>
            </Link>
            <li>Helpline: +234 909 210 2102</li>
          </li>
          <li>
            <p> She Writes Woman:</p>
            <Link to="https://shewriteswoman.org"> She Writes Woman</Link>
            <li>Helpline: +234 706 084 0587</li>
          </li>
        </div>
        <div className="footerlist">
          <p>
            <strong>University Counseling Services:</strong>
          </p>
          <li>
            Many universities in Nigeria have counseling centers with emergency
            contact numbers. Check with your university’s student affairs
            department or counseling center.
          </li>
        </div>
      </div>
      <div className="lastFoot">
        <p>&copy; 2024 Student Mental Health Chatbot</p>
        {/* <p>
          Developed by{" "}
          <Link to="https://kingdamian.netlify.app">Damian-The Tech Guy</Link>{" "}
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
