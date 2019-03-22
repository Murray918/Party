import React, { Component } from "react"
import "./App.css"
import Login from "./Login/Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./Nav/Nav"
import { AuthProvider } from "./Auth/AuthContext"
import  Logout from './Nav/Logout'

export default class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <Nav>
            <Switch>
              <Route exact path='/'/>
              <Route path='/login' component={Login} />
            </Switch>
          </Nav>
        </AuthProvider>
      </Router>
    )
  }
}