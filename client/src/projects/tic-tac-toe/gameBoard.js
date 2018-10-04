import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { playMove as _playMove, changePlayer as _changePlayer } from './actions'

const Cell = ({ applyClick, row, col, board }) => {
  const icon = board[row][col]

  return (
    <div
      className="ticTacToe-cell"
      onClick={() => applyClick(row, col)}
      onKeyPress={() => applyClick(row, col)}
      role="button"
      tabIndex={-1}
    >
      <div className="ticTacToe-cell__content">{icon === null ? '' : icon.icon}</div>
    </div>
  )
}

Cell.propTypes = {
  applyClick: PropTypes.func.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
}

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

/* <div
      className="ticTacToe-cell"
      onClick={applyClick(0, 0)}
      onKeyPress={applyClick(0, 0)}
      role="button"
      tabIndex={-1}
    >
      <div className="ticTacToe-cell__content">{board[0][0]}</div>
    </div>

    <div
      className="ticTacToe-cell"
      onClick={applyClick(0, 1)}
      onKeyPress={applyClick(0, 1)}
      role="button"
      tabIndex={-1}
    >
      <div className="ticTacToe-cell__content">{board[0][1]}</div>
    </div>

    <div className="ticTacToe-cell">
      <div className="ticTacToe-cell__content">{board[0][2]}</div>
    </div>

    <div className="ticTacToe-cell">
      <div className="ticTacToe-cell__content">{board[1][0]}</div>
    </div>

    <div className="ticTacToe-cell">
      <div className="ticTacToe-cell__content">{board[1][1]}</div>
    </div>

    <div className="ticTacToe-cell">
      <div className="ticTacToe-cell__content">{board[1][2]}</div>
    </div>

    <div className="ticTacToe-cell">
      <div className="ticTacToe-cell__content">{board[2][0]}</div>
    </div>

    <div className="ticTacToe-cell">
      <div className="ticTacToe-cell__content">{board[2][1]}</div>
    </div>

    <div className="ticTacToe-cell">
      <div className="ticTacToe-cell__content">{board[2][2]}</div>
    </div>

GameBoard.defaultProps = {
  board: [[null, null, null], [null, null, null], [null, null, null]],
  applyClick: () => {},
}

GameBoard.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  applyClick: PropTypes.func,
} */
