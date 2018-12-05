import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';

import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'default',
  };

  usernameChangedHandler(event) {
    const { value, } = event.target;
    this.setState({
      username: value,
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.usernameChangedHandler.bind(this)}
          username={this.state.username}
        />
        <UserOutput
          username={this.state.username} />
        <UserOutput
          username={this.state.username} />
      </div>
    );
  }
}

export default App;
