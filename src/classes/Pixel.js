import React, { Component } from 'react'
import {
  AppProvider, AppConsumer, appContext
} from '../contexts/AppContext'
import {
  Button, Popover, Divider
} from 'antd'

const PixelContent = ({pixel}) => {
  return (
    <div>
      {pixel.id}
      <Divider />
      <Button type="danger">Steal this pixel.</Button>
    </div>
  )
};

class Pixel extends Component {

  constructor(props) {
    super(props);
    this.props.appActions.setPixels(this.props.pixels)
  }

  componentDidMount() {
    this.props.appActions.setPixelLoading(false);
  }

  renderPixels = (pixels) => {
    return pixels.map((pixel) => {
      return (
        <Popover key={pixel.id} content={<PixelContent pixel={pixel} />} title={`${pixel.owner}'s planet`} trigger="hover"
        overlayClassName="pixel-unit"
        >
          <div>
            <div className="pixel-unit"></div>
          </div>
        </Popover>
      )
    })
  }

  render() {
    return(
        <div className="pixel-container">
            <div className="pixel-panel">
              <h1>Pixel Board 50 * 25 = 1250 pixels.</h1>
            </div>
            <div className="pixel-board">
              {this.renderPixels(this.props.appState.pixels)}
            </div>
        </div>
    )
  }
}

export default appContext(Pixel)