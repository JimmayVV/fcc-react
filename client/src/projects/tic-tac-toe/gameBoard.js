import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { playMove as _playMove, changePlayer as _changePlayer } from './actions'
import gameHelper from './helpers/game'

import Cell from './cell'

class GameBoard extends React.Component {
  static propTypes = {
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
    players: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        human: PropTypes.bool.isRequired,
      })
    ).isRequired,
    currentPlayer: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      human: PropTypes.bool.isRequired,
    }).isRequired,
    playMove: PropTypes.func.isRequired,
    changePlayer: PropTypes.func.isRequired,
  }

  applyClick = (row, col) => {
    const { playMove, changePlayer, players, currentPlayer, board } = this.props
    let winner // let { winner } = this.state || this.props

    if (board[row][col] !== null || winner) return

    const newPlayer = currentPlayer.icon === players[0].icon ? players[1] : players[0]

    playMove(row, col, currentPlayer)

    // Make a new board object so that we can add the move just played before calculating winners
    const newBoard = board.map((_row, rowIndex) =>
      _row.map((_col, colIndex) => {
        // If the current move index is selected, then play add this move to the new board
        // Otherwise it's going to still think it's null (most likely due to async redux)
        if (rowIndex === row && colIndex === col) return currentPlayer.icon
        return _col === null ? null : _col.icon
      })
    )

    winner = gameHelper.winner(newBoard)

    const validMoves = gameHelper.validMoves(newBoard)

    // If there is no winner, the nextPlayer is computer, and there are valid moves left, then play the ocmputer move
    if (!winner && !newPlayer.human && validMoves.length > 0) {
      const move = gameHelper.getEasyMove(validMoves)
      playMove(move.row, move.col, newPlayer)
      // Now check if the computer won
      newBoard[move.row][move.col] = newPlayer.icon
      winner = gameHelper.winner(newBoard)
      // changePlayer(newPlayer.icon === players[0].icon ? players[1] : players[0])
    } else {
      // If there is no computer player then simply change who the current player is
      changePlayer(newPlayer)
    }

    // Check if there is a winner, and do something about it
    if (winner) {
      alert(`Winner! ${winner}`)
      // this.setState({ winner })
    }
  }

  computerMove = difficulty => {
    if (difficulty === 'HARD') {
      // Hard mode logic (minimax)
    } else {
      // Easy mode logic (just pick a random move)
    }
  }

  render() {
    const { board } = this.props

    return (
      <div className="ticTacToe-board">
        <Cell row={0} col={0} applyClick={this.applyClick} board={board} />
        <Cell row={0} col={1} applyClick={this.applyClick} board={board} />
        <Cell row={0} col={2} applyClick={this.applyClick} board={board} />
        <Cell row={1} col={0} applyClick={this.applyClick} board={board} />
        <Cell row={1} col={1} applyClick={this.applyClick} board={board} />
        <Cell row={1} col={2} applyClick={this.applyClick} board={board} />
        <Cell row={2} col={0} applyClick={this.applyClick} board={board} />
        <Cell row={2} col={1} applyClick={this.applyClick} board={board} />
        <Cell row={2} col={2} applyClick={this.applyClick} board={board} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    board: state.board,
    players: state.players,
    currentPlayer: state.currentPlayer,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ playMove: _playMove, changePlayer: _changePlayer }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard)
