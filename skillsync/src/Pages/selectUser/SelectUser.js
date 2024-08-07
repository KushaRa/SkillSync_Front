import React from "react";
import "./SelectUser.css"; //import SelectUser.css file
import { Link } from "react-router-dom";

const SelectUser = () => {
  return (
    <div className="select-user">
      <div className="select-user-content">
        <div className="job-seekers">
          <h2>For Companies</h2>
          <p>Find valuable hands-on experience to boost your career.</p>
          <button className="login-buttonSC">
            <Link to="/companyregistration">Sign up</Link>
          </button>
          <p>
            Already have an account? <br></br>
            <Link to="/login">
              <span className="signup-link">Log In</span>
            </Link>
          </p>
        </div>
        <div className="companies">
          <h2>For Job Seekers</h2>
          <p>Post opportunities and find talented interns.</p>
          <button className="login-buttonSC">
            <Link to="/createacc">Sign up</Link>
          </button>
          <p>
            Already have an account? <br></br>
            <Link to="/login">
              <span className="signup-link">Log In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectUser;
