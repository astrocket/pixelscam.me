import React, { Component } from 'react'
import {
  AppProvider, AppConsumer, appContext
} from '../contexts/AppContext'
import {
  Spin, Icon, Progress
} from 'antd'

class Loading extends Component {
  render() {
    const { pixelLoading, gameLoading, unityProgress } = this.props.appState;

    if ( !pixelLoading && !gameLoading ) {
      return null;
    }

    return(
      <div className="app-loading">
          <Progress key={unityProgress} type="circle" percent={unityProgress * 100} format={percent => `${parseInt(percent)} %`} />
      </div>
    )
  }
}

export default appContext(Loading)