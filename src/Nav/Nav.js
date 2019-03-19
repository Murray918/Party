import React, { Component } from "react"
import { NavLink, Link  } from "react-router-dom"
import { AuthConsumer } from '../Auth/AuthContext'

export default class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <AuthConsumer>
          {({ isAuth }) => (
            <div>
              <h4>
                <Link to='/'>Home</Link>
              </h4>
              {!isAuth ? (
                <NavLink to='/login'>Login</NavLink>
              ) : (
                <NavLink to='/logout'>Logout</NavLink>
              )}
            </div>
          )}
        </AuthConsumer>
        {this.props.children}
      </div>
    )
  }
}
