import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './screens/Login';
import Register from './screens/Register';
import Layout from './shared/Layout';

function App() {
  return (
    <Layout>
      <Switch>

        <Route exact path='/'>
          <Login />
        </Route>

        <Route exact path='/register'>
          <Register />
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
