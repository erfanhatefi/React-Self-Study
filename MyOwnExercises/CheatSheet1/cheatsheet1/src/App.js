import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layer from './Components/Layers/Layer.js'

class App extends Component {
  state = {
    layers: []
  }

  clickButton = () => {
    console.log('Button Clicked !')

    const tempLayers = [...this.state.layers]

    tempLayers.push({info: '2'});
    this.setState({layers: tempLayers})
    //console.log('New Layers count:', tempLayers[0])
    console.log(this.state)

  }

  render() {
    let Layers = null
    
    Layers = (
      <div className="App">
        {
          this.state.layers.map((layer) => {
            return(
              <Layer info={layer.info}/>
            )
          })
        }
      </div>
    )
    
    return (
      <div className="App">
        {Layers}
        <button className="AddButton" onClick={this.clickButton}>+</button>
      </div>
    );
  }
}

export default App;