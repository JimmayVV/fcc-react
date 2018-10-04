import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { playMove as _playMove, changePlayer as _changePlayer } from './actions'

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

    if (board[row][col] !== null) return

    const newPlayer = currentPlayer.icon === players[0].icon ? players[1] : players[0]

    playMove(row, col, currentPlayer)
    changePlayer(newPlayer)
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
