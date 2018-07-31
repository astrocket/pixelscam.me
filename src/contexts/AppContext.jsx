import React, { Component } from 'react'
const Context = React.createContext()
const { Provider, Consumer: AppConsumer } = Context

class AppProvider extends Component {
    state = {
        sampleData: false,
    }

    actions = {
        setSampleData: (sampleData) => {
            this.setState({ sampleData });
        }
    }

    apis = {

    }

    render() {
        const { state, actions, apis } = this;
        const value = { state, actions, apis };
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

function appContext(WrappedComponent) {
    return function AppContext(props) {
        return (
            <AppConsumer>
                {
                    ({ state, actions, apis }) => (
                        <WrappedComponent
                            {...props}
                            appState={state}
                            appActions={actions}
                            appApis={apis}
                        />
                    )
                }
            </AppConsumer>
        )
    }
}

export {
    AppProvider,
    AppConsumer,
    appContext
}