import React, { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const navigate = useNavigate();

  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [dob, setDOB] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [university, setUniversity] = useState("");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z][^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    // Regex to ensure name contains only letters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };
  const validateUniversity = (university) => {
    // Regex to ensure name contains only letters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(university);
  };
  const validateDepartment = (department) => {
    // Regex to ensure name contains only letters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(department);
  };

  const submitForm = async () => {
    try {
      setLoading(true);
      if (!validateEmail(email)) {
        setRegisterMessage("Invalid email format. Please enter a valid email.");
        setLoading(false);
        return;
      }

      if (!validateName(fullname) || !validateName(username)) {
        setRegisterMessage("Name should not contain numbers.");
        setLoading(false);
        return;
      }

      if (!validateUniversity(university)) {
        setRegisterMessage("University Name should not contain numbers.");
        setLoading(false);
        return;
      }
      if (!validateDepartment(department)) {
        setRegisterMessage("Department Name should not contain numbers.");
        setLoading(false);
        return;
      }

      if (password === confirmPassword) {
        const response = await fetch(
          "https://mental-server.onrender.com/user/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fullname,
              username,
              email,
              password,
              dob,
              age,
              gender,
              university,
              faculty,
              department,
            }),
          }
        );
        if (response.ok) {
          const data = await response.json();
          setRegisterMessage("Registered successfully");
          setLoading(false);
          navigate("/login");
        } else {
          const errorResponseData = await response.json();
          setRegisterMessage(
            errorResponseData.message || "Registration failed. Try again later."
          );
          setLoading(false);
        }
      } else {
        setPasswordMatch(false);
      }
    } catch (error) {
      setRegisterMessage("Registration failed. Try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="SignInbody">
      <br /> <br />
      <section className="register">
        {registerMessage && (
          <div
            className={
              registerMessage === "Registered successfully"
                ? "success-message"
                : "error-message"
            }
          >
            {registerMessage}
          </div>
        )}
        <h1> Welcome to Riri's Mental Support </h1>
        <p> Fill in the registration form to get started</p>
        <br />
        <div id="registerform">
          <div>
            <input
              type="text"
              name="fullname"
              id="FullName"
              placeholder="Enter your First Name"
              required
              onChange={(e) => setFullName(e.target.value)}
              pattern="[A-Za-z\s]+"
              title="Name should not contain numbers."
            />
            <br />
            <input
              type="text"
              name="username"
              id="Username"
              placeholder="Enter your Last Name"
              required
              onChange={(e) => setUserName(e.target.value)}
              pattern="[A-Za-z\s]+"
              title="Name should not contain numbers."
            />
            <br />
            <input
              type="email"
              name="email"
              id="emailAddress"
              placeholder="example@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="date"
              name="dob"
              id="dob"
              placeholder="Enter your date of birth"
              required
              onChange={(e) => setDOB(e.target.value)}
            />
            <br />
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Enter your age"
              required
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <select
              name="gender"
              id="gender"
              required
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <br />
            <input
              type="text"
              name="university"
              id="university"
              placeholder="Enter your university name"
              required
              onChange={(e) => setUniversity(e.target.value)}
              pattern="[A-Za-z\s]+"
              title="University Name should not contain numbers."
            />
            <br />
            <select
              name="faculty"
              id="faculty"
              required
              onChange={(e) => setFaculty(e.target.value)}
            >
              <option value="">Select your College</option>
              <option value="COLPAS">COLPAS</option>
              <option value="COLNAS">COLNAS</option>
              <option value="COLMAS">COLMAS</option>
              <option value="COERSE">COERSE</option>
              <option value="CAFST">CAFST</option>
              <option value="CASAP">CASAP</option>
              <option value="CCSS">CCSS</option>
              <option value="COED">COED</option>
              <option value="CEET">CEET</option>
              <option value="CNREM">CNREM</option>
              <option value="CVN">CVN</option>
              <option value="SGS">SGS</option>
            </select>
            <br />

            <input
              type="text"
              name="department"
              id="department"
              placeholder="Enter your department"
              required
              onChange={(e) => setDepartment(e.target.value)}
              pattern="[A-Za-z\s]+"
              title="Department Name should not contain numbers."
            />
            <br />
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                required
                onChange={handlePasswordChange}
              />
              <i
                className="password-toggle1"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </i>
            </div>
            <br />
            <div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="password"
                placeholder="Confirm Password"
                required
                onChange={handleConfirmPasswordChange}
              />
              <i
                className="password-toggle2"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </i>
            </div>
            <div id="passwordmatchAlert">
              {!passwordMatch && (
                <p>Passwords do not match. Please try again.</p>
              )}
            </div>
            <br />
            <button onClick={submitForm} id="submitbtn">
              {loading ? "Please wait..." : "Register"}
            </button>
            <br />
            <br />
          </div>
          <br />
          <p id="already">
            Already have an account? <Link to="/logIn">Log in</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
