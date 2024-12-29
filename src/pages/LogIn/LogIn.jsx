import React, { useState } from "react";
import "./LogIn.css";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(""); // For displaying messages
  const [loading, setLoading] = useState(false);

  const storeUserData = (userData) => {
    sessionStorage.setItem("studentData", JSON.stringify(userData));
    return true;
  };

  const [token, setToken] = useState(" ");
  const storeUserToken = (userData) => {
    sessionStorage.setItem("token", JSON.stringify(userData?.token));
    setToken(userData?.token);
  };

  const submitForm = async () => {
    try {
      setLoading(true);
      setLoginMessage(""); // Reset the message on submit
      const response = await fetch(
        "https://mental-server.onrender.com/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        storeUserData(data);
        setLoading(false);
        setLoginMessage("Login successful! Redirecting..."); // Success message
        setTimeout(() => {
          navigate("/assistant-bot");
        }, 2000); // Redirect after 2 seconds
      } else {
        const errorResponseData = await response.json();
        setLoginMessage(
          errorResponseData.message ||
            "Either email or password is incorrect. Check and try again."
        ); // Error from backend or custom message
        setLoading(false);
      }
    } catch (error) {
      setLoginMessage("An error occurred. Please try again later."); // General error message
      setLoading(false);
    }
  };

  return (
    <div className="LogInbody">
      <section className="Login">
        {loginMessage && <p className="loginMessageDisplay">{loginMessage}</p>}
        <h1>Hi, Welcome!</h1>
        <p>Type your email and password to log in.</p>
        <div id="Loginform">
          <div>
            <input
              type="email"
              name="email"
              id="emailL"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              name="password"
              id="passwordL"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={submitForm} id="submitbtn">
              {loading ? "Loading..." : "Sign In"}
            </button>
            <br />

            <p>
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
