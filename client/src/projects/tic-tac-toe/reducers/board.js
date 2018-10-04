import { PLAY_MOVE } from '../actions'

const initialState = [[null, null, null], [null, null, null], [null, null, null]]

const playMove = (grid, row, col, player) => {
  const newGrid = []
  let altered = false

  for (let r = 0; r < grid.length; r += 1) {
    newGrid.push([])
    for (let c = 0; c < grid[r].length; c += 1) {
      if (r === row && c === col) {
        newGrid[r].push(player)
        altered = true
      } else {
        newGrid[r].push(grid[r][c])
      }
    }
  }

  // TODO: refactor to just return the new grid
  return { grid: newGrid, altered }
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case PLAY_MOVE: {
      const { row, col, player } = action.payload
      const result = playMove(state, row, col, player)
      return result.grid
    }
    default:
      return [...state]
  }
}
