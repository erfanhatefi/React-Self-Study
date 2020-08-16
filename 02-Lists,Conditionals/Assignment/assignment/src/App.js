import React, { Component } from 'react';
import './App.css';
import Validation from './Components/ValidationComponent.js'

class App extends Component{
  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    let inputValue=event.target.value
    console.log(inputValue.length)
    this.setState({userInput : inputValue})
  }

  render() {
    return (
       <div>
          <header>
            Header
          </header>
          <input type='text' onChange={this.inputChangeHandler} value={this.state.userInput}/>
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length}/>
        </div>
      );
    }
}

export default App;
