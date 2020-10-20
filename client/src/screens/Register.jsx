import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => { //when are we changing it
    const { name, value } = e.target; //what are we changing when we're envoked
    setFormData((prevState) => ({//what state are we changing it to
      ...prevState, //how do we insert it
      [name]: value, //how it it being saved
    }));
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(formData);
        }}
      >
        <h2>Register</h2>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button>Become Fam</button>
      </form>
      <h5>Already Symptomatic?</h5>
      <Link to="/login">
        <h5>Login Here</h5>
      </Link>
    </>
  );
};

export default Register;
