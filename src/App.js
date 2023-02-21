

import HomeAfterLoginForUser from "./HomeAfterLoginForUser/HomeAfterLoginForUser";

import React from "react"
import Signup from "./Component/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Component/Dashboard"

import Login from "./Component/Login"
import PrivateRoute from "./Component/PrivateRoute"
import ForgotPassword from "./Component/ForgotPassword"
import UpdateProfile from "./Component/UpdateProfile"
<<<<<<< HEAD
import HomeAfterLoginForUser from "./HomeAfterLoginForUser/HomeAfterLoginForUser"
function App() {
  return (
  
       
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute path="/Home" component={HomeAfterLoginForUser} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/forgotpassword" component={ForgotPassword} />
=======

import logo from './logo.svg';
import './App.css';

function App() {
  return (

      
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/HomeAfterLoginForUser" component={HomeAfterLoginForUser} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/forgot-password" component={ForgotPassword} />
>>>>>>> master
              <Route path="/" component={Login} />
             
            </Switch>
          </AuthProvider>
        </Router>
<<<<<<< HEAD
        
=======
>>>>>>> master
  
  )
  }

export default App
