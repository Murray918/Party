import React, { Component, createContext } from "react"

const AuthContext = createContext()
const { Consumer, Provider } = AuthContext

class AuthProvider extends Component {
  state = { isAuth: false }

  login = () => {
    this.setState({
      isAuth: true
    })
  }

  logOut = () => {
    this.setState({
      isAuth: false
    })
  }
  render() {
    return (
      <Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { AuthProvider, Consumer as AuthConsumer }
