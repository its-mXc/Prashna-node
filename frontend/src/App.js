import React from 'react';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/header'
import Login from './components/login';
import Signup from './components/signup'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </BrowserRouter>
  );
}

export default App;
