import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login.js'
import App from './App.js'

const Router = () => (
  <BrowserRouter>
    <switch>
      <Route exact path="/" component={Login} />
      <Route path="/app" component={App} />
    </switch>
  </BrowserRouter>
);

export default Router;
