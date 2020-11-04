import React from "react";
import { Link } from "react-router-dom";
import './home.css';

const Home = (props) => {
  const { currentUser } = props;

  return (
    <>
      {currentUser ? (
        <>
          <p className="username"> Hey, {currentUser.username}!</p>
          <Link to={"/symptoms/new"}>
            <h3>Add New Symptom</h3>
          </Link>
          <Link to={"/symptoms"}>
            <h3>My Symptoms</h3>
          </Link>
        </>
      ) : (
        <div className="no-login-home-container">
            <h3>Not logged in Home - insp env - grid with powder blue eyeshadow to be coughing etc</h3>
        </div>
      )}
    </>
  );
};

export default Home;
