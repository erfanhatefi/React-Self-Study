import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputComponent from './Components/InputComponent/InputComponent.js'
import OutputComponent from './Components/OutputComponent/OutputComponent.js'

class App extends Component {

  state = {
    name: 'Randkill'
  }

  userNameChangeHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Assignment 1</h1>
        <InputComponent change={this.userNameChangeHandler} username={this.state.name}/>
        <OutputComponent username={this.state.name}/>
        <OutputComponent username={this.state.name}/>

      </div>
    );
  }
}

export default App;
