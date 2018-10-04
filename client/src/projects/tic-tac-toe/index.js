import React from 'react'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import { resetBoard } from './actions'

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

const Heading = connect(
  null,
  { resetBoard }
)(props => (
  <>
    Tic Tac Toe!
    <button type="button" onClick={() => props.resetBoard()}>
      Reset
    </button>
  </>
))

const TicTacToe = props => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div className="ticTacToe-container">
      <Heading />
      <GameBoard {...props} />
    </div>
  </Provider>
)

export default TicTacToe
