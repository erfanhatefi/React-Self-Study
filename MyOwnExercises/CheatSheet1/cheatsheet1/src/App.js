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
    const layerId = Date.now()
    tempLayers.push({info: '', id: layerId});
    this.setState({layers: tempLayers})
    //console.log('New Layers count:', tempLayers[0])
    console.log(this.state)
  }

  deleteLayer = (index) => {
    const tempLayers = [...this.state.layers]
    tempLayers.splice(index, 1)

    this.setState({layers: tempLayers})
  }

  changeHandler = (event, layerId) => {
    const layerIndex = this.state.layers.findIndex(layer => {
      return (layer.id === layerId)
    })    

    const tempLayers = [...this.state.layers]

    const newInfo = event.target.value
    tempLayers[layerIndex].info = newInfo
    //console.log(tempPersons[personIndex].name)

    this.setState({layers: tempLayers})
  }

  render() {
    let Layers = null
    
    Layers = (
      <div className="App">
        {
          this.state.layers.map((layer, index) => {
            return(
              <Layer info={layer.info}
              delete={() => this.deleteLayer(index)}
              change={(event) => this.changeHandler(event, layer.id)}
              key={layer.id}
              />
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