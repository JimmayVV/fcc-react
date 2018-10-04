import React from 'react'
import PropTypes from 'prop-types'

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

export default Cell
