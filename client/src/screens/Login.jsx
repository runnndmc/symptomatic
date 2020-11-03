import React, { useState } from "react";
import { Link } from "react-router-dom";

import './Login.css'

const Login = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className='login-container'>
      
      <form 
        className='login-form'
        onSubmit={(e) => { //track an event
          e.preventDefault(); //but prevent it from happening on render
          handleLogin(formData); //set state of handle function to the
        }}
      >
        <h2 className='login-title'>Login</h2>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <label className='login-password'>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button>Come on In</button>
      </form>
      <h5>New to Symptomatic?</h5>
      <Link to="/register">
        <h5 className='link-register'>Register Here</h5>
      </Link>
    </div>
  );
};

export default Login;
