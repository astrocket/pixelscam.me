import React, { Component } from 'react'
import {
    AppProvider, AppConsumer, appContext
  } from "./contexts/AppContext"

class AppHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="header">
              <h6>header</h6>
            </div>
        )
    }
}

export default appContext(AppHeader)