import React, { Component } from 'react';
import './App.css';
import Validation from './Components/Validation/ValidationComponent.js'
import Char from './Components/Char Component/CharComponent.js'

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
    const charList = this.state.userInput.split("").map((ch, index) => {
      return <Char character={ch} key={index}/>
    })


    return (
       <div>
          <header>
            Header
          </header>
          <input type='text' onChange={this.inputChangeHandler} value={this.state.userInput}/>
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length}/>
          {charList}
        </div>
      );
    }
}

export default App;
