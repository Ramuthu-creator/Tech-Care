import React from "react";
import "../Styles/Signup.css";

const Signup = () => {
return (
<div className="signup-page">
<header className="header">
<div className="logo">
<img src="\assets\logo.png" alt="Logo" className="left-logo" />
<span>Tech Care</span>
</div>

    <nav className="nav">
      <a href="#">Contact us</a>
      <button className="login-btn">Login</button>
    </nav>
  </header>

  <h1>
      Tech Care <span>- IT Helpdesk Ticketing System</span>
    </h1>
    <p>
      Streamlining Campus IT Support — From Problem to Resolution in Just a
      Few Clicks.
    </p>

  <main className="form-section">
    
    <form className="signup-form">
      <input type="text" placeholder="Full Name*" />
      <input type="email" placeholder="Work Email*" />
      <input type="text" placeholder="Faculty Name*" />
      <input type="tel" placeholder="Phone Number*" />
      <button type="submit" className="signup-btn">
        Sign up
      </button>
    </form>
  </main>

  <p className="policy">
      By submitting this form, you agree to receive relevant updates and
      service communications from Tech Care subject to our Privacy Policy.
    </p>
</div>


);
};

export default Signup;