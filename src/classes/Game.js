import React, { Component } from 'react'
import {
  AppProvider, AppConsumer, appContext
} from '../contexts/AppContext'
import Unity, { UnityContent } from 'react-unity-webgl'

class Game extends Component {

  constructor(props) {
    super(props);
    this.unityContent = new UnityContent(
      "/static/unity/Build/Build.json",
      "/static/unity/Build/UnityLoader.js"
    );

    this.unityContent.on("Say", (message) => {
      console.log('GOTIT', message);
      //this.unityContent.send("Click", "Echo", message);
    });

    this.unityContent.on("progress", progression => {
      this.props.appActions.setUnityProgress(progression);
    });

    this.unityContent.on("loaded", () => {
      this.props.appActions.setGameLoading(false);
    });
  }

  render() {
    return(
        <div className="game-container">
            <Unity unityContent={this.unityContent} />
        </div>
    )
  }
}

export default appContext(Game)