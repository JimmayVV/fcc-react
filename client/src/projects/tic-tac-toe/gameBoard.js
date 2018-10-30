import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {playMove as _playMove, changePlayer as _changePlayer, endGame as _endGame, TIE_GAME} from './actions'
import gameHelper from './helpers/game'

import Cell from './cell'

class GameBoard extends React.Component {
  applyClick = pos => {
    const {playMove, changePlayer, players, currentPlayer, board, endGame, gameOver} = this.props

    if (board[pos] !== null || gameOver) return

    const newPlayer = currentPlayer.icon === players[0].icon ? players[1] : players[0]

    playMove(pos, currentPlayer)

    // Make a new board object so that we can add the move just played before calculating winners
    const newBoard = board.map((_pos, index) => {
      if (index === pos) return currentPlayer.icon
      return _pos === null ? null : _pos.icon
    })

    let winner = gameHelper.winner(newBoard)

    const validMoves = gameHelper.validMoves(newBoard)

    // If there is no winner, the nextPlayer is computer, and there are valid moves left, then play the ocmputer move
    if (!winner && !newPlayer.human && validMoves.length > 0) {
      const move = gameHelper.getEasyMove(validMoves)
      playMove(move.pos, newPlayer)
      // Now check if the computer won
      newBoard[move.pos] = newPlayer.icon
      winner = gameHelper.winner(newBoard)
      // changePlayer(newPlayer.icon === players[0].icon ? players[1] : players[0])
    } else {
      // If there is no computer player then simply change who the current player is
      changePlayer(newPlayer)
    }

    // Check if there is a winner, and do something about it
    if (winner) {
      endGame(winner)
      // this.setState({ winner })
    } else if (validMoves.length === 0) {
      endGame(TIE_GAME)
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
    const {board, gameOver, gameStarted} = this.props

    return (
      <div className={`ticTacToe-board ${gameOver || !gameStarted ? 'modal-open' : ''}`} data-testid="gameboard">
        <Cell pos={0} applyClick={this.applyClick} board={board} data-testid="cell1" />
        <Cell pos={1} applyClick={this.applyClick} board={board} data-testid="cell2" />
        <Cell pos={2} applyClick={this.applyClick} board={board} data-testid="cell3" />
        <Cell pos={3} applyClick={this.applyClick} board={board} data-testid="cell4" />
        <Cell pos={4} applyClick={this.applyClick} board={board} data-testid="cell5" />
        <Cell pos={5} applyClick={this.applyClick} board={board} data-testid="cell6" />
        <Cell pos={6} applyClick={this.applyClick} board={board} data-testid="cell7" />
        <Cell pos={7} applyClick={this.applyClick} board={board} data-testid="cell8" />
        <Cell pos={8} applyClick={this.applyClick} board={board} data-testid="cell9" />
      </div>
    )
  }
}

// PropTypes validation
GameBoard.propTypes = {
  board: PropTypes.arrayOf(PropTypes.object).isRequired,
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
  endGame: PropTypes.func.isRequired,
  gameOver: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  gameStarted: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
}

function mapStateToProps(state) {
  return {
    board: state.board,
    players: state.players,
    currentPlayer: state.currentPlayer,
    gameOver: state.gameOver,
    gameStarted: state.gameStarted,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({playMove: _playMove, changePlayer: _changePlayer, endGame: _endGame}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard)
