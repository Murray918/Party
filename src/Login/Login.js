import React, { Component } from "react"
import LoginForm from "./LoginForm"
import "./login.css"

export default class Login extends Component {
  state = {
    isLoggedIn: false,
    isMember: false,
    
  }
  render() {
    return (
      <div className='container login-wrapper'>
        <LoginForm />
      </div>
    )
  }
}
