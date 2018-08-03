import React, { Component } from 'react'
import App from '../src/App.jsx'
import Unity, { UnityContent } from 'react-unity-webgl'

class Index extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: false
    }
    this.unityContent = new UnityContent(
      "/static/unity/Build/build.json",
      "/static/unity/Build/UnityLoader.js"
    );
  }

  componentDidMount() {
    this.setState({isLoading: true})
  }

  render() {
    return (
      <App appProps={this.props}>
        <p style={{ color: 'red' }}>hi there, welcome to circus</p>
        {this.state.isLoading && <Unity unityContent={this.unityContent} />}
      </App>
    )
  }
}

export default Index
