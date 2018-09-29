import React, { Component } from 'react'
import GameBoard from './gameBoard'

export default class TicTacToe extends Component {
  state = {}

  render() {
    return (
      <div className="ticTacToe-container">
        Tic Tac Toe!
        <GameBoard />
      </div>
    )
  }
}
