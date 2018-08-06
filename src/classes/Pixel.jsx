import React, { Component } from 'react'
import {
  AppProvider, AppConsumer, appContext
} from '../contexts/AppContext'

class Pixel extends Component {

  toggleSample = () => {
    this.props.appActions.setSampleData(!this.props.appState.sampleData)
  }

  render() {
    return(
        <div className="pixel-container">
            <p>{JSON.stringify(this.props.appState.sampleData)}</p>
            <h1>Pixel Board</h1>
            <button onClick={this.toggleSample}>toggle appContext global data</button>
        </div>
    )
  }
}

export default appContext(Pixel)