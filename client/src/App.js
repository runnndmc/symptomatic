import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './screens/Login';
import Layout from './shared/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
