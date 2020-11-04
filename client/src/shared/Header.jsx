import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  const { currentUser, handleLogout } = props;

  return (
    <header>
      <h1 className="logo">Symptomatic</h1>
      {currentUser ? (
        <div className="user-and-logout">
          <p className="username">{currentUser.username} is logged in</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="not-logged-in-link">
          <p>Have a new Symptom?</p>
          <Link className="bottom-login"to="/login">Login</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
