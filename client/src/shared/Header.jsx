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
          <p className="username"> Hey, {currentUser.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          <p>Have a new Symptom?</p>
          <Link to="/login">Login</Link>
        </>
      )}
    </header>
  );
};

export default Header;
