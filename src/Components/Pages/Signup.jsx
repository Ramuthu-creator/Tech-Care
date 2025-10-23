import React from "react";
import "../Styles/Signup.css";

const Signup = () => {
  return (
    <div className="signup-page">
      <header className="header">
        <div className="logo">
          <span>Tech Care</span>
        </div>
        <div className="nav">
          <a href="#">Contact us</a>
          <button className="login-btn">Login</button>
        </div>
      </header>

      <main className="form-section">
        <h1>
          Tech Care <span>- IT Helpdesk Ticketing System</span>
        </h1>
        <p>
          Streamlining Campus IT Support — From Problem to Resolution in Just a
          Few Clicks.
        </p>

        <form className="signup-form">
          <input type="text" placeholder="Full Name*" />
          <input type="email" placeholder="Work Email*" />
          <input type="text" placeholder="Faculty Name*" />
          <input type="tel" placeholder="Phone Number*" />
          <button type="submit" className="signup-btn">
            Sign up
          </button>
        </form>

        <p className="policy">
          By submitting this form, you agree to receive relevant updates and
          service communications from Tech Care subject to our Privacy Policy.
        </p>
      </main>
    </div>
  );
};

export default Signup;
