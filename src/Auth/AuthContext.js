import React, { Component, createContext } from "react"

const AuthContext = createContext()
const  { Consumer, Provider } = AuthContext


class AuthProvider extends Component {
  state = { isAuth: false }
  render() {
    return (
      <Provider value={{ isAuth: this.state.isAuth }}>
        {this.props.children}
      </Provider>
    )
  }
}

export { AuthProvider, Consumer as AuthConsumer }