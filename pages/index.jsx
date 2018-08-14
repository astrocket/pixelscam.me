import React, { Component } from 'react'
import App from '../src/App.jsx'
import Pixel from '../src/classes/Pixel.jsx'
import dynamic from 'next/dynamic'
const DynamicGame = dynamic(
  import('../src/classes/Game'),
  { ssr: false }
)

class Index extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <App appProps={this.props} hideHeader hideFooter>
        <Pixel />
        <DynamicGame />
      </App>
    )
  }
}

export default Index
