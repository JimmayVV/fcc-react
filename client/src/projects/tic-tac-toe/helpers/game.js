const gameHelper = {
  winner: grid => {
    // Rows
    if (grid[0] !== null && grid[0] === grid[1] && grid[1] === grid[2]) return grid[0]
    if (grid[3] !== null && grid[3] === grid[4] && grid[4] === grid[5]) return grid[3]
    if (grid[6] !== null && grid[6] === grid[7] && grid[7] === grid[8]) return grid[6]

    // Cols
    if (grid[0] !== null && grid[0] === grid[3] && grid[3] === grid[6]) return grid[0]
    if (grid[1] !== null && grid[1] === grid[4] && grid[4] === grid[7]) return grid[1]
    if (grid[2] !== null && grid[2] === grid[5] && grid[5] === grid[8]) return grid[2]

    // Diags
    if (grid[0] !== null && grid[0] === grid[4] && grid[4] === grid[8]) return grid[0]
    if (grid[6] !== null && grid[6] === grid[4] && grid[4] === grid[2]) return grid[6]

    // Default return
    return false
  },
  // TODO: Add validation functions which we can call at the top of each helper
  validMoves: grid => {
    const validMoves = []

    for (let i = 0; i < grid.length; i += 1) {
      if (grid[i] === null) validMoves.push({ pos: i })
    }

    return validMoves
  },
  gameOver: grid => {
    const result = this.validMoves(grid).length

    return result === 0
  },
  getEasyMove: validMoves => validMoves[Math.floor(Math.random() * validMoves.length)],
}

export default gameHelper
