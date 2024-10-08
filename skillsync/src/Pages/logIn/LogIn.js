import React, { useState } from "react";
import "./logIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/logo_trprnt.png"

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/user/Login", {
        email,
        password,
      });

      if (response.status === 200) {
        const { token, user } = response.data;

        // Save the token in local storage or cookie (if needed)
        localStorage.setItem("token", token);
console.log("response recived", response.data);
        // Redirect based on user role
        setEmail("");
        setPassword("");

        if (user.role === "0") {
          navigate("/Card");
        } else if (user.role === "1") {
          navigate("/internships");
        }
      } else {
        toast.error("Login failed", {
          style: { backgroundColor: "#00b4d8", color: "black" },
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data, {
          style: { backgroundColor: "#00b4d8", color: "black" },
        }); // Display the error message from the server
      } else {
        toast.error("An unexpected error occurred. Please try again.", {
          style: { backgroundColor: "#00b4d8", color: "black" },
        });
      }
    }
  };

  return (
    <>
       <div className="flex-Container">
        
        <div className="flex-box01" style={{paddingLeft:"20px" ,paddingRight:"30px"}}>
          <div className="logo"><img src={logo} alt="InternX Logo" style={{height:"70px", width:"auto"}} /></div>
          <div className="welcome">Welcome to</div>
          <div className="internx">InternX Community</div>
        </div>
        <div className="flex-box02" style={{ marginTop:"80px", marginLeft:"80px" }}>
          <div className="login">
            <h5>Login to your account</h5>
            <div>
              <form onSubmit={handleLogin} className="input-box1">
                <div className="place">
                  {" "}
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
                    <input type="checkbox" />I agree with InternX Terms of
                    Services and Privacy Policy.
                  </label>
                </div>
                <button type="submit" id="loginButton" className="loginButton">
                  Login
                </button>
              </form>
              <div className="divider-container">
                <div className="divider"></div>
                <div className="divider-text">or</div>
                <div className="divider"></div>
              </div>
              <button className="google-button" type="button" id="googleButton">
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
                  alt="Google logo"
                ></img>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LogIn;
