import React, { Component } from 'react'
import Radium from 'radium'
import IRC from 'twitch-irc-lite'

import style from './styles.radium.es6'

@Radium
export default class extends Component {
  render() {
    return(
      <div style={style.twitchChat}>
      </div>
    )
  }
}
