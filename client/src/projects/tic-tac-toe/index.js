import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

import GameBoard from './gameBoard'
import './tic-tac-toe.css'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

/*
const Players = {
  X: 'X',
  O: 'O',
}

export default class TicTacToe extends Component {

  state = {
    board: [[null, null, null], [null, null, null], [null, null, null]],
    turn: Players.X,
    computer: null,
  }
  

  applyClick = (row, col) => {
    this.setState(state => {
      const { board } = state
      let { turn } = state

      if (board[row][col] === null) {
        board[row][col] = turn
        turn = turn === Players.X ? Players.O : Players.X
      } else {
        console.log('This cell has already been used')
      }

      return { board, turn }
    })
  }

  playComputerMove = () => {}

  render() {
    // const { board } = this.state

    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="ticTacToe-container">
          Tic Tac Toe!
          <GameBoard />
        </div>
      </Provider>
    )
  }
}
*/

export default function TicTacToe(props) {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <div className="ticTacToe-container">
        Tic Tac Toe!
        <GameBoard {...props} />
      </div>
    </Provider>
  )
}
