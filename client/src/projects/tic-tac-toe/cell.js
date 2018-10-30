import React from 'react'
import PropTypes from 'prop-types'

const Cell = ({applyClick, pos, board}) => {
  const icon = board[pos]

  return (
    <div
      className="ticTacToe-cell"
      onClick={() => applyClick(pos)}
      onKeyPress={() => applyClick(pos)}
      role="button"
      tabIndex={-1}
      data-testid="cell"
    >
      <div className="ticTacToe-cell__content" data-testid="cell-content">
        {icon === null ? '' : icon.icon}
      </div>
    </div>
  )
}

Cell.propTypes = {
  applyClick: PropTypes.func.isRequired,
  pos: PropTypes.number.isRequired,
  board: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Cell
