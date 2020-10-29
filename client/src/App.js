import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import "./App.css";
import Layout from "./shared/Layout";
import MainContainer from "./containers/MainContainer";
import Login from "./screens/Login";
import Register from "./screens/Register";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const currentUser = await verifyUser();
      setCurrentUser(currentUser);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    //call an async function that takes in form data
    const currentUser = await loginUser(formData); // await a response - grab the loginUser function that calls the api and verifies token
    setCurrentUser(currentUser); //set the state to be the resp
    history.push('/'); //return it back to the homepage
  };

  const handleRegister = async (formData) => {
    //call an async function that takes in form data
    const currentUser = await registerUser(formData); // await a response - grab the loginUser function that calls the api and verifies token
    setCurrentUser(currentUser); //set the state to be the resp
    history.push('/'); //return it back to the homepage
  };

  const handleLogout = () => {
    //call an anonymous
    localStorage.removeItem("authToken");
    removeToken();
    setCurrentUser(null);
    history.push('/login')
  };
  return (
      <Layout 
        currentUser={currentUser} 
        handleLogout={handleLogout}
      >

        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>

          <Route path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>

          <Route path='/'>
            <MainContainer
              currentUser={currentUser}
            />
          </Route>

        </Switch>
      </Layout>
  );
}

export default App;
