import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateAcc.css";

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/user/Signup", {
        fullname,
        email,
        password,
        role: 0,
      });
      console.log(response.data); // Assuming response.data includes success message
      toast.success("Registered Successfully!", {
        style: { backgroundColor: "#00b4d8", color: "white", fontSize: "15px" },
      }); // Show success message
      setTimeout(() => {
        navigate("/login"); // Navigate to login page after a delay for toast message
      }, 2000); // Adjust the delay as needed
    } catch (error) {
      console.error(error);
      toast.error("Registration Failed. Please try again.", {
        style: { backgroundColor: "#e63946", color: "white", fontSize: "15px" },
      }); // Show error message
    }
  };

  return (
    <>
      <ToastContainer />
      {/* ToastContainer component to display notifications */}
      <div className="flex-Container">
        <div className="flex-box01"></div>
        <div className="flex-box01">
          <div className="logo">InternX</div>
          <div className="welcome">Welcome to</div>
          <div className="internx">InternX Community</div>
        </div>
        <div className="flex-box02">
          <div className="createAcc">
            <h5 style={{ marginLeft: "10px", marginTop: "50px" }}>
              Create an InternX account
            </h5>
            <form onSubmit={handleSignup} className="input-box1">
              <div className="place">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>
              <div className="place">
                <input
                  type="text"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="place">
                <input
                  type="password"
                  placeholder="Your Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="terms">
                <label>
                  <input type="checkbox" className="checkbox1" />I agree with
                  InternX Terms of Services and Privacy Policy.
                </label>
              </div>
              <button type="submit" id="signupButton" className="signupButton">
                Sign up
              </button>
            </form>
            <div className="divider-container">
              <div className="divider"></div>
              <div className="divider-text">or</div>
              <div className="divider"></div>
            </div>
            <div className="already">
              <Link to="/login" className="login-link">
                Already have an account? Log in
              </Link>
              <button className="google-button" type="button" id="googleButton">
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
                  alt="Google logo"
                />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
