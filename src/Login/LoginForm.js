import React, { Component } from "react"
import { AuthConsumer } from "../Auth/AuthContext"

export default class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  handleSubmit = (fn, event) => {
    event.preventDefault()
    console.log("it has been submited")
    fn()
  }

  render() {
    return (
      <AuthConsumer>
        {({ login }) => (
          <div className='shadow '>
            <form onSubmit=   {(event) => this.handleSubmit(login, event)}>
              <div className='form-wrapper'>
                <div>
                  <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor='exampleEmailInput'>&nbsp; </label>
                  <input
                    className='button-primary'
                    type='submit'
                    value='Login'
                  />
                </div>
              </div>
            </form>
          </div>
        )}
      </AuthConsumer>
    )
  }
}