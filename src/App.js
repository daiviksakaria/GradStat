import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import UserView from './components/userView/UserView';
import { authoriseUser } from './data/login/loginHelpers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      componentToRender: '',
      username: '',
      password: '',
      validityCheck: false,
      isClicked: false
    }
  }

  handleUserNameChange = (e) => {
    e.persist();
    this.setState(() => ({
      username: e.nativeEvent.target.value,
    }));
  };

  handlePasswordChange = (e) => {
    e.persist();
    this.setState(() => ({
      password: e.nativeEvent.target.value,
    }));
  };

  handleLogOut = () => {
    this.setState((prevState) => ({
      isLoggedIn: false,
      validityCheck: false,
    }))
  };

  handleLogIn = (username, password) => {
    if(authoriseUser(username, password)) {
      this.setState(() => ({
        isLoggedIn: true,
        componentToRender: authoriseUser(username, password),
      }))
    } else {
      this.setState(() => ({
        validityCheck: true,
      }))
    }
    this.setState({isClicked:true});
  };

  render() {
    return (
        this.state.isLoggedIn ? <UserView
            handleLogOut={this.handleLogOut}
            component={this.state.componentToRender}
            id={this.state.username}
        /> : <Login
            handleLogIn={this.handleLogIn}
            handleUserNameChange={this.handleUserNameChange}
            handlePasswordChange={this.handlePasswordChange}
            username={this.state.username}
            password={this.state.password}
            validityCheck={this.state.validityCheck}
            isClicked={this.state.isClicked}
        />
    );
  }
}

export default App;
