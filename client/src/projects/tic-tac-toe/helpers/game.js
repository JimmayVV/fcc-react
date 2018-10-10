const gameHelper = {
  winner: grid => {
    // Rows
    if (grid[0][0] !== null && grid[0][0] === grid[0][1] && grid[0][1] === grid[0][2]) return grid[0][0]
    if (grid[1][0] !== null && grid[1][0] === grid[1][1] && grid[1][1] === grid[1][2]) return grid[1][0]
    if (grid[2][0] !== null && grid[2][0] === grid[2][1] && grid[2][1] === grid[2][2]) return grid[2][0]

    // Cols
    if (grid[0][0] !== null && grid[0][0] === grid[1][0] && grid[1][0] === grid[2][0]) return grid[0][0]
    if (grid[0][1] !== null && grid[0][1] === grid[1][1] && grid[1][1] === grid[2][1]) return grid[0][1]
    if (grid[0][2] !== null && grid[0][2] === grid[1][2] && grid[1][2] === grid[2][2]) return grid[0][2]

    // Diags
    if (grid[0][0] !== null && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) return grid[0][0]
    if (grid[2][0] !== null && grid[2][0] === grid[1][1] && grid[1][1] === grid[0][2]) return grid[2][0]

    // Default return
    return false
  },
  // TODO: Add validation functions which we can call at the top of each helper
  validMoves: grid => {
    const validMoves = []

    // if (this.winner(grid)) {
    for (let r = 0; r < grid.length; r += 1) {
      for (let c = 0; c < grid[r].length; c += 1) {
        if (grid[r][c] === null) validMoves.push({ row: r, col: c })
      }
    }
    // }

    return validMoves
  },
  gameOver: grid => {
    const result = this.validMoves(grid).length

    return result === 0
  },
  getEasyMove: validMoves => validMoves[Math.floor(Math.random() * validMoves.length)],
}

export default gameHelper
