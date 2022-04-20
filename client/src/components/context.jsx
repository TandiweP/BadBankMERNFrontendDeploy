import React from "react";

export const UserContext = React.createContext();
class ContextProvider extends React.Component {
  state = {
    loggedIn: false,
    userName: '',
    email: ''
  }
  render() {
    return (
      <UserContext.Provider value={
        {
          state: this.state,
          setUserInfo: ({ value }) => this.setState({ value })
        }}>
        {this.props.children})
      </UserContext.Provider>)
  }
}

export default ContextProvider;

