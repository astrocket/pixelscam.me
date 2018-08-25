import React, { Component } from 'react'
const Context = React.createContext()
const { Provider, Consumer: AppConsumer } = Context
import Cookies from 'js-cookie'

class AppProvider extends Component {
  state = {
    _sha256token: Cookies.get('_sha256token'),
    sampleData: 'default',
    pixels: [{id: 0, owner: 'astro'}],
    gameLoading: true,
    pixelLoading: true,
    unityProgress: 0,
  }

  actions = {
    setSha256token: (_sha256token) => this.setState({ _sha256token }),
    setSampleData: (sampleData) => this.setState({ sampleData }),
    setPixels: (pixels) => this.setState({ pixels }),
    setPixelLoading: (pixelLoading) => this.setState({ pixelLoading }),
    setGameLoading: (gameLoading) => this.setState({ gameLoading }),
    setUnityProgress: (unityProgress) => this.setState({ unityProgress }),
  }

  render() {
    const { state, actions } = this;
    const value = { state, actions };
    //{ (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') && console.log("appState : ", state) }
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

function appContext(WrappedComponent) {
  return class AppContext extends Component {

    static getInitialProps(ctx) {
      if (WrappedComponent.getInitialProps)
        return WrappedComponent.getInitialProps(ctx);
    }

    render() {
      return (
        <AppConsumer>
          {({ state, actions }) => (
            <WrappedComponent
              {...this.props}
              appState={state}
              appActions={actions}
            />)}
        </AppConsumer>
      )
    }
  }
}

export {
  AppProvider,
  AppConsumer,
  appContext
}
