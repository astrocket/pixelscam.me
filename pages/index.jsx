import React, { Component } from 'react'
import App from '../src/App.jsx'

class Index extends Component {

  render() {
    return (
      <App appProps={this.props}>
        <p style={{ color: 'red' }}>hi there, welcome to circus</p>
      </App>
    )
  }
}

export default Index
