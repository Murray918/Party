import React, { Component } from 'react'

export default class Post extends Component {
state = {
    email: "",
    message: "",
    shouldSendCopy: false,
    reasons: ["Currious", "Complaint", "Satisfied"],
    reasonChosen : ''
  }

  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  handleCheckBox = (event) => {
    return !!this.state.shouldSendCopy
      ? this.setState({ shouldSendCopy: false })
      : this.setState({ shouldSendCopy: true })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    const options = this.state.reasons.map((reason, index) => {
      return (
        <option key={index} value={this.state.reasons[index]}>
          {reason}
        </option>
      )
    })

    return (
      <div className='container'>
        <h1>Hello To the World Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='six columns'>
              <label for='exampleEmailInput'>Your email</label>
              <input
                className='u-full-width'
                type='email'
                placeholder='test@mailbox.com'
                id='exampleEmailInput'
                name='email'
                vlaue={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className='six columns'>
              <label for='exampleRecipientInput'>Reason for contacting</label>
              <select className='u-full-width' id='exampleRecipientInput'
              value = {this.state.reasonIndex}
              onChange={this.handleChange}
              name = 'reasonIndex'
              >
                {options}
              </select>
            </div>
          </div>
          <label for='exampleMessage'>Message</label>
          <textarea
            className='u-full-width'
            placeholder='Hi Dave …'
            id='exampleMessage'
            name='message'
            value={this.state.message}
            onChange={this.handleChange}
          />
          <label className='example-send-yourself-copy'>
            <input
              type='checkbox'
              name='shouldSendCopy'
              value={this.state.shouldSendCopy}
              onChange={this.handleCheck}
            />
            <span className='label-body'>Send a copy to yourself</span>
          </label>
          <input className='button-primary' type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}