import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

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
        <>
        <h3>Not logged in Home</h3>
        </>
      )}
    </>
  );
};

export default Home;
