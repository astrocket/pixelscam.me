import React, { Component } from 'react'
const Context = React.createContext()
const { Provider, Consumer: SampleConsumer } = Context
import { appContext } from './AppContext'
import RailsApi from '../../config/RailsApi'

class SampleProvider extends Component {

  // Context 에 포함되는 전역 state
  state = {
    sampleData: false,
    helloWorld: null
  }

  // state 를 변경하는 프론트엔드 로직
  actions = {
    setSampleData: (sampleData) => {
      this.setState({ sampleData });
    }
  }

  // Context 에 관련해서 서버에서 사전에 받아와야 하는 부분
  componentDidMount() {
    RailsApi.homeIndex.then((data) => this.setState({ helloWorld: JSON.stringify(data) }))
  }

  render() {
    const { state, actions } = this;
    const value = { state, actions };
    //{ (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') && console.log("sampleState : ", state) }
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

function sampleContext(WrappedComponent) {
  return class AppContext extends Component {

    static getInitialProps(ctx) {
      if (WrappedComponent.getInitialProps)
        return WrappedComponent.getInitialProps(ctx);
    }

    render() {
      return (
        <SampleConsumer>
          {({ state, actions }) => (
            <WrappedComponent
              {...this.props}
              sampleState={state}
              sampleActions={actions}
            />)}
        </SampleConsumer>
      )
    }
  }
}

export {
  SampleProvider,
  SampleConsumer,
  sampleContext
}
