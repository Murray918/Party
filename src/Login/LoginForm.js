import React, { Component } from "react"

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

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("it has been submited")
  }

  render() {
    return (
      <div className='shadow '>
        <form  onSubmit={this.handleSubmit}>
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
              <input className='button-primary' type='submit' value='Login' />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
