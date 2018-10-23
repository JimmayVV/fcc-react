import React from 'react'
import { Provider, connect } from 'react-redux'
import store from './stores/gameStore'

import { resetBoard, changePlayer } from './actions'

import GameBoard from './gameBoard'
import './tic-tac-toe.css'

export const Heading = connect(
  state => ({ players: state.players }), // MapStateToProps
  { resetBoard, changePlayer } // MapDispatchToProps
)(props => (
  <>
    Tic Tac Toe!
    <button
      type="button"
      onClick={() => {
        props.resetBoard()
        props.changePlayer(props.players[0]) // Reset player back to player 1, in case player 2 is currently active
      }}
    >
      Reset
    </button>
  </>
))

const TicTacToe = props => (
  <Provider store={store}>
    <div className="ticTacToe-container">
      <Heading />
      <GameBoard {...props} />
    </div>
  </Provider>
)

export default TicTacToe

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
